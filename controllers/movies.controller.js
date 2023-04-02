const axiosConfig = require("../const/axios.const");

class MovieSearchController {
  static async searchMovies(req, res, next) {
    try {
      const queryData = req.query;
      if (!queryData) return res.sendStatus(400);
      const response = await axiosConfig.get("/search/movie", {
        params: queryData,
      });
      if (response.data?.results.length < 1) {
        return res.status(404).send({ message: "Movie not found" });
      }
      res.status(200).send(response.data);
      console.log(response.data.results);
    } catch (error) {
      if (error.response.status === 404) {
        return res.status(404).send({ message: "Movies not found" });
      }
      res.status(400).send(error);
    }
  }

  static async searchMovieById(req, res, next) {
    try {
      let movieId = req.params.id;
      const response = await axiosConfig.get(`/movie/${movieId}`);
      res.status(200).send(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        return res.status(404).send({ message: "Movie not found" });
      }
      res.status(400).send(error);
    }
  }

  static async searchMovieTrailerById(req, res, next) {
    try {
      const movieId = req.params.id;
      const response = await axiosConfig.get(`/movie/${movieId}/videos`);
      res.status(200).send(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        return res.status(404).send({ message: "Movie not found" });
      }
      res.status(400).send(error);
    }
  }
}

module.exports = MovieSearchController;

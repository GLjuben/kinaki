const axiosConfig = require("../const/axios.const");
const globalRouter = require("../const/router.const");

class TvShowsSearchController {
  static async searchTVShows(req, res, next) {
    try {
      const queryData = req.query;
      if (!queryData) return res.sendStatus(400);
      const response = await axiosConfig.get("/search/tv", {
        params: queryData,
      });
      if (response.data?.results.length < 1) {
        return res.status(404).send({ message: "Tv-Show not found" });
      }
      res.status(200).send(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        return res.status(404).send({ message: "Tv show not found" });
      }
      res.status(400).send(error);
    }
  }

  static async searchTvShowById(req, res, next) {
    try {
      const tvShowId = req.params.id;
      const response = await axiosConfig.get(`/tv/${tvShowId}`);
      res.status(200).send(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        return res.status(404).send({ message: "Tv show not found" });
      }
      res.status(400).send(error);
    }
  }

  static async searchTvShowTrailerById(req, res, next) {
    try {
      const tvShowId = req.params.id;
      const response = await axiosConfig.get(`/tv/${tvShowId}/videos`);
      if (response.data?.results.length < 1) {
        return res.status(404).send({ message: "Tv-Show trailer not found" });
      }
      res.status(200).send(response.data);
    } catch (error) {
      if (error?.response?.status === 404) {
        return res.status(404).send({ message: "Tv-show trailer not found" });
      }
      res.status(400).send(error);
    }
  }
}

module.exports = TvShowsSearchController;

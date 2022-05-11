const router = require("express").Router();
const MovieSearchController = require("../controllers/movies.controller");

router.get("/search", MovieSearchController.searchMovies);
router.get("/:id", MovieSearchController.searchMovieById);
router.get("/:id/videos", MovieSearchController.searchMovieTrailerById);

module.exports = router;

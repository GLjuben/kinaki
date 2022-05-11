const router = require("express").Router();
const TvShowsSearchController = require("../controllers/tv-shows.controller");

router.get("/search", TvShowsSearchController.searchTVShows);
router.get("/:id", TvShowsSearchController.searchTvShowById);
router.get("/:id/videos", TvShowsSearchController.searchTvShowTrailerById);

module.exports = router;

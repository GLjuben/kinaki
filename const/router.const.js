const router = require("express").Router();
const moviesRouter = require("../routes/movies.routes");
const tvShowRouter = require("../routes/tv-shows.routes");
router.use("/tv", tvShowRouter);
router.use("/movies", moviesRouter);

module.exports = router;

const router = require("express").Router();
const moviesRouter = require("../routes/movies.routes");
const tvShowRouter = require("../routes/tv-shows.routes");

//middleware to tell the router which routes and controllers to use;
router.use("/tv", tvShowRouter);
router.use("/movies", moviesRouter);

module.exports = router;

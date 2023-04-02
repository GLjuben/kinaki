require("dotenv").config();

// sets security headers and we call it as a middleware to use all our endpoints below;
const helmet = require("helmet");
const express = require("express");
const globalRouter = require("./const/router.const");
const app = express();

//enables express to read json bodies;
app.use(express.json());
app.use(helmet());
// we call the global router and we add the url prefix fragment api;
app.use("/api", globalRouter);

//start the server;
app.listen(process.env.PORT, process.env.HOST, async () => {
  console.log(0.1 + 0.2 == 0.3);
  console.log(`Server is up at port: ${process.env.PORT}`);
});

require("dotenv").config();

const helmet = require("helmet");
const express = require("express");
const globalRouter = require("./const/router.const");
const app = express();

app.use(express.json());
app.use(helmet());
app.use("/api", globalRouter);

app.listen(process.env.PORT, process.env.HOST, async () => {
  console.log(`Server is up at port: ${process.env.PORT}`);
});

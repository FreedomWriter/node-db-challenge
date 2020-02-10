const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const resourcesRouter = require("../resources/resource-router");

const server = express();

server.use(cors());

server.use(express.json());

server.use(helmet());

server.use(morgan("dev"));

server.use("/api/resources", resourcesRouter);

server.get("/", (req, res) => {
  res.send("<h3>Sprint Challenge</h3>");
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong!" });
});

module.exports = server;

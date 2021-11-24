const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const app = express();
const config = require("./config.json");

app.use(cors());
app.use(
  "",
  createProxyMiddleware({
    target: config["URL"],
    changeOrigin: true,
  })
);
app.listen(config["PORT"]);

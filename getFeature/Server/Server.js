"use strict";

const express = require("express"),
      bodyParser = require("body-parser"),
      config = require("../Config/Config"),
       app = express();

app
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(require("../Controller/GetFeatureService"))
  .listen(config.port, () => {
    console.log("Servicio <MOCK> escuchando en el puerto:", config.port);
  });
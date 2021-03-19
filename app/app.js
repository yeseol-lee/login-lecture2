"use strict";

//모듈
const express = require('express');
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//정적 경로 추가 미들웨어
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use -> 미들웨어



module.exports = app;
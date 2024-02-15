const http = require("http");
const bodyparser = require("body-parser");
const express = require("express");

const app = express();
const adminroutes = require("./routes/admin");
const shoproute = require("./routes/shop");
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/admin", adminroutes);
app.use(shoproute);
app.use((req, res, next) => {
  res.status(404).send("<h1>No page found</h1>");
});

app.listen(3000);

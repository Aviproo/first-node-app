const http = require("http");
const path = require("path");
const bodyparser = require("body-parser");
const express = require("express");
const rootDir = require("./utl/path");

const app = express();
const adminroutes = require("./routes/admin");
const shoproute = require("./routes/shop");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminroutes);
app.use(shoproute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "pagenotFound.html"));
});

app.listen(3000);

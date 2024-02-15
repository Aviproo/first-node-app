const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    ` <form
      onsubmit=document.getElementById("username").value=localStorage.getItem('username')
      action="/"
      method="POST"
    >
      <input id="message" name="message" type="text" placeHolder="message" />
      <input type="hidden"  name="username" id="username" />

      <button type="submit">send</button>
    </form>`
  );
});
router.post("/", (req, res, next) => {
  data.push(`{${req.body.username}:${req.body.message}}`);
  console.log(data);
  console.log(`${req.body.username}:${req.body.message}`);
  res.redirect("/");
});
module.exports = router;

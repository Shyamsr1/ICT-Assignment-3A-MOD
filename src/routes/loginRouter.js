const express = require('express');
const loginRouter = express.Router();

loginRouter.get("/", function (req, res) {
    res.render("login", {
      nav: [
        { link: "/", name: "Home" },
      ],
      title: "ICT Library | Login",
    }); // render is used instead of sendFile for client
  });
  
  loginRouter.get("/signedIn", function(req,res){
      res.render("signedIn")
  });

  module.exports = loginRouter;

  
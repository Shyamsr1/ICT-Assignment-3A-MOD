const express = require('express');
const signUpRouter = express.Router();

signUpRouter.get("/", function (req, res) {
    res.render("signUp", {
      nav: [
        { link: "/", name: "Home" },
      ],
      title: "ICT Library | SignUp",
    }); // render is used instead of sendFile for client
  });
  
  signUpRouter.get("/signedIn", function(req,res){
      res.render("signedIn")
  });

  module.exports = signUpRouter;

  
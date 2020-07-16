const express = require("express");
const adminRouter = express.Router();
const Bookdata = require("../model/Bookdata");
const Authdata = require("../model/Authordata");

//set storage engine for multer
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/books");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else cb(null, false);
};

// init upload
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

function router(nav) {
  adminRouter.get("/", function (req, res) {
    res.render("admin", {
      nav,
      title: "Admin",
    });
  });

  // Add book page definition
  adminRouter.get("/addbooks", function (req, res) {
    res.render("addbooks", {
      nav,
      title: "Add Book Details",
    });
  });

  // For showing the individual book added in the main book page
  adminRouter.post("/addbooks/addbook", upload.single("img"), function (
    req,
    res
  ) {
    console.log(req.file.path);
    var item = {
      img: req.file.path.substr(20),
      alt: req.body.alt,
      cardid: req.body.cardid,
      cardtitle: req.body.cardtitle,
      cardtext: req.body.cardtext,
      textmuted: req.body.textmuted,
      datatarget: req.body.datatarget,
      ariacontrols: req.body.ariacontrols,
      buttons1: req.body.buttons1,
      id: req.body.id,
      arialabelled: req.body.arialabelled,
      alink: req.body.alink,
      detailText: req.body.detailText,
    };

    var book = Bookdata(item);
    book.save();
    res.redirect("/signedIn");
  });

  // Delete Books
  adminRouter.get("/deletebooks", function (req, res) {
    Bookdata.find().then(function (sign1) {
      // console.log(sign1);
      res.render("deletebooks", {
        nav,
        title: "ICT Library | Admin Delete Books",
        sign1,
      });
    });
  });

  adminRouter.get("/deletebooks/:id", function (req, res) {
    const id = req.params.id;
    console.log(req.params.id);
    Bookdata.findOne({ _id: id }).then(function (book) {
      res.render("bookdelete", {
        nav,
        title: "ICT Library | Delete Book Detail",
        book,
      });
    });
  });

  adminRouter.post("/dbDeleteBook", (req, res) => {
    const id = req.body.id;
    Bookdata.findByIdAndDelete(id, (err, result) => {
      if (err) console.log("Delete Error :", err);
      else console.log("Successfully Deleted the Book details");
    });
    res.redirect("/signedIn");
  });

  // update Books
  adminRouter.get("/updatebooks", function (req, res) {
    Bookdata.find().then(function (sign1) {
      // console.log(sign1);
      res.render("updatebooks", {
        nav,
        title: "ICT Library | Admin Update Books",
        sign1,
      });
    });
  });

  adminRouter.get("/updatebooks/:id", function (req, res) {
    const id = req.params.id;
    console.log(req.params.id);
    Bookdata.findOne({ _id: id }).then(function (book) {
      res.render("bookupdate", {
        nav,
        title: "ICT Library | Update Book Detail",
        book,
      });
    });
  });

  adminRouter.post("/dbUpdateBook", upload.single("img"), (req, res) => {
    const id = req.body._id;
    console.log(req.file.path);
    var updatedBook = {
      img: req.file.path.substr(20),
      alt: req.body.alt,
      cardid: req.body.cardid,
      cardtitle: req.body.cardtitle,
      cardtext: req.body.cardtext,
      textmuted: req.body.textmuted,
      alink: req.body.alink,
      detailText: req.body.detailText,
    };
    console.log(updatedBook);

    Bookdata.findByIdAndUpdate(id, updatedBook, (err, result) => {
      if (err) console.log("Update Error :", err);
      else console.log("Successfully Updated the Book details");
    });
    res.redirect("/signedIn");
  });


// Add author page definition
adminRouter.get('/addauthors',function(req,res){
    res.render('addauthors',{
        nav, title : 'Add Author Details'
    });
});  

adminRouter.post('/addauthors/addauthor', upload.single("img"), function (
    req,
    res
  ) {
    //    console.log(req.file.path);
    var item1 = {
      img: req.file.path.substr(20),
      alt: req.body.alt,
      cardid: req.body.cardid,
      cardtitle: req.body.cardtitle,
      cardtext: req.body.cardtext,
      textmuted: req.body.textmuted,
      datatarget: req.body.datatarget,
      ariacontrols: req.body.ariacontrols,
      buttons1: req.body.buttons1,
      id: req.body.id,
      arialabelled: req.body.arialabelled,
      alink: req.body.alink,
    };
    // console.log(item1);
    var auth = Authdata(item1);
    auth.save();
    // console.log(authors);
    res.redirect("/authors");
  });


  adminRouter.get("/updateauthors", function (req, res) {
    Authdata.find().then(function (auths1) {
      // console.log(sign1);
      res.render("updateauthors", {
        nav,
        title: "ICT Library | Admin Update Authors",
        auths1,
      });
    });
  });


  adminRouter.get("/updateauthors/:id", function (req, res) {
    const id = req.params.id;
    console.log(req.params.id);
    Authdata.findOne({ _id: id }).then(function (auth) {
      res.render("authorupdate", {
        nav,
        title: "ICT Library | Update Author Detail",
        auth,
      });
    });
  });


  adminRouter.post("/dbUpdateAuthor", upload.single("img"), (req, res) => {
    const id = req.body._id;
    console.log(req.file.path);
    var updatedAuthor = {
      img: req.file.path.substr(20),
      alt: req.body.alt,
      cardid: req.body.cardid,
      cardtitle: req.body.cardtitle,
      cardtext: req.body.cardtext,
      textmuted: req.body.textmuted,
      alink: req.body.alink,
      detailText: req.body.detailText,
    };
    console.log(updatedAuthor);

    Authdata.findByIdAndUpdate(id, updatedAuthor, (err, result) => {
      if (err) console.log("Update Error :", err);
      else console.log("Successfully Updated the Author details");
    });
    res.redirect("/authors");
  });



// Delete Authors
adminRouter.get("/deleteauthors", function (req, res) {
  Authdata.find().then(function (auths1) {
    // console.log(sign1);
    res.render("deleteauthors", {
      nav,
      title: "ICT Library | Admin Delete Authors",
      auths1,
    });
  });
});

adminRouter.get("/deleteauthors/:id", function (req, res) {
  const id = req.params.id;
  console.log(req.params.id);
  Authdata.findOne({ _id: id }).then(function (auth) {
    res.render("authordelete", {
      nav,
      title: "ICT Library | Delete Author Detail",
      auth,
    });
  });
});

adminRouter.post("/dbDeleteAuthor", (req, res) => {
  const id = req.body.id;
  Authdata.findByIdAndDelete(id, (err, result) => {
    if (err) console.log("Delete Error :", err);
    else console.log("Successfully Deleted the Author details");
  });
  res.redirect("/authors");
});






  return adminRouter;
}

module.exports = router;

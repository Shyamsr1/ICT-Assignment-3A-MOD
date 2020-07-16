// Basic server syntax is below :

const express = require("express");
const app = new express();

const nav =[
  { link: "/signedIn", name: "User Home" },
  { link: "/authors", name: "Authors" },
  { link: "/admin", name: "Admin" }
  
];

const signUpRouter = require('./src/routes/signUpRouter');
const authRouter = require('./src/routes/authRouter')(nav);
const signedInRouter = require('./src/routes/signedInRouter')(nav);

const loginRouter = require('./src/routes/loginRouter');
const adminRouter = require('./src/routes/adminRouter')(nav);

app.use(express.urlencoded({extended:true})); // to access any type of data and its a middleware
app.use(express.static("./public")); // after giving this only we will be able to access the images, css, js files


app.set("view engine", "ejs"); // set the view engine for ejs implementation
app.set("views", "./src/views"); // inside ejs defn - variable called views will have all the ejs files

//Route definition
app.use("/admin", adminRouter);
app.use("/signUp",signUpRouter);
app.use("/authors",authRouter);
app.use("/signedIn",signedInRouter);
app.use("/login", loginRouter);



app.get("/", function (req, res) {
  res.render("index", {
    nav: [
      { link: "/", name: "Home" },
      { link: "signUp", name: "Signup" },
    ],
    title: "ICT Library | Home",
    books,
  }); // render is used instead of sendFile for client
});

var books = [
  {
    img: "Java.jpeg",
    alt: "Java",
    cardid: "headingOne",
    cardtitle: "Java",
    cardtext:
      "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.",
    textmuted: "Last updated 3 mins ago",
    datatarget: "#collapseOne",
    ariacontrols: "collapseOne",
    button: "Read more...",
    id: "collapseOne",
    arialabelled: "headingOne",
    alink:
      "Click on the text content to go to the bookdetails... The syntax of Java is similar to C and C++, but it has fewer low-level facilities than either of them.",
  },
  {
    img: "php.jpeg",
    alt: "PHP",
    cardid: "headingTwo",
    cardtitle: "PHP",
    cardtext:
      "PHP is a popular general-purpose scripting language that is especially suited to web development.",
    textmuted: "Last updated 5 mins ago",
    datatarget: "#collapseTwo",
    ariacontrols: "collapseTwo",
    button: "Read more...",
    id: "collapseTwo",
    arialabelled: "headingTwo",
    alink:
      "Click on the text content to go to the book details... On a web server, the result of the interpreted and executed PHP code – which may be any type of data, such as generated HTML or binary image data – would form the whole or part of a HTTP response.",
  },
];

app.listen(3333);


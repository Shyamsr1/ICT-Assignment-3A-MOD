const express = require('express');
const signedInRouter = express.Router();
function router(nav){
var sign1 = [
    
    {
      img: "BootStrap.jpeg",
      alt: "BootStrap",
      cardid: "headingSix",
      cardtitle: "BootStrap",
      cardtext:
        "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development..",
      textmuted: "Last updated 18 mins ago",
      datatarget: "#collapseSix",
      ariacontrols: "collapseSix",
      button: "Read more...",
      id: "collapseSix",
      arialabelled: "headingSix",
      alink: "Click on the text content to go to the book details...In Bootstrap 3, Significant changes include: Major rewrite of the code Replacing Less with Sass Addition of Reboot, a collection of element-specific CSS changes in a single file,",
      detailText: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components. Bootstrap is the sixth-most-starred project on GitHub, with more than 135,000 stars, behind freeCodeCamp (almost 307,000 stars) and marginally behind Vue.js framework. According to Alexa Rank, Bootstrap is in the top-2000 in the USA while vuejs.org is in the top-7000 in the USA. In Bootstrap 3, Significant changes include: Major rewrite of the code Replacing Less with Sass Addition of Reboot, a collection of element-specific CSS changes in a single file, based on Normalize Dropping support for IE8, IE9 , and iOS 6 CSS Flexible Box support Adding navigation customization options Adding responsive spacing and sizing utilities Switching from the pixels unit in CSS to root ems Increasing global font size from 14px to 16px Dropping the panel, thumbnail, pager, and well components Dropping the Glyphicons icon font Huge number of utility classes Improved form styling, buttons, drop-down menus, media objects and image classes. The layout of web pages adjusts dynamically, taking into account the characteristics of the device used (desktop, tablet, mobile phone). The next major version, Bootstrap 3, was released on August 19, 2013.",
      authImg:"BootstrapMarkOtto.jpeg",
      authAlt:"BootstrapAuthorMarkOtto",
      },
    {
      img: "MongoDB.jpeg",
      alt: "MongoDB",
      cardid: "headingSeven",
      cardtitle: "MongoDB",
      cardtext: "MongoDB is a cross-platform document-oriented database program.",
      textmuted: "Last updated 20 mins ago",
      datatarget: "#collapseSeven",
      ariacontrols: "collapseSeven",
      button: "Read more...",
      id: "collapseSeven",
      arialabelled: "headingSeven",
      alink: "Click on the text content to go to the book details... Main features for example : Ad-hoc queries MongoDB supports field, range query, and regular-expression searches.",
      detailText: "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL). 10gen software company began developing MongoDB in 2007 as a component of a planned platform as a service product. In 2009, the company shifted to an open-source development model, with the company offering commercial support and other services. In 2013, 10gen changed its name to MongoDB Inc. Main features for example : Ad-hoc queries MongoDB supports field, range query, and regular-expression searches. Queries can return specific fields of documents and also include user-defined JavaScript functions. Queries can also be configured to return a random sample of results of a given size. Indexing Fields in a MongoDB document can be indexed with primary and secondary indices. Replication MongoDB provides high availability with replica sets. A replica set consists of two or more copies of the data. Each replica-set member may act in the role of primary or secondary replica at any time. All writes and reads are done on the primary replica by default. Secondary replicas maintain a copy of the data of the primary using built-in replication. Secondaries can optionally serve read operations, but that data is only eventually consistent by default.",
      authImg:"MongoDBDwightMerriman.jpeg",
      authAlt:"MongoDBAuthorDwight",
      },
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
      alink: "Click on the text content to go to the bookdetails... The syntax of Java is similar to C and C++, but it has fewer low-level facilities than either of them.",
      detailText: "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but it has fewer low-level facilities than either of them. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client-server web applications, with a reported 9 million developers. Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle) and released in 1995 as a core component of Sun Microsystems' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GNU General Public License.",
      authImg:"JavaJamesGosling.jpeg",
      authAlt:"JavaAuthorJames",
      },
   
    {
      img: "Nodejs.jpeg",
      alt: "Nodejs",
      cardid: "headingFour",
      cardtitle: "Nodejs",
      cardtext: "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside on a web browser.",
      textmuted: "Last updated 12 mins ago",
      datatarget: "#collapseFour",
      ariacontrols: "collapseFour",
      button: "Read more...",
      id: "collapseFour",
      arialabelled: "headingFour",
      alink: "Click on the text content to go to the book details...Though '.js' is the standard filename extension for JavaScript code, the name 'Node.js' doesn't refer to a particular file in this context and is merely the name of the product..",
      detailText: "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a 'JavaScript everywhere' paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts. Though .js is the standard filename extension for JavaScript code, the name 'Node.js' doesn't refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games). The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS Foundation, which is facilitated by the Linux Foundation's Collaborative Projects program. Corporate users of Node.js software include GoDaddy, Groupon,IBM, LinkedIn,Microsoft, Netflix,PayPal, Rakuten, SAP, Voxer, Walmart, and Yahoo!.",
      authImg:"NodejsRyanDahl.jpeg",
      authAlt:"NodeJSAuthorRyan",
      },
  ];

signedInRouter.get("/", function(req,res){
  const user = req.query.userName;
  const pass = req.query.loginPassword;
  console.log(user,pass);

    res.render("signedIn",{
      nav,
      title: "ICT Library | Admin Signed In",
      sign1,
    });
  });

signedInRouter.get("/home", function(req,res){ 
  const user = req.query.userName;
  const pass = req.query.loginPassword;
  console.log(user,pass);
  
    res.render("signedIn",{
      nav,
      title: "ICT Library | Signed In",
      sign1,
    });
  });
 return signedInRouter;
}
  module.exports = router;
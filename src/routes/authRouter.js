const express = require('express');
const authRouter = express.Router();
function router(nav){
var auths1 = [
  {
    img: "AngularJSMiskoHevery.jpeg",
    alt: "AngularAuthorMisko",
    cardid: "headingFive",
    cardtitle: "Misko Hevery",
    cardtext:
      "He works as an Agile Coach at Google where he is responsible for coaching Googlers to maintain the high level of automated testing culture. This allows Google to do frequent releases of its web applications with consistent high quality. ",
    textmuted: "Last updated 15 mins ago",
    datatarget: "#collapseFive",
    ariacontrols: "collapseFive",
    button: "Read more...",
    id: "collapseFive",
    arialabelled: "headingFive",
    alink:
      "Previously he worked at Adobe, Sun Microsystems, Intel, and Xerox (to name a few), where he became an expert in building web applications in web related technologies such as Java, JavaScript, Flex and ActionScript. He is very involved in Open Source community and an author of several open source projects such as Angular (http://angularjs.org) and JsTestDriver (http://code.google.com/p/js-test-driver).",

    },
  {
    img: "BootstrapMarkOtto.jpeg",
    alt: "BootstrapAuthorMarkOtto",
    cardid: "headingSix",
    cardtitle: "Mark Otto",
    cardtext:
      "Mark Otto is a designer living and working in San Francisco. Originally from Wisconsin, he freelanced his way through high school and college before dropping out and moving to California to work at a design firm, ZURB, in 2007..",
    textmuted: "Last updated 18 mins ago",
    datatarget: "#collapseSix",
    ariacontrols: "collapseSix",
    button: "Read more...",
    id: "collapseSix",
    arialabelled: "headingSix",
    alink: "Bootstrap, originally named Twitter Blueprint, was developed by Mark Otto and Jacob Thornton at Twitter as a framework to encourage consistency across internal tools. Before Bootstrap, various libraries were used for interface development, which led to inconsistencies and a high maintenance burden. According to Twitter developer Mark Otto: A super small group of developers and I got together to design and build a new internal tool and saw an opportunity to do something more. Through that process, we saw ourselves build something much more substantial than another internal tool. Months later, we ended up with an early version of Bootstrap as a way to document and share common design patterns and assets within the company.",
   
    },
  {
    img: "MongoDBDwightMerriman.jpeg",
    alt: "MongoDBAuthorDwight",
    cardid: "headingSeven",
    cardtitle: "Dwight Merriman",
    cardtext: "Dwight Merriman is an American Internet executive and entrepreneur in New York City's Silicon Alley. Best known for co-founding DoubleClick with Kevin O'Connor and serving as its CTO for 10 years, Merriman currently serves as the Founder and Chairman of MongoDB Inc.",
    textmuted: "Last updated 20 mins ago",
    datatarget: "#collapseSeven",
    ariacontrols: "collapseSeven",
    button: "Read more...",
    id: "collapseSeven",
    arialabelled: "headingSeven",
    alink: "DoubleClick was sold in 2005 for $1.1 billion to Hellman and Friedman LLC, and Merriman stepped down as CTO shortly thereafter. DoubleClick was acquired by Google for $3.1 billion in March 2008. After leaving DoubleClick, Merriman, along with former DoubleClick CEO Kevin Ryan, founded AlleyCorp, a network of affiliated Internet companies, including MongoDB Inc., ShopWiki, Business Insider, and Gilt Groupe. Despite business duties at MongoDB, Merriman still writes code..",
    
    },
  {
    img: "JavaJamesGosling.jpeg",
    alt: "JavaAuthorJames",
    cardid: "headingOne",
    cardtitle: "James Gosling",
    cardtext:
      "James Gosling received a Bachelor of Science from the University of Calgary and his M.A. and Ph.D. from Carnegie Mellon University, all in computer science. He wrote a version of Emacs called Gosling Emacs (Gosmacs) while working toward his doctorate.",
    textmuted: "Last updated 3 mins ago",
    datatarget: "#collapseOne",
    ariacontrols: "collapseOne",
    button: "Read more...",
    id: "collapseOne",
    arialabelled: "headingOne",
    alink: " He built a multi-processor version of Unix for a 16-way computer system[7] while at Carnegie Mellon University, before joining Sun Microsystems. He also developed several compilers and mail systems there. Gosling was with Sun Microsystems between 1984 and 2010 (26 years). He is known as the father of the Java programming language. He got the idea for the Java VM while writing a program to port software from a PERQ by translating Perq Q-Code to VAX assembler and emulating the hardware. He left Sun Microsystems on April 2, 2010 after it was acquired by the Oracle Corporation, citing reductions in pay, status, and decision-making ability, along with change of role and ethical challenges.",
   
    },
  {
    img: "phpRasmusLerdorf.jpeg",
    alt: "phpRasmusLerdorf",
    cardid: "headingTwo",
    cardtitle: "Rasmus Lerdorf",
    cardtext: "Rasmus Lerdorf (born 22 November 1968) is a Danish-Canadian programmer. He co-authored and inspired the PHP scripting language, authoring the first two versions of the language and participating in the development of later versions led by a group of developers including Jim Winstead (who later created blo.gs), Stig Bakken, Shane Caraveo, Andi Gutmans, and Zeev Suraski. He continues to contribute to the project.",
    textmuted: "Last updated 5 mins ago",
    datatarget: "#collapseTwo",
    ariacontrols: "collapseTwo",
    button: "Read more...",
    id: "collapseTwo",
    arialabelled: "headingTwo",
    alink: "From September 2002 to November 2009 Lerdorf was employed by Yahoo! Inc. as an Infrastructure Architecture Engineer. In 2010, he joined WePay in order to develop their application programming interface. Throughout 2011 he was a roving consultant for startups. On 22 February 2012 he announced on Twitter that he had joined Etsy. In July 2013 Rasmus joined Jelastic as a senior advisor to help them with the creation of new technology. Lerdorf is a frequent speaker at Open Source conferences around the world. During his keynote presentation at OSCMS 2007, he presented a security vulnerability in each of the projects represented at the conference that year. Lerdorf also appeared at the WeAreDevelopers Conferences 2017 and 2019, making a speech on the history of PHP, the new PHP 7 release in 2017, and the 25 years of PHP.",
   
    },
  {
    img: "PythonGuidovanRossum.jpeg",
    alt: "PythonAuthorGuido",
    cardid: "headingThree",
    cardtitle: "Guidovan Rossum",
    cardtext: "He is a Dutch programmer best known as the creator of the Python programming language, for which he was the Benevolent dictator for life(BDFL) until he stepped down from the position in July 2018.",
    textmuted: "Last updated 7 mins ago",
    datatarget: "#collapseThree",
    ariacontrols: "collapseThree",
    button: "Read more...",
    id: "collapseThree",
    arialabelled: "headingThree",
    alink: "While working at the Centrum Wiskunde & Informatica (CWI), Van Rossum wrote and contributed a glob() routine to BSD Unix in 1986[15][16] and helped develop the ABC programming language. He once stated, 'I try to mention ABC's influence because I'm indebted to everything I learned during that project and to the people who worked on it'. He also created Grail, an early web browser written in Python, and engaged in discussions about the HTML standard. He has worked for various research institutes, including the Centrum Wiskunde & Informatica (CWI) in the Netherlands, the U.S. National Institute of Standards and Technology (NIST), and the Corporation for National Research Initiatives (CNRI). From 2000 until 2003 he worked for Zope corporation. In 2003 Van Rossum left Zope for Elemental Security. While there he worked on a custom programming language for the organization.From 2005 to December 2012, he worked at Google, where he spent half of his time developing the Python language. In January 2013, he started working for Dropbox.",
 
    },
  {
    img: "NodejsRyanDahl.jpeg",
    alt: "NodeJSAuthorRyan",
    cardid: "headingFour",
    cardtitle: "Ryan Dahl",
    cardtext: "Ryan Dahl is an American software engineer and the original developer of the Node.js JavaScript runtime and the Deno JavaScript and TypeScript runtime..",
    textmuted: "Last updated 12 mins ago",
    datatarget: "#collapseFour",
    ariacontrols: "collapseFour",
    button: "Read more...",
    id: "collapseFour",
    arialabelled: "headingFour",
    alink: "After working on the Node project since 2009, Dahl announced in January, 2012 that he would step away from the project and turn over the reins to NPM creator and then Joyent employee Isaac Z. Schlueter. Ryan Dahl gave the following reason for moving on from the project: After three years of working on Node, this frees me up to work on research projects. I am still an employee at Joyent and will advise from the sidelines but I won’t be involved in the day-to-day bug fixes. In 2018 he announced Deno, a JavaScript/TypeScript runtime built with V8..",
   
    },
];

authRouter.get("/", function(req,res){
  res.render("authors",{
    nav,
    title: "ICT Library | Authors",
    auths1,
  });
});
return authRouter;
}
module.exports = router;

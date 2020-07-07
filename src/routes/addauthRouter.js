const express = require('express');
const addauthRouter = express.Router();
function router(nav){

addauthRouter.get("/",function(req,res){
    res.render('addauthors',{ nav,
        title : "ICT Library | Add Author Details"
    
});

});
return addauthRouter;
}
module.exports = router;


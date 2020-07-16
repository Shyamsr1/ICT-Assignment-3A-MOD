//Access mongoose package
const mongoose = require('mongoose');

//Database connection with database name - library
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition done here 
const Schema = mongoose.Schema;

//DB Structure of the single book defined in the Schema constructor 
const BookSchema = new Schema({
    
    img: String,
    alt: String,
    cardid: String,
    cardtitle: String,
    cardtext: String,
    textmuted: String,
    datatarget: String,
    ariacontrols: String,
    button: String,
    id: String,
    arialabelled: String,
    alink: String,
    detailText: String,

});

// IN order to use the above schema - create a model 

var Bookdata = mongoose.model('bookdata', BookSchema);

// In the above code - singular collection name will be converted to plural form bookdatas
module.exports = Bookdata;

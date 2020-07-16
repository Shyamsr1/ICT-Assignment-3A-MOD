const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const AuthSchema = new Schema({
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
});
var Authdata = mongoose.model('authdata', AuthSchema);
module.exports = Authdata;



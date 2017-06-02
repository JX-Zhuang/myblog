/**
 * Created by Jesse on 17/5/29.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blog');
var UsersSchema = mongoose.Schema({
    username: String,
    password:String
});
var UsersModel = mongoose.model('users',UsersSchema);
module.exports = UsersModel;
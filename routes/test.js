/**
 * Created by Administrator on 2015/4/19.
 */
var db = require('../models/db2');

exports.add=function(req,res,next){
    var name = req.body.name || '';
    var age = req.body.age || '';
    db.add(name,age, function (err,row) {
        res.render("success");
    })

}
exports.index= function (req,res,next) {
    res.render("test");
}
/**
 * Created by Administrator on 2015/4/19.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://kylin:123123@localhost:27017/myDatabase');

var Schema=mongoose.Schema;

var testSchema=new Schema({
    name:String,
    age:String
});

var test = mongoose.model("abcs", testSchema);

var newTest = new test();
newTest.name = 3;
newTest.age = 422222;

newTest.save(function(err){
    if(err) {
        console.log(err)
    } else {
        console.log('success');
    }
});
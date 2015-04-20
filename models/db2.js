/**
 * Created by Administrator on 2015/4/19.
 */
/**
 * Created by Administrator on 2015/4/17.
 */
var mongoose=require('mongoose');



mongoose.connect('mongodb://kylin:123123@localhost:27017/myDatabase')


//定义对象模型
Schema=mongoose.Schema;
var testSchema=new Schema({
    name:String,
    age:String
});
//访问对象模型
mongoose.model('tests',testSchema);
var test = mongoose.model('tests');

exports.add = function(title,age,callback) {
    var newTest = new test();
    newTest.name = title;
    newTest.age = age;

    newTest.save(function(err){
        if(err){
            callback(err);
        }else{
            callback(null);
        }
    });

}

//var newTest = new test();
//newTest.name = 111333;
//newTest.age = 2224444;
//
//newTest.save(function(err){
//    console.log(err);
//});

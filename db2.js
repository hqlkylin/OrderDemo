/**
 * Created by Administrator on 2015/4/19.
 */
/**
 * Created by Administrator on 2015/4/17.
 */
var mongoose=require('mongoose');


exports.connect= function (callback) {
    mongoose.connect('mongodb://kylin:123123@localhost:27017/myDatabase', function (err) {
        if (err) throw (err);
        else callback();
    });
}
exports.disconnect = function(callback) {
        mongoose.disconnect(callback);
}

//定义对象模型
Schema=mongoose.Schema;
var testSchema=new Schema({
    name:String,
    age:String
});
//访问对象模型
mongoose.model('test',testSchema);
var test = mongoose.model('test');

//exports.add = function(title,age,callback) {
//    var newTest = new test();
//    newTest.name = title;
//    newTest.age = age;
//
//    newTest.save(function(err){
//        if(err){
//            callback(err);
//        }else{
//            callback(null);
//        }
//    });
//
//}

var newTest = new test();
newTest.name = 111;
newTest.age = 222;

newTest.save(function(err){
    console.log(err);
    // 关闭数据库链接
    db.close();
});



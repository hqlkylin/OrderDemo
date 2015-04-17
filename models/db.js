/**
 * Created by Administrator on 2015/4/17.
 */
var mongoose=require('mongoose');

Schema=mongoose.Schema;
var orderSchema=new Schema({
    code:String,
    date:Date,
    goodsCode:String,
    brandName:String,
    num:Number,
    price:Number,
    personName:String,
    email:String
});
var Orders=mongoose.model('orders',orderSchema);

exports.connect= function (callback) {
    mongoose.connect('mongodb://kylin:123123@localhost:27017/myDatabase',function(err){
        if(err) throw (err);
        else callback();
    });
}
exports.addorder=function(order,callback){

    Orders.find({code:order.code}, function (err,orders) {
        if(err) throw (err)
        else{
            if(orders.length>0){
                exports.errMsg='该订单编号已被占用';
                callback();
            }else{
                Orders.create(order,function(err){
                    if(err) throw err
                    else{

                    }     exports.errMsg="";
                    callback();
                })
            }
        }
    })
}
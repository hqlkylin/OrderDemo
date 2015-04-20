/**
 * Created by Administrator on 2015/4/17.
 */
var mongoose=require("./db");

var Schema=mongoose.Schema;
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

function Order(order){
    this.code=order.code;
    this.date=order.date;

    this.goodsCode=order.goodsCode;
    this.brandName=order.brandName;
    this.num=order.num;
    this.price=order.price;
    this.money=order.money;
    this.personName=order.personName;
    this.email=order.email;

}
module.exports=Order;
Order.prototype.save=function(callback){
    var model={
        code:this.code,
        date:this.date,
        goodsCode:this.goodsCode,
        brandName:this.brandName,
        num:this.num,
        price:this.price,
        money:this.money,
        personName:this.personName,
        email:this.email
    };
    Orders.find({code:model.code}, function (err,orders) {
        if(err) throw (err)
        else{
            if(orders.length>0){
                exports.errMsg='订单编号已被占用';
                callback();
            }else{
                Orders.create(model,function(err){
                    if(err) throw err
                    else{

                    }     exports.errMsg="";
                    callback();
                })
            }
        }
    })
}



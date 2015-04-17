/**
 * Created by Administrator on 2015/4/17.
 */
var db=require("./db");
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
    }
    db.addorder(model,callback);
}
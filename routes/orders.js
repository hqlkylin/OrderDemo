/**
 * Created by Administrator on 2015/4/17.
 */
var express = require('express');
var router = express.Router();
var Order=require("../models/Order")
var db=require("../models/db");
/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.destroy();
    res.render('order_seach',{order:null,rows:new Array()});
});
router.get('/new/', function(req, res, next) {
    res.render('order_edit',{code:"",errMsg:null,successMsg:null});
});
router.post('/edit',function(req,res,next){

    var model=new Order({
        code:req.body.code,
        date:new  Date(req.body.date),
        goodsCode:req.body.goodsCode,
        brandName:req.body.brandName,
        num:req.body.num,
        price:req.body.price,
        money:req.body.money,
        personName:req.body.personName,
        email:req.body.email
    });
    model.save(function () {
      //  db.disconnect();
        if(db.errMsg)
            res.render('order_edit',{code:req.body.code,order:model,errMsg:db.errMsg,successMsg:null});
        else
            res.render('order_edit',{code:req.body.code,order:model,errMsg:null,successMsg:null});
      //  res.render('order_edit',{code:"",errMsg:null,successMsg:null});

    });

    //db.addorder(model,function(){
    //
    //      //  db.disconnect();
    //        //if(db.errMsg)
    //        //    res.render('order_edit',{code:req.body.code,order:model,errMsg:db.errMsg,successMsg:null});
    //        //else
    //        //    res.render('order_edit',{code:req.body.code,order:model,errMsg:null,successMsg:null});
    //        res.render('order_edit',{code:"",errMsg:null,successMsg:null});
    //
    //})

})
module.exports = router;

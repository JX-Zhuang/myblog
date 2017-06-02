var express = require('express');
var UsersModel = require('../model/users');
var login = require('../middle/permission').login;
var notLogin = require('../middle/permission').notLogin;
var router = express.Router();


/**
 * login
 */
router.get('/login',notLogin,function (req, res, next) {
    res.render('user/login');
});
router.post('/login',notLogin,function (req, res, next) {
    UsersModel.findOne({username:req.body.username},(err,result)=>{
        console.log(result);
        if(err){
            req.flash('error',err);
            res.redirect('back');
        }else if(!result){
            req.flash('error','没有该用户');
            res.redirect('back');
        } else if(result.password!==req.body.password){
            req.flash('error','密码错误');
            res.redirect('back');
        }else{
            req.flash('success','登录成功');
            req.session.user = req.body;
            res.cookie('connect.sid',req.body.username,{
                maxAge:6000
            });
            res.redirect('/');
        }
    });
});
/**
 * register
 */
router.get('/reg', function (req, res, next) {
    res.render('user/reg');
});
router.post('/reg', function (req, res, next) {
    UsersModel.findOne({username:req.body.username},(err,result)=>{
       if(err){
           req.flash('error',err);
           res.redirect('back');
       }else if(result){
           console.log(result);
           req.flash('error','已有该用户');
           res.redirect('back');
       }else {
           UsersModel.create(req.body,(err,result)=>{
               if(err){
                   req.flash('error',err);
                   res.redirect('back');
               }else {
                   req.flash('success','注册成功');
                   req.session.user = req.body;
                   res.cookie('connect.sid',req.body.username,{
                       maxAge:6000
                   });
                   res.redirect('/');
               }
           });
       }
    });
});
/**
 * logout
 */
router.get('/logout',login,function (req, res, next) {
    req.session.user = null;
    req.flash('success','已经退出');
    res.redirect('/');
});
module.exports = router;

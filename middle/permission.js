/**
 * Created by Jesse on 17/5/31.
 */

/**
 * 登录才能访问的路由
 * @param req
 * @param res
 * @param next
 */
exports.login = (req,res,next)=>{
    if(req.session.user){
        next();
    }else{
        req.flash('error','未登录');
        res.redirect('/users/login');
    }
};
/**
 * 未登录才能访问的路由
 * @param req
 * @param res
 * @param next
 */
exports.notLogin = (req,res,next)=>{
    if(req.session.user){
        req.flash('error','已登录');
        res.redirect('/');
    }else {
        next();
    }
};
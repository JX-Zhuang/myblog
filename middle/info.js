/**
 * Created by Jesse on 17/5/31.
 */
module.exports = (req,res,next)=>{
    if(req.session.user){
        res.locals.user = req.session.user;
    }else{
        res.locals.user = null;
    }
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
};
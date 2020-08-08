var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    // res.send('bsay aso');
    // if(req.body.uname == req.body.password){
    //     res.redirect('/house');
    // }
    // else{
    //     res.send('invalid');
    // }
    req.session.username = null;
    res.redirect('/login');

});
module.exports = router;
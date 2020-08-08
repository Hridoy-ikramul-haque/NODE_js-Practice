var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
    // res.send('bsay aso');
   
    res.render('login');

});


router.post('/',function(req,res){
    // res.send('bsay aso');
    if(req.body.uname == req.body.password){
        req.session.username = req.body.uname;
        res.redirect('/house');
    }
    else{
        res.send('invalid');
    }
   

});
module.exports = router;
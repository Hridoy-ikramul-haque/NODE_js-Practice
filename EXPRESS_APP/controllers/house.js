var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
      if(req.session.username !=null){
            var data ={
                  name : 'hridoy',
                  id   : '132' 
            };
            res.render('home',data);
      

      }
      else{
            res.redirect('./login');
      }
      // res.send('bsay aso');
     
});
module.exports = router;

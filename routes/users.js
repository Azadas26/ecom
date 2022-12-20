var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 
 var products=
 [
 {
   name:"Iphone 12 pro max",
   discription:"A apple Product",
   type:"Mobile Phone",
   image:"https://cdn.shopify.com/s/files/1/1684/4603/products/iphone-12-pro-max_Graphite_600x.png?v=1650691600"
 },

     {
       name: "Iphone 12 pro max",
       discription: "A apple Product",
       type: "Mobile Phone",
       image: "https://cdn.shopify.com/s/files/1/1684/4603/products/iphone-12-pro-max_Graphite_600x.png?v=1650691600"
     },

     {
       name: "Iphone 12 pro max",
       discription: "A apple Product",
       type: "Mobile Phone",
       image: "https://cdn.shopify.com/s/files/1/1684/4603/products/iphone-12-pro-max_Graphite_600x.png?v=1650691600"
     },

     {
       name: "Iphone 12 pro max",
       discription: "A apple Product",
       type: "Mobile Phone",
       image: "https://cdn.shopify.com/s/files/1/1684/4603/products/iphone-12-pro-max_Graphite_600x.png?v=1650691600"
     },

     {
       name: "Iphone 12 pro max",
       discription: "A apple Product",
       type: "Mobile Phone",
       image: "https://cdn.shopify.com/s/files/1/1684/4603/products/iphone-12-pro-max_Graphite_600x.png?v=1650691600"
     },

     {
       name: "Iphone 12 pro max",
       discription: "A apple Product",
       type: "Mobile Phone",
       image: "https://cdn.shopify.com/s/files/1/1684/4603/products/iphone-12-pro-max_Graphite_600x.png?v=1650691600"
     }

]

res.render('./user-pros/firstpage',{admin:false,products})


});

module.exports = router;

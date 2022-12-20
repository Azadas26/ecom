var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var products =
    [
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
      },

      {
        name: "Iphone 12 pro max",
        discription: "A apple Product",
        type: "Mobile Phone",
        image: "https://cdn.shopify.com/s/files/1/1684/4603/products/iphone-12-pro-max_Graphite_600x.png?v=1650691600"
      }

    ]

      res.render('./admin-pros/list-products',{admin:true,products})

});



router.get('/add-products',(req,res)=>
{
   res.render('./admin-pros/add-products',{admin:true})
})

router.post('/add-products', (req, res) => {
  
 
  console.log(req.body)
 console.log(req.files.image)
  })

module.exports = router;

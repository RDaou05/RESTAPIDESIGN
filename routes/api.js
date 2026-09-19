
const express = require ('express');
const router = express.Router();
const Hiker = require('../models/hikers');
const app = express();
//
//
// /**
// *  @swagger
// * /:
// *   get:
// *      summary: This api is used to check if get method is functioning
// *      description: This method is used to check if get method is functioning
// *      responses:
// *          200:
// *            description: This is to test the GET method
// */

// get a list of Hikers from the db
router.get('/', function(req, res){
    res.send({type: 'GET'});
});

// get all hikers from the db
router.get('/hikers', function(req, res, next){
    Hiker.find({}).then(function(hikers){
        res.send(hikers);
    }).catch(next);
});

// create and add a new hiker to the db

 router.post('/hikers', function(req, res, next){
     Hiker.create(req.body).then(function(hiker){
         res.send(hiker)
     }).catch(next)
 });

// How to update a record from the database
// update a hiker data in the db
 router.put('/hikers/:id', function(req, res, next){
     Hiker.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
         Hiker.findOne({_id: req.params.id}).then(function(hiker){
             res.send(hiker);
         });
     }).catch(next);
 });


 // how to delete a record from the database
  router.delete('/hikers/:id', function(req, res, next){
      Hiker.findByIdAndDelete({_id: req.params.id}).then(function(hiker){
          res.send(hiker);
      }).catch(next);
  });




module.exports = router;



// add a new Hiker to the db

// /**
// *  @swagger
// *   components:
// *       schema:
// *           hikers:
// *                 type: object
// *                 properties:
// *                     First_name:
// *                               type: String
// *                     Last_name:
// *                               type: String
// *                     position:
// *                             type: String
// *                     available:
// *                               type: Boolean
// *
// *
// */
//
//
// // /**
// *  @swagger
// * /hikers:
// *   post:
// *      summary: This api is used to post data to the database
// *      description: This method is used to check if get method is functioning
// *      requestBody:
// *         required: true
// *         content:
// *             application/json:
// *                  schema:
// *                      $ref: '#components/schema/hiker'
// *      responses:
// *          200:
// // *            description: Added successfully
// *            content:
// *                 application/json:
// *                     schema:
// *                         type: array
// */
//
//
//
//
// router.post('/hikers', function(req, res){
//     Hiker.create(req.body).then(function(hiker){
//         res.send(hiker);
//     });
// });


// update a hiker data in the db
// router.put('/hikers/:id', function(req, res, next){
//     Hiker.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
//         Hiker.findOne({_id: req.params.id}).then(function(hiker){
//             res.send(hiker);
//         });
//     }).catch(next);
// });





// how to delete a record from the database
// router.delete('/hikers/:id', function(req, res, next){
//     Hiker.findByIdAndRemove({_id: req.params.id}).then(function(hiker){
//         res.send(hiker);
//     }).catch(next);
// });




// router.post('/', function(req, res){
//     console.log(req.body);
//     res.send({
//     type: 'POST'
//     name:req.body.name,
//     Rating: req.body.Rating
//   });
//
// });


// get a list of  hikers in the field from the db
//router.get('/hikers', function(req, res){
  //  res.send({type: 'GET'});
//});


// update a hiker in the db
//router.put('/hikers/:id', function(req, res){
    //res.send({type: 'PUT'});
//});

// delete a hiker from the db
//router.delete('/hikers/:id', function(req, res){
    //res.send({type: 'DELETE'});
//});

//module.exports = router;



// SELECT E.EMP_NUM, E.EMP_LNAME, E.EMP_MGR, M.EMP_LNAME
// FROM EMP E JOIN EMP M ON E.EMP_MGR = M.EMP_NUM;
//
//
// SELECT P_DESCRIPT, P_PRICE, V_NAME, V_CONTACT, V_AREACODE,
// V_PHONE
// FROM PRODUCT P JOIN VENDOR V ON P.V_CODE = V.V_CODE;
//
//
//
//
//
// SELECT INVOICE.INV_NUMBER, PRODUCT.P_CODE, P_DESCRIPT,
// LINE_UNITS, LINE_PRICE
// FROM INVOICE JOIN LINE ON INVOICE.INV_NUMBER = LINE.INV_NUMBER
// JOIN PRODUCT ON LINE.P_CODE = PRODUCT.P_CODE;
//
//
//
//
//
// SELECT P_CODE, P_DESCRIPT, V_CODE, V_NAME, V_AREACODE, V_PHONE
// FROM PRODUCT JOIN VENDOR USING (V_CODE);
//
//
//
//
// SELECT INVOICE.INV_NUMBER, CUS_CODE, INV_DATE, P_CODE
// FROM INVOICE CROSS JOIN LINE;

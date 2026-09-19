const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();




// listen for requests
app.listen(process.env.PORT || 3000, function(){
    console.log('now listening for requests : 09/14/2026');
});




// const swaggerUi = require('swagger-ui-express');
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerOptions = {
//      swaggerDefinition: {
//        openapi: '3.0.0',
//        info: {
//          title: 'My API',
//          version: '1.0.0',
//          description: 'API documentation using Swagger',
//        },
//        servers: [
//           {
//             url: 'http://localhost:3000'
//        }
//
//        ]
//      },
//      apis: ['./routes/api.js'], // Path to your API definitions
//    };
//
//    const swaggerSpec = swaggerJSDoc(swaggerOptions);
//
//    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//
//



// // connect to mongodb
mongoose.connect('mongodb://localhost/hikerdb3');
//
// // use body-parser middleware
app.use(bodyParser.json());
app.use(express.json());
//
// // initialize routes
app.use('/api', require('./routes/api'));

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});
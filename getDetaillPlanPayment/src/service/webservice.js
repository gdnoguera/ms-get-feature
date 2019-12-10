const express = require("express");

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type : '*/*' }));



var objeto = require('../models/Response');


app.get("/getDetailPlanPayment", (request, response) => {
response.json(objeto);

})

app.listen(process.env.PORT || 5000,
    () => {
        console.log(8080);
    });




const express = require("express");
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type : '*/*' }));



var objeto = require('../models/Response');


app.get("/getDetailPlanPayment", (request, response) => {
response.json(objeto);

})



app.listen(8080,
    () => {
        console.log(8080);
    });




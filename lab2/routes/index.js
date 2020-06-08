'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var method = req.query.method;
    var result;
    var operator;
    var error = false;

    if (method == "add") {
        operator = "+";
        result = x + y;
    }
    else if (method == "subtract") {
        operator = "-";
        result = x - y;
    }
    else if (method == "multiply") {
        operator = "x";
        result = x * y;
    }
    else if (method == "divide") {
        operator = "/";
        result = x / y;
    }
    else {
        console.log("Error: Method \'" + method + "'\ is not valid");
        error = true;
    }

    if (!error) {
        console.log(x + " " + operator + " " + y + " = " + result);
    }

    res.render('index', { title: 'Express' });
});

module.exports = router;

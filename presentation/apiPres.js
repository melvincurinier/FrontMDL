var express = require("express");
var business = require("../business/business");
var app = express();

const apiServ = {
    start: function (port) {
        app.use(express.json());

        app.use(function(req, res, next) {  
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        app.get("/api/customers", function(req, res){
            const number = req.query.number;
            const page = req.query.page;

            const resCustomers = business.getCustomers(number, page);

            res.json(resCustomers);
        });

        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
};

module.exports = apiServ;
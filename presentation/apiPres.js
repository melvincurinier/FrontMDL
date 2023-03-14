var express = require("express");
var business = require("../business/business");
var app = express();

const apiServ = {
    start: function (port) {
        app.use(express.json());

        app.get("/test", function (req, res) {
            const testObj = {
                test: "test"
            };

            console.log("call done");
            res.json(testObj);
        });

        app.get("/api/customers", function(req, res){
            const customers = business.getAllCustomers();
            res.json(customers);
        });

        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
};

module.exports = apiServ;
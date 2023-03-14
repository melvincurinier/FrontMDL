const fs = require("fs");

const filename = "./data/customers.json";

let dataLayer = {
    getAllCustomers : function(){
        // read json file
        const data = fs.readFileSync(filename);

        // parse to object
        const customers = JSON.parse(data);

        // return customers
        return customers;
    }
}

module.exports = dataLayer;
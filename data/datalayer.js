const fs = require("fs");
const proc = require("process")

require("dotenv").config();
const filename = "./data/customers.json";

let dataLayer = {
    getAllCustomers: function () {
        // read json file
        const data = fs.readFileSync(filename);

        // parse to object
        const customers = JSON.parse(data);

        // return customers
        return customers;
    },

    getNextId: function () {
        return;
    },

    addCustomer: function (customer) {
        return;
    },

    getCustomer: function (number, page) {
        return;
    }
}

module.exports = dataLayer;
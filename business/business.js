const dal = require("../data/datalayer");

const business = {
    getAllCustomers : function(){
        return dal.getAllCustomers();
    },
}

module.exports = business;
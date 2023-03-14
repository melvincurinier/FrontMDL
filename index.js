const express = require("express");
const app = express();
const port = 3000;

let clients = [];

function ajouterClient(_email, _prenom, _nom, _societe, _pays) {
    var date = new Date();
    let client = {
        id: clients.length + 1,
        email: _email,
        first: _prenom,
        last: _nom,
        company: _societe,
        country: _pays,
        createdAt: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    };
    clients.push(client);
}

const apiServ = require("./presentation/apiPres");
const port2 = 3001;

function main2() {
    apiServ.start(port2);
}

main2();

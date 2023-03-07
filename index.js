const express = require("express");
const { sendFile } = require("express/lib/response");
const app = express();
const port = 3000;

function main(){
    app.use(express.static("public"));

    app.listen(port, function(){
        console.log(`Example app listening on port ${port}`);
    });
}

main();
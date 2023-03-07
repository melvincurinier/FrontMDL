const express = require("express");
const app = express();
const port = 3000;

function main(){
    app.get("/", (req, res) => {
        res.send("Hello World !");
    });

    app.listen(port, function(){
        console.log(`Example app listening on port ${port}`);
    });
}

main();
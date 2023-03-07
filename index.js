const express = require("express");
const app = express();
const port = 3000;

function main(){
    app.get("/", (req, res) => {
        const currentDate = new Date();
        console.log("page called at " + currentDate);
        res.send("Hello World ! Nous sommes le " + currentDate);
    });

    app.listen(port, function(){
        console.log(`Example app listening on port ${port}`);
    });
}

main();
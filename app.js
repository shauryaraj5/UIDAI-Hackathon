const express = require("express");
const got = require("got");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.post("/", function (req, res) {
    console.log(req.body);
    let modAdd = req.body.split((/(?:,|\r|\n)+/));
    let pinCode = "";

    modAdd.forEach((element, i) => {
        modAdd[i] = element.trim();
        modAdd[i] = modAdd[i].toLowerCase();
        if (modAdd[i].length == 6 && !isNaN(modAdd[i])) {
            pinCode = element;
        }
    });

    console.log("pincod :" + pinCode);

    let filteredAdd = modAdd.filter((c, index) => {
        return (modAdd.indexOf(c) === index);
    });

    filteredAdd.forEach((e, i) => {
        if (i != 0) {
            filteredAdd[i] = "\n" + e;
        }
    });

    console.log(filteredAdd);

    res.send(filteredAdd.toString());
});


app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});
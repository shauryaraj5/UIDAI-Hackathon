const express = require("express");
const got = require("got");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.post("/", function (req, res) {

    const pincodeRegex = /\d{6}/g;
    const pinIndex = req.body.search(pincodeRegex);
    const pinCode = req.body.substring(pinIndex, pinIndex + 6);
    console.log(`Pincode - ${pinCode}`);
    req.body = req.body.replace(pinCode, "");

    let modAdd = req.body.split((/(?:,|\r|\n)+/));
    console.log(modAdd);

    const originalFormat = {};
    const finalString = [];

    const formatKey = (str) => {
        let splitArr = str.trim().toLowerCase().split(" ");
        let splitSet = new Set(splitArr);
        str = [...splitSet].join(" ");
        let originalString = "";
        [...splitSet].forEach((elem, i) => {
            originalString += (elem[0].toUpperCase() + elem.substring(1) + " ");
        })
        return [str, originalString];
    }
    // const formatValue = (str, i) => {
    //     if(str.trim()[])
    // }

    modAdd.forEach((element, i) => {
        if(element.trim() !== "")
            [key, value] = formatKey(element)
            originalFormat[key] = i>0 ? '\n'+value : value;
    });

    delete originalFormat[pinCode];

    console.log(originalFormat);

    for(key in originalFormat) {
        finalString.push(originalFormat[key]);
    }

    finalString[finalString.length-1] = `${finalString[finalString.length-1]} ${pinCode}`;
    console.log(finalString);

    res.send(finalString.toString());
});


app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});
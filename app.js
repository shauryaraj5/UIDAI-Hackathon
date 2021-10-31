const express = require("express");
const got = require("got");
const { set } = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", function (req, res) {

    //Change all key values to lower case using lowercaseKyes()

    const lowercaseKeys = obj =>
        Object.keys(obj).reduce((acc, key) => {
            acc[key.toLowerCase()] = obj[key];
            return acc;
        }, {});

    let originalAdd = lowercaseKeys(req.body);

    //Change sequence of keys according to UIDAI address format
    let addSkeleton = {
        "house": null,
        "building": null,
        "apartment": null,
        "street": null,
        "road": null,
        "lane": null,
        "area": null,
        "locality": null,
        "sector": null,
        "landmark": null,
        "village": null,
        "town": null,
        "city": null,
        "sub district": null,
        "district": null,
        "state": null,
        "pincode": null
    }

    let modAdd = {
        "pincode": null,
        "state": null,
        "district": null,
        "sub sistrict": null,
        "city": null,
        "town": null,
        "village": null,
        "landmark": null,
        "sector": null,
        "locality": null,
        "area": null,
        "lane": null,
        "road": null,
        "street": null,
        "apartment": null,
        "building": null,
        "house": null
    }

    //Handles casing of resultant address
    const formatString = (str) => {
        const specialCharRegex = new RegExp("\\W|_");
        while (specialCharRegex.test(str[0])) {
            str = str.replace(str[0], "");
        }
        while (specialCharRegex.test(str[str.length - 1])) {
            str = str.replace(str[str.length - 1], "");
        }

        str = str.trim();
        str = str[0].toUpperCase() + str.substring(1);
        return str;
    }

    originalAdd = Object.assign(modAdd, originalAdd);

    let addSt = new Set();

    //Remove duplication and separators in address
    for (const field in originalAdd) {
        if (originalAdd[field] !== null) {
            let modAdd = originalAdd[field].split((/(?:, | ,|,|\r|\n)+/));

            modAdd.forEach(element => {
                if (addSt.has(element.toLowerCase())) {
                    originalAdd[field] = originalAdd[field].replace(element, "");
                } else {
                    addSt.add(element.toLowerCase().trim());
                }
            });
        }
    }

    originalAdd = Object.assign(addSkeleton, originalAdd);

    for (let key in originalAdd) {
        if (originalAdd[key] !== null)
            originalAdd[key] = formatString(originalAdd[key]);
    }

    console.log(originalAdd);

    let finalAddress = "";

    for (let key in originalAdd) {
        if (originalAdd[key] !== null) {
            finalAddress += (originalAdd[key] + ", ");
        }
    }

    finalAddress = finalAddress.substring(0, finalAddress.length - 2);

    originalAdd["formatted_address"] = finalAddress;


    res.send(originalAdd);

});


app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});
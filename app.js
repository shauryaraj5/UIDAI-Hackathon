const express = require("express");
const got = require("got");
const { set } = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", function (req, res) {

    let originalAdd = req.body;

    let addSkeleton = {
        "House": null,
        "Building": null,
        "Apartment": null,
        "Street": null,
        "Road": null,
        "Lane": null,
        "Area": null,
        "Locality": null,
        "Sector": null,
        "Landmark": null,
        "Village": null,
        "Town": null,
        "City": null,
        "Sub District": null,
        "District": null,
        "State": null,
        "Pincode": null
    }

    let modAdd = {
        "Pincode": null,
        "State": null,
        "District": null,
        "Sub District": null,
        "City": null,
        "Town": null,
        "Village": null,
        "Landmark": null,
        "Sector": null,
        "Locality": null,
        "Area": null,
        "Lane": null,
        "Road": null,
        "Street": null,
        "Apartment": null,
        "Building": null,
        "House": null
    }

    originalAdd = Object.assign(modAdd, originalAdd);

    let addSt = new Set();

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

    for (const removeNull in originalAdd) {
        if (originalAdd[removeNull] === null) {
            delete originalAdd[removeNull];
        }
    }

    res.send(originalAdd);

});


app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});
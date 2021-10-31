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

    const formatString = (str) => {
        const specialCharRegex = new RegExp("\\W|_");
        while(specialCharRegex.test(str[0]))
        {
            str = str.replace(str[0], "");
        }
        while(specialCharRegex.test(str[str.length - 1]))
        {
            str = str.replace(str[str.length - 1], "");
        }

        str = str.trim();
        str = str[0].toUpperCase() + str.substring(1);
        return str;
    }

    originalAdd = Object.assign(modAdd, originalAdd);

    let addSt = new Set();

    for (const field in originalAdd) {
        if (originalAdd[field] !== null) {
            let modAdd = originalAdd[field].split((/(?:, | ,|,|\r|\n)+/));
            // console.log(modAdd);

            modAdd.forEach(element => {
                if (addSt.has(element.toLowerCase())) {
                    originalAdd[field] = originalAdd[field].replace(element, "");
                } else {
                    addSt.add(element.toLowerCase().trim());
                }
            });
        }
    }

    // console.log(originalAdd);
    originalAdd = Object.assign(addSkeleton, originalAdd);

    for(let key in originalAdd) {
        if(originalAdd[key] !== null)
            originalAdd[key] = formatString(originalAdd[key]);
    }

    // console.log(originalAdd);

    let formattedAddress = `${originalAdd.House ? originalAdd.House : ""}${originalAdd.Building ? ", "+originalAdd.Building : ""}, ${originalAdd.Apartment ? ", "+originalAdd.Apartment+"," : ""}
    ${originalAdd.Street ? originalAdd.Street : ""}${originalAdd.Road ? ", "+originalAdd.Road : ""}${originalAdd.Lane ? ", "+originalAdd.Lane+"," : ""}
    ${originalAdd.Area ? originalAdd.Area : ""}${originalAdd.Locality ? ", "+originalAdd.Locality : ""}${originalAdd.Sector ? ", "+originalAdd.Sector+"," : ""}
    ${originalAdd.Landmark ? +originalAdd.Landmark+"," : ""}
    ${originalAdd.Vilage ? originalAdd.Village : ""}${originalAdd.Town ? ", "+originalAdd.Town : ""}${originalAdd.City ? ", "+originalAdd.City+"," : ""}
    ${originalAdd["Sub District"] ? originalAdd["Sub District"] : ""}${originalAdd.District ? ", "+originalAdd.District+"," : ""}
    ${originalAdd.State ? originalAdd.State : ""}${originalAdd.Pincode ? " - "+originalAdd.Pincode : "."}`;

    formattedAddress = formattedAddress.split("\n");
    let finalAddress = [];
    let re = new RegExp("\\W|_");

    formattedAddress.forEach((str) => {
        if(str.trim() !== "")
            finalAddress.push(str);
    });

    finalAddress.forEach((str, i) => {
        while(re.test(str[0]))
        {
            str = str.replace(str[0], "");
        }
        finalAddress[i] = str;
    })

    finalAddress = finalAddress.join("\n");
    originalAdd.formatted_address = finalAddress;

    // for (const removeNull in originalAdd) {
    //     if (originalAdd[removeNull] === null) {
    //         delete originalAdd[removeNull];
    //     }
    // }

    res.send(originalAdd);

});


app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});
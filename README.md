<h1 align="center">AADHAAR HACKATHON 2021 - Address Update 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

### Problem Statement
> Imagine you belong to the capital city of India and you reside within IIT Delhi campus. You have just enrolled yourself to the aadhaar identity platform and after successful enrolment, you have received your letter containing the aadhaar number, demographics data such as name and address. Alas, in
the address field you see the repetition of ‘Delhi’ multiple times, making the address a little convoluted. Like you, many of the residents especially those who are residing in
the urban areas see the repetition of the same content in the final address.

### 🏠 [API endpoint](https://uidai-address-handler.herokuapp.com/)

## Our Solution
* This API built by us will be used to remove unnecessary duplication of address fields and then identify the major fields like district, state and pincode and then reformat the address to have these fields at their rightful place.
* This will ensure the proper formatting and readability of the address mentioned on an individual`s Aadhar Card.
* Our API has support for multiple regionals languages, like Hindi,telugu,etc.

## Usage

* Send a post request at https://uidai-address-handler.herokuapp.com/
* Request body should contain raw input in JSON format.
* Following are vaild keys for JSON:
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
* The response would have all the fields in correct sequence, captalisation and format, without any repetition.
* To get complete address use the last key of the response: ```formatted_address```

## Team Bien_Equipe Members

* Mrinal Singh Malav <a href="https://github.com/misima49" target="_blank">@misima49</a>
* Bignesh Sahoo <a href="https://github.com/bigsbunny" target="_blank">@bigsbunny</a>
* Chidananda Sahoo <a href="https://github.com/csnaya" target="_blank">@csnaya</a>
* Nikita Khaitan <a href="https://github.com/niqta31" target="_blank">@niqta31</a>
* Shaurya Raj <a href="https://github.com/shauryaraj5" target="_blank">@shauryaraj5</a>

## Samples
#### Request:
```
{
    "Building" : "#1085 Pattabhi Ram Shastry Lane",
    "Street" : "mothi nagar", 
    "Location" : "Near New Bomboo Bazaar",
    "Landmark" : "Kalasipalyam,Bengaluru",
    "City" : "Bengaluru North",
    "District" : "Bengaluru",
    "State" : "Karnataka"
}
```
#### Response:
```
{
    "house": null,
    "building": "1085 Pattabhi Ram Shastry Lane",
    "apartment": null,
    "street": "Mothi nagar",
    "road": null,
    "lane": null,
    "area": null,
    "locality": null,
    "sector": null,
    "landmark": "Kalasipalyam",
    "village": null,
    "town": null,
    "city": "Bengaluru North",
    "sub district": null,
    "district": "Bengaluru",
    "state": "Karnataka",
    "pincode": null,
    "sub sistrict": null,
    "location": "Near New Bomboo Bazaar",
    "formatted_address": "1085 Pattabhi Ram Shastry Lane, Mothi nagar, Kalasipalyam, Bengaluru North, Bengaluru, Karnataka, Near New Bomboo Bazaar"
}
```

## Show your support

Give a ⭐️ if this project helped you!

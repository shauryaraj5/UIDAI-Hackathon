# ProperAddress API
**AADHAAR HACKATHON 2021** - Address Update

## Team Bien_Equipe Members:
```markdown
1.Bighnesh Sahoo
2.Chidananda Sahoo
3.Mrinal Singh Malav
4.Nikita Khaitan
5.Shaurya Raj
```

## Problem Statement:
**Address Formatting Issue:**

Imagine you belong to the capital city of India and you reside within IIT Delhi campus. You have just enrolled yourself to the aadhaar identity platform and after successful enrolment, you have received your letter containing the aadhaar number, demographics data such as name and address. Alas, in
the address field you see the repetition of ‘Delhi’ multiple times, making the address a little convoluted. Like you, many of the residents especially those who are residing in
the urban areas see the repetition of the same content in the final address.

## Our Solution:

* This API built by us will be used to remove unnecessary duplication of address fields and then identify the major fields like district, state and pincode and then reformat the address to have these fields at their rightful place.
* This will ensure the proper formatting and readability of the address mentioned on an individual’s Aadhar Card. 
* Our API has support for multiple regionals languages, like Hindi,telugu,etc.
* Our API can be used as follows:
   - Send HTTP Post Request at: https://uidai-address-handler.herokuapp.com
   - Post request body: A JSON raw string containing address of the Aadhar user.
   - Response: Single optimised & uncluttered address string, with proper formatting to enhance readability and bring clarity.

### An example:

**Input File**

```js
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

**Output File**

```js
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

### Screenshot:

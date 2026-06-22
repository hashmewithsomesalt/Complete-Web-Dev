/*
SUPER CHALLENGE

Render out a card for each of the properties in the
propertyForSaleArr array (in the 'proper' folder).
Each card should have an image, a property location, 
a price, a comment and the TOT, property size in square metres
(each object has an array with the size in square metres of 
the individual rooms

If no array of properties is passed to getPropertyHtml
, the placeholder property stores in placeholderPropertyObj
(in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge
-import/ export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

This is the HTML template. Replace everything in UPPERCASE
with property data.

<section class = "card">
<img src ="/images/IMAGE">
<div class = "card-right">
<h2> Property Location</h2>
<h3>Price GBP</h3>
<p>COMMENT</p>
<h3>Total size in square meters m&sup2; </h3>
</div>
</section>
*/

import { propertyForSaleArr } from "./propertyForSaleArr.js";
import { placeholderObj } from "./placeholderObj.js";

function getPropertyHtml(propertyArr = [placeholderObj]) {
    return propertyArr.map((property) =>{
        const {image, location, price, comment, sizeSqM} = property
        const totalRoomSizeM2 = sizeSqM.reduce((total, current) => total + current)
        return `<section class = "card">
<img src ="${image}">
<div class = "card-right">
<h2> Property Location: ${location}</h2>
<h3>Price GBP: ${price}</h3>
<p>COMMENT: ${comment}</p>
<h3>Total size in square meters: ${totalRoomSizeM2} </h3>
</div>
</section>`
    })
}

console.log(getPropertyHtml())
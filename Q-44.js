"use strict";
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    console.log(items.join(", "));
}
// Call the function with different number of arguments
makeSandwich("bread", "cheese", "lettuce", "tomato");
makeSandwich("bread", "turkey", "mayo");
makeSandwich("bread", "peanut butter", "jelly");

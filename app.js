'use strict';

console.log ("You Can Have Confidence");
alert ("Confidence starts here!");

const confidenceRating = prompt ("How would you rate your confidence level today?");
console.log (confidenceRating);

// string concatenation means strings combined with variables.
document.write("Your "  + confidenceRating +   " Adds value to who you are");

if (confidenceRating == "5") {alert ("Take our Confidence Course");
} else if (confidenceRating == "7") { 
    alert ("Get our Confidence Ebook");
}else if (confidenceRating == "1") {
        alert ("Take our Confidence Course");
} else if (confidenceRating == "3") {
    alert ("Take our Confidence Course");
} else if (confidenceRating == "10") 
    alert ("Get our Confidence Ebook");
else {
    alert ("Take our Confidence Course")
}
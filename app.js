'use strict';

console.log ("You Can Have Confidence");
alert ("Confidence starts here!");
youCanHaveConfidence();

function youCanHaveConfidence() {
    document.write("Your" + confidenceRating + " Adds value to who you are");
}

function getConfidenceRating() {
    const confidenceRating = prompt ("How would you rate your confidence level today?")
        return confidenceRating;
}

// const confidenceRating = getConfidenceRating();


// console.log (getConfidenceRating);
// 
// console.log (confidenceRating);

// string concatenation means strings combined with variables.// 


// document.write("Your "  + confidenceRating +   " Adds value to who you are");
youCanHaveConfidence();

function specialmessage(confidenceRating){
    if (confidenceRating == ""){
     confidenceRating = prompt("Come on, please tell me your confidence rating!");}
     
     if (confidenceRating == "5");
     document.write ("Take our Confidence Course");
if (confidenceRating == "5") {alert ("Take our Confidence Course");
} else if (confidenceRating == "7") { 
    alert ("Get our Confidence Ebook");
} else if (confidenceRating == "1") {
        alert ("Take our Confidence Course");
} else if (confidenceRating == "3") {
    alert ("Take our Confidence Course");
} else if (confidenceRating == "10") 
    alert ("Get our Confidence Ebook");
  else {
    alert ("Take our Confidence Course")
}




// FUNCTIONS!!

// function addTwoNumbers() {
//     let num1 = 7;
//     let num2 = 4;
//     let sum = num1 + num2;
//     console.log(sum);
//     return (sum);

// }

// function addTwoNumbers(num1, num2) {
//     let sum= num1 + num2;
//     console.log("Sum is: ", sum);
//     return sum;
// }

// addTwoNumbers (47,20);// addTwoNumbers (1,4);}

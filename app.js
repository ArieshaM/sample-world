'use strict';

console.log("You Can Have Confidence");
alert("Confidence starts here!");


    let response = prompt('Do you have confidence? Answer yes to proceed') ;

    while (response != "yes" ) {
        response = prompt ('please answer yes to proceed') ;

    }

    alert ('Check out our Confidence Ebook');

function youCanHaveConfidence(confidenceRating) {
    if (confidenceRating == "") {
        confidenceRating = prompt("Come on, please tell me your confidence rating!");
    } else if (confidenceRating == "5") {
        alert("Take our Confidence Course");
    } else if (confidenceRating == "7") {
        alert("Get our Confidence Ebook");
    } else if (confidenceRating == "1") {
        alert("Take our Confidence Course");
    } else if (confidenceRating == "3") {
        alert("Take our Confidence Course");
    } else if (confidenceRating == "10")
        alert("Get our Confidence Ebook");
    else {
        alert("Take our Confidence Course")
    }
    document.write("Your " + confidenceRating + " Adds value to who you are");
}

    function getConfidenceRating() {
        const confidenceRating = prompt("How would you rate your confidence level today?")
        return confidenceRating;
    }

    const confidenceRating = getConfidenceRating();


    // console.log (getConfidenceRating);
    // 
    // console.log (confidenceRating);

    // string concatenation means strings combined with variables.// 


    // document.write("Your "  + confidenceRating +   " Adds value to who you are");
    youCanHaveConfidence(confidenceRating);

    function specialmessage(confidenceRating) {
        if (confidenceRating == "") {
            confidenceRating = prompt("Come on, please tell me your confidence rating!");
        }


    }


    // let response = prompt('Do you have confidence? Answer yes to proceed') ;

    // while (response != "yes" ) {
    //     response = prompt ('please answer yes to proceed') ;

    // }

    // alert (' Thank you! Check out our Confidence Ebook');

        function rateMyPage(){
        let rating = prompt ("How many stars would you rate my page? 1-5");
// https://canvas.instructure.com/courses/6652008/grades
        for (let i = 0; 1 < rating; i++) {
            document.write ("https://unsplash.com/photos/selective-focus-photography-of-jolly-woman-using-peace-hand-gesture-oTweoxMKdkA") ;
        }

    }
    
    rateMyPage()


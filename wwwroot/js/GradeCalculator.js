var submit = document.getElementById("submitButton");

//function called when someone clicks caluclate
submit.addEventListener("click", function () {
    //initializing variables and retrieving input values
    var letterGrade;
    var finalGrade;
    var assignmentValue = document.getElementById("assignments").value;
    var groupProjectValue = document.getElementById("groupProject").value;
    var quizValue = document.getElementById("quizzes").value;
    var examValue = document.getElementById("exams").value;
    var intexValue = document.getElementById("intex").value;
    //calculating the numeric final grade
    finalGrade = (((assignmentValue/100) * .5) + ((groupProjectValue/100)* .1) + ((quizValue/100) * .1) + ((examValue/100) * .2) + ((intexValue/100) * .1)) * 100; 
    //finding the letter grade 
    if (finalGrade >= 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    };
    //displaying the numeric and letter grade 
    alert("Your grade is an: " + letterGrade + "\n" + finalGrade + "%");
});
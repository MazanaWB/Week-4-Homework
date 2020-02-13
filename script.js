$(document).ready(function() { 

//define variables for each question
 var questionOne = document.getElementById("quiz");
// var startButton = document.getElementById("start");
// var resultsContainer = document.getElementById("results");
// });

questonOne = 


// Start the quiz and timer by clicking the start button
$("#start").on("click", function() {
    var quest1 = []
    $("#quiz").html(quest1); 
//     array[
//     {
//         question: "Commonly used data types DO NOT include:";
//         answers:{ 1: "strings",
//         2: "booleans",
//         3: "alerts",
//         4: "numbers"
//     },
//         correctAnswer: "3",
// },
    
//     {
//         question: "The condition in an if/else statement is enclosed withiin _______.",
//         answers: 
//         { 1: "quotes",
//         2: "curly brackets",
//         3: "parentheses",
//         4: "square brackets"
//     },
//         correctAnswer: "3"
// }
//     ]});

// Quiz question. If correct - go to next question. Else -  subtract 10 seconds, go to next question.
var yourPick = $(this).val();

// When all questions answered or timer reaches 0 then quiz is over. Give score.


    




//var yourPick = $(this).val();

// reference for game over
// var num = Math.floor(Math.random() * 4) + 1;
//                 if (num === parseInt(yourPick)) {
//                   $("#result").html("You win!");
//                 }
    
//                 else {
//                   $("#result").html("You lose!");
//                 } 
  
//                 // console.log("You clicked a button!!");
//                  console.log(num)//
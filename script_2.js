$(document).ready(function() {
  //define variables for each question
  // var questionOne = document.getElementById("quiz");
  // var startButton = document.getElementById("start");
  // var resultsContainer = document.getElementById("results");
  // });

  $( "#title" ).replaceWith( "Commonly used data types DO NOT include:" );

//   function generateQuiz(
//     questions,
//     quizContainer,
//     resultsContainer,
//     submitButton
//   ) {
//     function showQuesitons(questions, quizContainer) {
//       // code goes here
//     }
//     function showResults(questions, quizContainer, resultsContainer) {
//       //code goes here
//     }

//     // show the questions
//     showQuestions(questions, quizContainer);
//     submitButton.onclick = function() {
//       showResults(questions, quizConatiner, resultsContainer);
//     };
//   }

//   var myQuestions = [
//     {
//       question: "Commonly used data types DO NOT include:",
//       answers: { 0: "strings", 1: "booleans", 2: "alerts", 3: "numbers" },
//       correctAnswer: "2"
//     },
//     {
//       question:
//         "The condition in an if/else statement is enclosed withiin _______.",
//       answers: {
//         0: "quotes",
//         1: "curly brackets",
//         2: "parentheses",
//         3: "square brackets"
//       },
//       correctAnswer: "2"
//     }
//   ];
// });

// function showQuestions(questions, quizContainer) {
//   // we'll need a place to store the output and the answer choices
//   var output = [];
//   var answers;

//   // for each question...
//   for (var i = 0; i < questions.length; i++) {
//     // first reset the list of answers
//     answers = [];

//     // for each available answer to this question...
//     for (number in questions[i].answers) {
//       // ...add an html radio button
//       answers.push(
//         "<label>" +
//           '<input type="click" name="question' +
//           i +
//           '" value="' +
//           letter +
//           '">' +
//           letter +
//           ": " +
//           questions[i].answers[letter] +
//           "</label>"
//       );
//     }

//     // add this question and its answers to the output
//     output.push(
//       '<div class="question">' +
//         questions[i].question +
//         "</div>" +
//         '<div class="answers">' +
//         answers.join("") +
//         "</div>"
//     );
//   }

//   // finally combine our output list into one string of html and put it on the page
//   quizContainer.innerHTML = output.join("");
// }

// Start the quiz and timer by clicking the start button
// $("#start").on("click", function() {
//     var quest1 = []
//     $("#quiz").html(quest1);
//     array[

// Quiz question. If correct - go to next question. Else -  subtract 10 seconds, go to next question.
// var yourPick = $(this).val();

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

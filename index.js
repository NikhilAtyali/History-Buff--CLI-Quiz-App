var readLineSync = require("readline-sync");
// var chalk = require('chalk');

var score = 0;
var highestScore = {
  name: "Abheejit",
  score: 10
}

//Welcome 
function welcome() {
  var userName = readLineSync.question("Whats is your name? ");

  console.log("Welcome " + userName + ", Let's play a History Quiz.");
  console.log("I hope you're exited, let's begin...");
  console.log("____________");

}

const questions = [
  {
    question: "Who was the leader of Azad Hind Fauz? ",
    answer: "Netaji Subhachandra Bose"
  },
  {
    question: "What was the capital of Chhatrapti Shivaji?",
    answer: "Raigad"
  },
  {
    question: "Who flew the first airplane?",
    answer: "Right Brothers"
  },
  {
    question: "Who discovered sea route to India?",
    answer: "Vasco de gama"
  },
  {
    question: "Who build the TajMahal?",
    answer: "Shahajahan"
  },
  {
    question: "India's first national park was named after whom?",
    answer: "Jim Corbet"
  },
  {
    question: "Famous Khajueaho temple is located in which state?",
    answer: "Madhya Pradesh"
  },
  {
    question: "One Horned Rhinos are found in ____ national park?",
    answer: "Kaziranga"
  },
  {
    question: "The famous D-Day landing during WW-II happned on which place?",
    answer: "Normandy,France"
  },
  {
    question: "India's highest gallentry award is...?",
    answer: "ParamVir Chakra"
  },
]

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right! ");
    score = score + 1;
    console.log(score)
  } else {
    console.log("You are worng! ");
  }
  console.log("_________");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScore() {
  console.log("Your score is " + score);
  console.log("_________");
  console.log("Highest score is " + highestScore.name + ": " + highestScore.score)
  console.log("____________")
}


welcome()
game()
showScore()
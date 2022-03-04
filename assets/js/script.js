var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initials-form")
var containerHighScoresEl = document.getElementById("high-score-container")
var ViewHighScoreEl = document.getElementById("view-high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")

var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back")
var btnClearScoresEl = document.querySelector("#clear-high-scores")

var arrayShuffleQuestions
var QuestionIndex = 0

var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeLeft;
var gameOver;
timerEl.innerText = 0;
var highScores = [];
var userScores = JSON.parse(localStorage.getItem("scores")) || []

var userScore = {user:"dave",score:9}

userScores.push(userScore)

localStorage.setItem("scores",JSON.stringify(userScores))


var questions = [
    
  { q: 'What is the correct way to write a JavaScript array?', 
      a: '4. var colors = ["red", "green", "blue"] ', 
      choices: ['1. var colors = (1:"red", 2:"green", 3:"blue")', '2. var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', '3. var colors = "red", "green", "blue"  ', '4. var colors = ["red", "green", "blue"]']
    },
  { q: 'Inside which HTML element do we put the JavaScript?', 
    a: '3. <script>', 
    choices: [{choice: '1. <Script>'}, {choice: '2. <js>'}, {choice: '3. <script>'}, {choice: '4. <head>'}]
  },
  { q: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    a: '4. <script src="xxx.js"> ', 
    choices: [{choice: '1. <script href="xxx.js">'}, {choice: '2. <script name="xxx.js">'}, {choice: '3. All of the Aobve'},{choice: '4. <script src="xxx.js'}]
  }, 

  ];

 
  
  
  
  // var position = 0
    //document.getElementById("questions").innerText = questions[position].q
  // button function
  // nextbutton.onclick = position++
  // //document.getElementById("questions").innerText = questions[position].q

// get the start button to show the first question 

//get time to start when start button it clicked 

// when the wrong anser is subtract two seconds 

// funtion to stop game once timers/question run out 

// 
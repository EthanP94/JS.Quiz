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

var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeLeft;
var gameOver
timerEl.innerText = 0;

var highScores = [];
 
var arrayShuffledQuestions
var QuestionIndex = 0


var questions = [
    
  { q: 'What is the correct way to write a JavaScript array?', 
      a: '4. var colors = ["red", "green", "blue"] ', 
        c: ['1. var colors = (1:"red", 2:"green", 3:"blue")', '2. var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', '3. var colors = "red", "green", "blue"  ', '4. var colors = ["red", "green", "blue"]']
    },
  { q: 'Inside which HTML element do we put the JavaScript?', 
      a: '3. <script>', 
        c: ['1. <Script>','2. <js>','3. <script>', '4. <head>']
  },
  { q: 'What is the correct syntax for referring to an external script called "xxx.js"?',
      a: '3. <script src="xxx.js"> ', 
        c: ['1. <script href="xxx.js">','2. <script name="xxx.js">','3. <script src="xxx.js','4. All of the Above']
  }, 
  { q: 'Where is the correct place to insert a JavaScript?',
      a: '3. All of the above',
        c: ['1. The <body> section','2. The <head> section', '3. All of the above']
  },  
  { q: 'How do you write "Hello World" in an alert box?',
      a: '2. alert("Hello World")',
        c: ['1. msgBox("Hello World")','2. alert("Hello World")','3. msg("Hello World")', '4. alertBox("Hello World")']
  },
  { q: 'How do you create a function in JavaScript?',
      a: '1. function myFuntion()',
        c: ['1. fuction myFunction()','2.function:myFunction()','3.function = myFunction()']
  },
  { q: 'How do you call a funtion named "myFunction"?',
      a: '2. myFunction()',
        c: ['1. call funtion myFunction()','2. myFunction()','3. call myFunction()']
  },
  { q: 'How to write an IF statement in JavaScript?',
      a: '3. if (i == 5)',
        c: ['1. if i = 5 then)','2.if i == 5 then','3. if (i == 5)','4. if i = 5']
  },
  { q:'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      a: '4. if (i != 5)',
      c: ['1. if i <> 5','2.if (i <> 5)','3. if i =! 5 then','4. if (i != 5)']
  },
  { q:'How does a WHILE loop start?',
      a: '1. while (i <= 10)',
      c: ['1. while (i <= 10)','2. while i = 1 to 10','3. while (i <= 10; i++)',]
  },
  { q:'How does a FOR loop start?',
      a: '2. for (i = 0; i <= 5; i++)',
      c: ['1. for i = 1 to 5','2.for (i = 0; i <= 5; i++)','3. for (i <= 5; i++)','4.for (i = 0; i <= 5)']
  },
  { q:'How can you add a comment in a JavaScript?',
      a: '1. //This is a comment  ',
      c: ['1. //This is a comment','2. This is a comment','3. <!--This is a comment-->']
    },
];

  var renderStartPage = function () {
    containerHighScoresEl.classList.add("hide")
    containerHighScoresEl.classList.remove("show")
    containerStartEl.classList.remove("hide")
    containerStartEl.classList.add("show")
    containerScoreEl.removeChild(containerScoreEl.lastChild)
    QuestionIndex = 0
    gameOver = ""
    timerEl.textContent = 0 
    score = 0

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide")
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
}


var setTime = function () {
    timeLeft = 60;

var timercheck = setInterval(function() {
    timerEl.innerText = timeLeft;
    timeLeft--

    if (gameOver) {
        clearInterval(timercheck)
    }
   
    if (timeLeft < 0) {
        showScore()
        timerEl.innerText = 0
        clearInterval(timercheck)
    }

    }, 1000)
}

var startGame = function() {
    
    containerStartEl.classList.add('hide');
    containerStartEl.classList.remove('show');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
   
    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
  }


var setQuestion = function() {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
}


var resetAnswers = function() {
    while (answerbuttonsEl.firstChild) {
        answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
    };
};


var displayQuestion = function(index) {
    questionEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('answerbtn')
        answerbutton.addEventListener("click", answerCheck)
        answerbuttonsEl.appendChild(answerbutton)
        }
    };

var answerCorrect = function() {
    if (correctEl.className = "hide") {
        correctEl.classList.remove("hide")
        correctEl.classList.add("banner")
        wrongEl.classList.remove("banner")
        wrongEl.classList.add("hide")
        }
    }  

var answerWrong = function() {
    if (wrongEl.className = "hide") {
        wrongEl.classList.remove("hide")
        wrongEl.classList.add("banner")
        correctEl.classList.remove("banner")
        correctEl.classList.add("hide")
    }
}

   
var answerCheck = function(event) {
    var selectedanswer = event.target
        if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText){
            answerCorrect()
            score = score + 5
        }

        else {
          answerWrong()
          score = score - 2;
          timeLeft = timeLeft - 2;
      };

  
      QuestionIndex++
        if  (arrayShuffledQuestions.length > QuestionIndex + 1) {
            setQuestion()
        }   
        else {
           gameOver = "true";
           showScore();
            }
}

  
var showScore = function () {
    containerQuestionEl.classList.add("hide");
    containerEndEl.classList.remove("hide");
    containerEndEl.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
}       


var createHighScore = function(event) { 
    event.preventDefault() 
    var initials = document.querySelector("#initials").value;
    if (!initials) {
      alert("Enter your intials!");
      return;
    }

  formInitials.reset();

  var HighScore = {
  initials: initials,
  score: score
  } 

  
  highScores.push(HighScore);
  highScores.sort((a, b) => {return b.score-a.score});


while (listHighScoreEl.firstChild) {
   listHighScoreEl.removeChild(listHighScoreEl.firstChild)
}

for (var i = 0; i < highScores.length; i++) {
  var highscoreEl = document.createElement("li");
  highscoreEl.ClassName = "high-score";
  highscoreEl.innerHTML = highScores[i].initials + " - " + highScores[i].score;
  listHighScoreEl.appendChild(highscoreEl);
}

  saveHighScore();
  displayHighScores();

}

var saveHighScore = function () {
    localStorage.setItem("HighScores", JSON.stringify(highScores))
        
}


var loadHighScore = function () {
    var LoadedHighScores = localStorage.getItem("HighScores")
        if (!LoadedHighScores) {
        return false;
    }

    LoadedHighScores = JSON.parse(LoadedHighScores);
    LoadedHighScores.sort((a, b) => {return b.score-a.score})


    for (var i = 0; i < LoadedHighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);

        highScores.push(LoadedHighScores[i]);
        
    }
}  


var displayHighScores = function() {

    containerHighScoresEl.classList.remove("hide");
    containerHighScoresEl.classList.add("show");
    gameOver = "true"

    if (containerEndEl.className = "show") {
        containerEndEl.classList.remove("show");
        containerEndEl.classList.add("hide");
        }
    if (containerStartEl.className = "show") {
        containerStartEl.classList.remove("show");
        containerStartEl.classList.add("hide");
        }
        
    if (containerQuestionEl.className = "show") {
        containerQuestionEl.classList.remove("show");
        containerQuestionEl.classList.add("hide");
        }

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }

    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
        }
    
}

var clearScores = function () {
    highScores = [];

    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild);
    }

    localStorage.clear(highScores);

} 

loadHighScore()
    

  btnStartEl.addEventListener("click", startGame)

  formInitials.addEventListener("submit", createHighScore)
  
  ViewHighScoreEl.addEventListener("click", displayHighScores)
  
  btnGoBackEl.addEventListener("click", renderStartPage)
  
  btnClearScoresEl.addEventListener("click", clearScores)

const startButton = document.getElementById('start')
var endTime;
const timeSpan = document.getElementById('time-remaining');
var timeInterval;
var highScores = [];
const quizName= document.getElementById('quizName');
const quizRules= document.getElementById('quizRules');


var questions = [
    {
        question: "What's the most important feature of a website??",
        options: [
            "Security",
            "Functionality",
            "How fun it is",
            "Aestetics"
        ],
        
    },
    {
        question: "What is your favorite school subject?",
        options: [
            "Art",
            "Math",
            "Computers",
            "Physics"
        ],
      
    },
    {
        question: "Your friends always come to you for advice on ...",
        options: [
            "Getting their gadgets working",
            "Making things look good",
            "What video games are the best",
            "Self defense ideas"
        ],
   
    },
    {
        question: "I prefer to...",
        options: [
            "Create things",
            "Work out puzzles",
            "Live in a world of my own creation",
            "Research hacking techniques"
        ],
       
    }
]
var questionIndex = -1;

startButton.addEventListener('click', () => {
    // Hide the start button
    startButton.style.display = "none";
    // set current question to 0
    showNextQuestion();
    // Show the first question

    //hide questions until clicked
    option1El.style.display ="";
    option2El.style.display ="";
    option3El.style.display ="";
    option4El.style.display ="";





    // hide starting info
    quizName.style.display = "none";
quizRules.style.display = "none";

});


const questionEl = document.getElementById('question');
const option1El = document.getElementById('option1');
const option2El = document.getElementById('option2');
const option3El = document.getElementById('option3');
const option4El = document.getElementById('option4');

option1El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});
option2El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});
option3El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});
option4El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});
option5El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});
option6El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});
option7El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});
option8El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});
option9El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});
option10El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
});


function showNextQuestion() {
    // Show the next question
    questionIndex++;
    if (questionIndex >= questions.length) {
        showFinishScreen();
        return;
    }

    let currentQuestion = questions[questionIndex];
    console.log({ currentQuestion });
    questionEl.textContent = currentQuestion.question;
    option1El.textContent = currentQuestion.options[0];
    option2El.textContent = currentQuestion.options[1];
    option3El.textContent = currentQuestion.options[2];
    option4El.textContent = currentQuestion.options[3];
    option5El.textContent = currentQuestion.options[4];
    option6El.textContent = currentQuestion.options[5];
    option7El.textContent = currentQuestion.options[6];
    option8El.textContent = currentQuestion.options[7];
    option9El.textContent = currentQuestion.options[8];
    option10El.textContent = currentQuestion.options[];



}


function submitAnswer(answer) {
    console.log({ answer });
    // let currentQuestion = questions[questionIndex];
    // if (answer !== currentQuestion.answer) {
    //     console.log("Incorrect!");
    //     endTime= new Date (endTime.getTime() - 10000)
        
    // }

    showNextQuestion();

}


const highScoreEnd = document.getElementById('high-score');
const finishScreen = document.getElementById('finish-screen');
const submitBtn = document.getElementById('submit');
const initialInput = document.getElementById('initials');



function hideQuestions() {
    questionEl.style.display = "none";
    option1El.style.display = "none";
    option2El.style.display = "none";
    option3El.style.display = "none";
    option4El.style.display = "none";
    clearInterval(timeInterval);


}
function showFinishScreen() {
    hideQuestions();
    finishScreen.style.display = "";
}

submitBtn.addEventListener("click", function () {
    highScores.push({
        initials: initialInput.value,
        score: timeSpan.textContent || "0"

    }
    );
    showHighScore();
    saveHighScores();
    console.log("working", highScores);
});

const highScoreBtn= document.getElementById('high-score-btn');
highScoreBtn.addEventListener("click", showHighScore);

function showHighScore() {
    hideQuestions();
    finishScreen.style.display = "none";
    highScoreEnd.style.display = "";
    startButton.style.display= "none";
    highScoreEnd.innerHTML = "";
    highScores.forEach((item) => {
var container = document.createElement("div");
container.textContent= item.initials + ":" + item.score;
highScoreEnd.appendChild(container);
quizName.style.display = "none";
quizRules.style.display = "none";
// hide starting info
    })
}

function loadHighScores (){
    var scores = localStorage.getItem("High Scores");
    if (scores != null){
        highScores=JSON.parse(scores)
    } 
    console.log("high scores", highScores);
}

function saveHighScores (){
    localStorage.setItem("High Scores", JSON.stringify(highScores));

}

loadHighScores();
const startButton = document.getElementById('start')
var endTime;
const timeSpan = document.getElementById('time-remaining');
var timeInterval;
const quizName = document.getElementById('quizName');
const quizRules = document.getElementById('quizRules');
const start=document.getElementById('start-button')
// Tally section
var tally = [0, 0, 0, 0];
var roles = ['Cybersecurity', 'Back%20End%20Developer', 'Game%20Developer', 'Front%20End%20Developer'];
var chosenRole;

var questions = [
    {
        question: "What's the most important feature of a website??",
        options: [
            "Security",
            "Functionality",
            "How fun it is",
            "Aesthetics"
        ],

    },
    {
        question: "What is your favorite school subject?",
        options: [
            "Computers",
            "Math",
            "Physics",
            "Art"
        ],

    },
    {
        question: "Your friends always come to you for advice on ...",
        options: [
            "Self defense ideas",
            "Getting their gadgets working",
            "What video games are the best",
            "Making things look good"
        ],

    },
    {
        question: "I prefer to...",
        options: [
            "Research hacking techniques",
            "Work out puzzles",
            "Live in a world of my own creation",
            "Create things"
        ],

    },
    {
        question: "My friends would describe me as...",
        options: [
            "Protective",
            "Analytical",
            "Imaginative",
            "Creative"
        ],

    },
    {
        question: "When people come over for a party you will find me...",
        options: [
            "Keeping an eye out for party crashers",
            "In the kitchen making sure that eveything is being done correctly",
            "Telling stories to everyone I talk to",
            "At the door, greeting all the guests"
        ],

    },
    {
        question: "What is most important?",
        options: [
            "User safety",
            "Functionality over decoration",
            "The experience",
            "The way things look"
        ],

    },
    {
        question: "I am really good with...",
        options: [
            "Python",
            "Ruby",
            "C++",
            "CSS"
        ],

    },
    {
        question: "The most important part of my job is..",
        options: [
            "How much they pay me. A LOT!",
            "Making sure everything is functioning",
            "Creating a believable experience",
            "Choosing what color palette I will use"
        ],

    },
    {
        question: "If I had to pick a show I would pick...",
        options: [
            "Criminal Minds",
            "A Beautiful Mind",
            "Game of Thrones",
            "La La Land"
        ],

    },
]
var questionIndex = -1;

startButton.addEventListener('click', () => {
    // Hide the start button
    startButton.style.display = "none";
    start.style.display="none"
    // set current question to 0
    showNextQuestion();
    // Show the first question

    //hide questions until clicked
    option1El.style.display = "";
    option2El.style.display = "";
    option3El.style.display = "";
    option4El.style.display = "";


    // hide starting info
    // quizName.style.display = "none";
    // quizRules.style.display = "none";

});


const questionEl = document.getElementById('question');
const option1El = document.getElementById('option1');
const option2El = document.getElementById('option2');
const option3El = document.getElementById('option3');
const option4El = document.getElementById('option4');



option1El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
    tally[0]++;
});
option2El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
    tally[1]++;
});
option3El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
    tally[2]++;
});
option4El.addEventListener('click', (e) => {
    submitAnswer(e.target.textContent);
    tally[3]++;
});



function showNextQuestion() {
    // Show the next question
    questionIndex++;
    if (questionIndex >= questions.length) {
        var chosenRoleIndex = 0;
        var max = 0;
        for (var i = 0; i < tally.length; i++) {
            if (tally[i] > max) {
                max = tally[i];
                chosenRoleIndex = i;
            }
        }
        chosenRole = roles[chosenRoleIndex];
        localStorage.setItem('Chosen Role', chosenRole);
        document.location.replace('./results.html');
        return;
    }

    let currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.question;
    option1El.textContent = currentQuestion.options[0];
    option2El.textContent = currentQuestion.options[1];
    option3El.textContent = currentQuestion.options[2];
    option4El.textContent = currentQuestion.options[3];
}


function submitAnswer(answer) {
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

}

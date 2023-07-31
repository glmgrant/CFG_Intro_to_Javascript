const questions = [
    {
        question: "Where did the first modern Summer Olympic games take place in 1896?",
        answers: [
            {text: "Rome", correct: false},
            {text: "Athens", correct: true},
            {text: "Helsinki", correct: false},
            {text: "Melbourne", correct: false},
        ]
        },
        {
        question: "What number shirt is worn by a fullback in Rugby Union?",
        answers: [
            {text: "1", correct: false},
            {text: "15", correct: true},
            {text: "11", correct: false},
            {text: "7", correct: false},
        ]
        },
        {
        question: "Which French city is known for its 24-hour Motor race?",
        answers: [
            {text: "Lyon", correct: false},
            {text: "Toulouse", correct: false},
            {text: "Strasbourg", correct: false},
            {text: "Le Mans", correct: true},
        ]
        },
        {
        question: "Which sport do the New York Giants play?",
        answers: [
            {text: "Baseball", correct: false},
            {text: "Ice Hockey", correct: false},
            {text: "American Football", correct: true},
            {text: "Basketball", correct: false},
        ]
        },
        {
        question: "In karate, what colour belt comes right before black?",
        answers: [
            {text: "White", correct: false},
            {text: "Brown", correct: true},
            {text: "Green", correct: false},
            {text: "Orange", correct: false},
        ]
        },
        {
        question: "The Boat Race is an annual event between which two Universities?",
        answers: [
            {text: "Oxford and Cambridge", correct: true},
            {text: "Durham and Newcastle", correct: false},
            {text: "Harvard and MIT", correct: false},
            {text: "Bristol and Exeter", correct: false},
        ]
        },
        {
        question: "Which sport takes place in a Velodrome?",
        answers: [
            {text: "Swimming", correct: false},
            {text: "Boxing", correct: false},
            {text: "Fencing", correct: false},
            {text: "Cycling", correct: true},
        ]
        },
        {
        question: "In darts, what is the highest score from a single dart?",
        answers: [
            {text: "50", correct: false},
            {text: "100", correct: false},
            {text: "60", correct: true},
            {text: "90", correct: false},
        ]
        },
        {
        question: "What year did Leicester City win the premier league?",
        answers: [
            {text: "2014", correct: false},
            {text: "2015", correct: false},
            {text: "2016", correct: true},
            {text: "2017", correct: false},
        ]
        },
        {
        question: "What is the term for a score of 1 over par on a Golf hole?",
        answers: [
            {text: "Bogey", correct: true},
            {text: "Puffin", correct: false},
            {text: "Eagle", correct: false},
            {text: "Albatross", correct: false},
        ]
        }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
});
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
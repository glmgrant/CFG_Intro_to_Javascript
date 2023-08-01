
const questions = [
    {
        question: "Which nation won the 2019 Rugby World Cup?",
        answers: [
            { text: "New Zeland", correct: false},
            { text: "South Africa", correct: true},
            { text: "Australia", correct: false},
            { text: "England", correct: false},
        ]
    },
    {
        question: "Which French city is known for its 24 hour motor race?",
        answers: [
            { text: "Dijon", correct: false},
            { text: "Amiens", correct: false},
            { text: "Grenoble", correct: false},
            { text: "Le Mans", correct: true},
        ]  
    },
    {
        question: "How many Olympic gold medals did Michael Phelps win?",
        answers: [
            { text: "23", correct: true},
            { text: "19", correct: false},
            { text: "15", correct: false},
            { text: "20", correct: false},
        ]
    },
    {
        question: "The boxer Prince Nazeem was born and raised in which English city?",
        answers: [
            { text: "Blackpool", correct: false},
            { text: "Manchester", correct: false},
            { text: "London", correct: false},
            { text: "Sheffield", correct: true},
        ]
    },
    {
        question: "Which team won the FA Cup in 2013?",
        answers: [
            { text: "Leicester City F.C.", correct: false},
            { text: "Liverpool F.C.", correct: false},
            { text: "Manchester City F.C.", correct: false},
            { text: "Wigan Athletic", correct: true},
        ]
    },
    {
        question: "How many horses start the Grand National at Aintree?",
        answers: [
            { text: "40", correct: true},
            { text: "45", correct: false},
            { text: "32", correct: false},
            { text: "38", correct: false},
        ]
    },
    {
        question: "Who was the first Olympic gymnast to score a perfect 10?",
        answers: [
            { text: "Nellie Kim", correct: false},
            { text: "Nadia Comăneci", correct: true},
            { text: "Alexander Dityatin", correct: false},
            { text: "Michael Nikolay", correct: false},
        ]
    },
    {
        question: "In football, how many yards is a penalty kick taken from goal?",
        answers: [
            { text: "11 yards", correct: false},
            { text: "8 yards", correct: false},
            { text: "10 yards", correct: false},
            { text: "12 yards", correct: true},
        ]
    },
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

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState() {
nextButton.style.display = "none";
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}
    } 

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        } else {
            showScore();
        }
    }

    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        } else {
            startQuiz();
        }
    });


startQuiz();

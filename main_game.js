const questions = [
  {
    question:
      "Where did the first modern Summer Olympic games take place in 1896?",
    answers: [
      { text: "Rome", correct: false },
      { text: "Athens", correct: true },
      { text: "Helsinki", correct: false },
      { text: "Melbourne", correct: false },
    ],
    src: "question_pics/olympic_rings.png",
    alt: "Olympic rings",
  },
  {
    question: "What number shirt is worn by a fullback in Rugby Union?",
    answers: [
      { text: "1", correct: false },
      { text: "15", correct: true },
      { text: "11", correct: false },
      { text: "7", correct: false },
    ],
    src: "question_pics/rugby.png",
    alt: "Women playing rugby",
  },
  {
    question: "Which French city is known for its 24-hour Motor race?",
    answers: [
      { text: "Lyon", correct: false },
      { text: "Toulouse", correct: false },
      { text: "Strasbourg", correct: false },
      { text: "Le Mans", correct: true },
    ],
    src: "question_pics/race.png",
    alt: "Cars racing on a track",
  },
  {
    question: "Which sport do the New York Giants play?",
    answers: [
      { text: "Baseball", correct: false },
      { text: "Ice Hockey", correct: false },
      { text: "American Football", correct: true },
      { text: "Basketball", correct: false },
    ],
    src: "question_pics/new_york.png",
    alt: "New York skyline with sunset",
  },
  {
    question: "In karate, what colour belt comes right before black?",
    answers: [
      { text: "White", correct: false },
      { text: "Brown", correct: true },
      { text: "Green", correct: false },
      { text: "Orange", correct: false },
    ],
    src: "question_pics/karate.png",
    alt: "Person with a black belt in karate",
  },
  {
    question:
      "The Boat Race is an annual event between which two Universities?",
    answers: [
      { text: "Oxford and Cambridge", correct: true },
      { text: "Durham and Newcastle", correct: false },
      { text: "Harvard and MIT", correct: false },
      { text: "Bristol and Exeter", correct: false },
    ],
    src: "question_pics/boat_race.png",
    alt: "Womens boat race with sunset",
  },
  {
    question: "Which sport takes place in a Velodrome?",
    answers: [
      { text: "Swimming", correct: false },
      { text: "Boxing", correct: false },
      { text: "Fencing", correct: false },
      { text: "Cycling", correct: true },
    ],
    src: "question_pics/velodrome.png",
    alt: "London 2012 Velodrome",
  },
  {
    question: "In darts, what is the highest score from a single dart?",
    answers: [
      { text: "50", correct: false },
      { text: "100", correct: false },
      { text: "60", correct: true },
      { text: "90", correct: false },
    ],
    src: "question_pics/darts.png",
    alt: "Three darts on bullseye",
  },
  {
    question: "What year did Leicester City win the premier league?",
    answers: [
      { text: "2014", correct: false },
      { text: "2015", correct: false },
      { text: "2016", correct: true },
      { text: "2017", correct: false },
    ],
    src: "question_pics/leicester_city.png",
    alt: "Two Leicester City players celebrating their win",
  },
  {
    question: "What is the term for a score of 1 over par on a Golf hole?",
    answers: [
      { text: "Bogey", correct: true },
      { text: "Puffin", correct: false },
      { text: "Eagle", correct: false },
      { text: "Albatross", correct: false },
    ],
    src: "question_pics/golf.png",
    alt: "A golf course",
  },
  {
    question: "Which nation won the 2019 Rugby World Cup?",
    answers: [
      { text: "New Zeland", correct: false },
      { text: "South Africa", correct: true },
      { text: "Australia", correct: false },
      { text: "England", correct: false },
    ],
    src: "question_pics/world_cup.png",
    alt: "A rugby ball next to the world cup",
  },
  {
    question: "How many Olympic gold medals did Michael Phelps win?",
    answers: [
      { text: "23", correct: true },
      { text: "19", correct: false },
      { text: "15", correct: false },
      { text: "20", correct: false },
    ],
    src: "question_pics/michael.png",
    alt: "Michael Phelps in the water with his hand up",
  },
  {
    question:
      "The boxer Prince Naseem was born and raised in which English city?",
    answers: [
      { text: "Blackpool", correct: false },
      { text: "Manchester", correct: false },
      { text: "London", correct: false },
      { text: "Sheffield", correct: true },
    ],
    src: "question_pics/boxer.png",
    alt: "Prince Naseem in a boxing ring",
  },
  {
    question: "Which team won the FA Cup in 2013?",
    answers: [
      { text: "Leicester City F.C.", correct: false },
      { text: "Liverpool F.C.", correct: false },
      { text: "Manchester City F.C.", correct: false },
      { text: "Wigan Athletic", correct: true },
    ],
    src: "question_pics/fa.png",
    alt: "A close up of the FA Cup",
  },
  {
    question: "How many horses start the Grand National at Aintree?",
    answers: [
      { text: "40", correct: true },
      { text: "45", correct: false },
      { text: "32", correct: false },
      { text: "38", correct: false },
    ],
    src: "question_pics/horse.png",
    alt: "A horse racing at the Grand National",
  },
  {
    question: "Who was the first Olympic gymnast to score a perfect 10?",
    answers: [
      { text: "Nellie Kim", correct: false },
      { text: "Nadia Comăneci", correct: true },
      { text: "Alexander Dityatin", correct: false },
      { text: "Michael Nikolay", correct: false },
    ],
    src: "question_pics/simone.png",
    alt: "Simone Biles mid flip on a beam",
  },
  {
    question: "In football, how many yards is a penalty kick taken from goal?",
    answers: [
      { text: "11 yards", correct: false },
      { text: "8 yards", correct: false },
      { text: "10 yards", correct: false },
      { text: "12 yards", correct: true },
    ],
    src: "question_pics/penalty.png",
    alt: "A women kicking a football",
  }
];

const questionElement = document.getElementById("question");
const picElement = document.getElementById("question_pics");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  picElement.src = currentQuestion.src;
  picElement.alt = currentQuestion.alt;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  localStorage.setItem("mostRecentScore", score)
  return window.location.assign("http://127.0.0.1:5500/end.html"); 
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

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

var confettiImageSources = [
  "confetti_pics/basketball.png",
  "confetti_pics/football.png",
  "confetti_pics/boxing.png",
  "confetti_pics/cricket.png",
  "confetti_pics/rounders.png",
  "confetti_pics/rugby.png",
  "confetti_pics/shuttlecock.png",
  "confetti_pics/tennis.png",
];

var Confetti = (function () {
  var t = (function () {
      return function () {
        (this.gravity = 10), (this.particle_count = 75);
      };
    })(),
    e = (function () {
      function e(n) {
        var r = this;
        if (
          ((this.bursts = []),
          (this.setCount = function (t) {
            if ("number" != typeof t)
              throw new Error("Input must be of type 'number'");
            e.CONFIG.particle_count = t;
          }),
          (this.setupCanvasContext = function () {
            if (!e.CTX) {
              var t = document.createElement("canvas");
              (e.CTX = t.getContext("2d")),
                (t.width = 2 * window.innerWidth),
                (t.height = 2 * window.innerHeight),
                (t.style.position = "fixed"),
                (t.style.top = "0"),
                (t.style.left = "0"),
                (t.style.width = "calc(100%)"),
                (t.style.height = "calc(100%)"),
                (t.style.margin = "0"),
                (t.style.padding = "0"),
                (t.style.zIndex = "999999999"),
                (t.style.pointerEvents = "none"),
                document.body.appendChild(t),
                window.addEventListener("resize", function () {
                  (t.width = 2 * window.innerWidth),
                    (t.height = 2 * window.innerHeight);
                });
            }
          }),
          (this.setupElement = function (t) {
            var n;
            (r.element = document.getElementById(t)),
              null === (n = r.element) ||
                void 0 === n ||
                n.addEventListener("click", function (t) {
                  var n = new o(2 * t.clientX, 2 * t.clientY);
                  r.bursts.push(new i(n));
                });
            n.addEventListener("load", function (t) {
              var centerX = window.innerWidth;
              var centerY = window.innerHeight;
              var centerPosition = new o(centerX, centerY);
              var n = new o(2 * t.clientX, 2 * t.clientY);
              r.bursts.push(new i(centerPosition));
            });
          }),
          (this.update = function (t) {
            (r.delta_time = (t - r.time) / 1e3), (r.time = t);
            for (var e = r.bursts.length - 1; e >= 0; e--)
              r.bursts[e].update(r.delta_time),
                0 == r.bursts[e].particles.length && r.bursts.splice(e, 1);
            r.draw(), window.requestAnimationFrame(r.update);
          }),
          !n)
        )
          throw new Error("Missing id");
        e.CONFIG || (e.CONFIG = new t()),
          (this.time = new Date().getTime()),
          (this.delta_time = 0),
          this.setupCanvasContext(),
          this.setupElement(n),
          window.requestAnimationFrame(this.update);
      }
      return (
        (e.prototype.draw = function () {
          s.clearScreen();
          for (var t = 0, e = this.bursts; t < e.length; t++) {
            e[t].draw();
          }
        }),
        e
      );
    })(),
    i = (function () {
      function t(t) {
        this.particles = [];
        for (var i = 0; i < e.CONFIG.particle_count; i++)
          if (Math.random() < 0.5) {
            // 80% chance of colorful rectangle particle
            this.particles.push(new n(t));
          } else {
            // 20% chance of image particle
            this.particles.push(new ImageParticle(t));
          }
      }
      return (
        (t.prototype.update = function (t) {
          for (var e = this.particles.length - 1; e >= 0; e--)
            this.particles[e].update(t),
              this.particles[e].checkBounds() && this.particles.splice(e, 1);
        }),
        (t.prototype.draw = function () {
          for (var t = this.particles.length - 1; t >= 0; t--)
            this.particles[t].draw();
        }),
        t
      );
    })(),
    n = (function () {
      function t(t) {
        (this.size = new o(16 * Math.random() + 4, 4 * Math.random() + 4)),
          (this.position = new o(t.x - this.size.x / 2, t.y - this.size.y / 2)),
          (this.velocity = r.generateVelocity()),
          (this.rotation = 360 * Math.random()),
          (this.rotation_speed = 10 * (Math.random() - 0.5)),
          (this.hue = 360 * Math.random()),
          (this.opacity = 100),
          (this.lifetime = Math.random() + 0.25);
      }
      return (
        (t.prototype.update = function (t) {
          (this.velocity.y += e.CONFIG.gravity * (this.size.y / 10) * t),
            (this.velocity.x += 25 * (Math.random() - 0.5) * t),
            (this.velocity.y *= 0.98),
            (this.velocity.x *= 0.98),
            (this.position.x += this.velocity.x),
            (this.position.y += this.velocity.y),
            (this.rotation += this.rotation_speed);
        }),
        (t.prototype.checkBounds = function () {
          return this.position.y - 2 * this.size.x > 2 * window.innerHeight;
        }),
        (t.prototype.draw = function () {
          s.drawRectangle(
            this.position,
            this.size,
            this.rotation,
            this.hue,
            this.opacity
          );
        }),
        t
      );
    })(),
    o = (function () {
      return function (t, e) {
        (this.x = t || 0), (this.y = e || 0);
      };
    })(),
    ImageParticle = (function () {
      ImageParticle.prototype.updateSize = function () {
        var aspectRatio = this.image.width / this.image.height;
        this.size.x = (16 * Math.random() + 4) * this.scale;
        this.size.y = this.size.x / aspectRatio;
      };

      function ImageParticle(position) {
        this.size = new o(16 * Math.random() + 4, 4 * Math.random() + 4);
        this.position = new o(
          position.x - this.size.x / 2,
          position.y - this.size.y / 2
        );
        this.scale = 2.5;

        this.velocity = r.generateVelocity();
        this.rotation = 360 * Math.random();
        this.rotation_speed = 10 * (Math.random() - 0.5);
        this.image = new Image();
        var self = this;
        var aspectRatio = self.image.width / self.image.height;
        self.size.x = (16 * Math.random() + 4) * self.scale;
        self.size.y = self.size.x / aspectRatio;

        self.updateSize();
        
        this.image.onerror = function () {
          console.error("Error loading confetti image:", self.image.src);
        };
        this.image.src =
          confettiImageSources[
            Math.floor(Math.random() * confettiImageSources.length)
          ];
        this.opacity = 100;
        this.lifetime = Math.random() + 0.25;

        this.updateSize();
      }

      ImageParticle.prototype.update = function (t) {
        this.velocity.y +=
          e.CONFIG.gravity * (this.size.y / (10 * this.scale)) * t;
        this.velocity.x += 25 * (Math.random() - 0.5) * t;
        this.velocity.y *= 0.98;
        this.velocity.x *= 0.98;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.rotation += this.rotation_speed;
      };

      ImageParticle.prototype.checkBounds = function () {
        return this.position.y - 2 * this.size.x > 2 * window.innerHeight;
      };

      ImageParticle.prototype.draw = function () {
        e.CTX.save();
        e.CTX.translate(
          this.position.x + this.size.x / 2,
          this.position.y + this.size.y / 2
        );
        e.CTX.rotate((this.rotation * Math.PI) / 180);
        e.CTX.globalAlpha = this.opacity / 100;
        e.CTX.drawImage(
          this.image,
          -this.size.x / 2,
          -this.size.y / 2,
          this.size.x,
          this.size.y
        );
        e.CTX.restore();
      };

      return ImageParticle;
    })(),
    r = (function () {
      function t() {}
      return (
        (t.generateVelocity = function () {
          var t = Math.random() - 0.5,
            i = Math.random() - 0.7,
            n = Math.sqrt(t * t + i * i);
          return (
            (i /= n),
            new o((t /= n) * (Math.random() * 25), i * (Math.random() * 25))
          );
        }),
        t
      );
    })(),
    s = (function () {
      function t() {}
      return (
        (t.clearScreen = function () {
          e.CTX &&
            e.CTX.clearRect(
              0,
              0,
              2 * window.innerWidth,
              2 * window.innerHeight
            );
        }),
        (t.drawRectangle = function (t, i, n, o, r) {
          e.CTX &&
            (e.CTX.save(),
            e.CTX.beginPath(),
            e.CTX.translate(t.x + i.x / 2, t.y + i.y / 2),
            e.CTX.rotate((n * Math.PI) / 180),
            e.CTX.rect(-i.x / 2, -i.y / 2, i.x, i.y),
            (e.CTX.fillStyle = "hsla(" + o + "deg, 90%, 65%, " + r + "%)"),
            e.CTX.fill(),
            e.CTX.restore());
        }),
        t
      );
    })();
  return e;
})();

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
  confetti.setCount(0);
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
  resetState();
  picElement.src = "question_pics/trophy.png";
  picElement.alt = "Trophy";
  picElement.style.height = "200px";
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  confetti.setCount(250);
  //  questionElement.innerHTML = localStorage.setItem("mostRecentScore", score) The link doest work with the confetty. 
  // return window.location.assign("http://127.0.0.1:5500/tryprojectquiz2/end.html"); 
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

const confetti = new Confetti("question_pics");

startQuiz();

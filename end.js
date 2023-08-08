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




const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})
const confetti = new Confetti("finalScore");
// const confetti = new Confetti("finalScore");
// confetti.setCount(250);

document.addEventListener("DOMContentLoaded", function () {
    // This function will be executed when the page content is loaded
    
    confetti.setCount(250);
    
    // Start the confetti animation immediately
    confetti.update(new Date().getTime());
  });


const saveButton = document.getElementById("saveScoreBtn");

saveButton.addEventListener("click", () => {
    saveHighScore(mostRecentScore, username.value)
    saveButton.disabled = 'true';
})


function saveHighScore(current_score, current_name) {
    const score_name = {
        score: current_score,
        name: current_name
    }
    highScores.push(score_name)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(8)

    localStorage.setItem("highScores", JSON.stringify(highScores))
}

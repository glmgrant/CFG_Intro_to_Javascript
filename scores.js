const highScoresList = document.querySelector("#highScoresList")
const highScores = JSON.parsel(localStorage.getItem("mostRecentScore")) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")

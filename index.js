// Adds points to "home score"
let scoreHome = document.getElementById("score-home")
let countHome = 0

function add1Home() {
    countHome += 1
    scoreHome.textContent = countHome
}
function add2Home() {
    countHome += 2
    scoreHome.textContent = countHome
}
function add3Home() {
    countHome += 3
    scoreHome.textContent = countHome
}

// Adds points to "guest score"
let scoreGuest = document.getElementById("score-guest")
let countGuest = 0

function add1Guest() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}
function add2Guest() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}
function add3Guest() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}

// Resets scoreboard
function newGame() {
    countHome = 0
    countGuest = 0
    scoreHome.textContent = countHome
    scoreGuest.textContent = countGuest
}

let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let homeCount = 0
let awayCount = 0

function homePlusOne() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function homePlusTwo() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function homePlusThree() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

function homeReset() {
    homeCount = 0
    homeScoreEl.textContent = 0
}

function awayPlusOne() {
    awayCount += 1
    awayScoreEl.textContent = awayCount
}

function awayPlusTwo() {
    awayCount += 2
    awayScoreEl.textContent = awayCount
}

function awayPlusThree() {
    awayCount += 3
    awayScoreEl.textContent = awayCount
}

function awayReset() {
    awayCount = 0
    awayScoreEl.textContent = 0
}
let interval;

let milliseconds = 0;
let msTens = 0;
let msHundreds = 0;
let sOnes = 0;
let sTens = 0;

let startButton = document.createElement("button");
startButton.textContent = "Start Timer";
startButton.addEventListener('click', startTimer);
let resetButton = document.createElement("button");
resetButton.textContent = "Reset Timer";
resetButton.addEventListener('click', resetTimer);
document.querySelector("body").appendChild(startButton);
document.querySelector("body").appendChild(resetButton);

function startTimer(){
    resetTimer();
    interval = setInterval(formatDigits, 10);
    startButton.disabled = true;
}

function resetTimer(){
    milliseconds = 0;
    msTens = 0;
    msHundreds = 0;
    sOnes = 0;
    sTens = 0;
    document.getElementById("msTens").textContent = msTens;
    document.getElementById("msHundreds").textContent = msHundreds;
    document.getElementById("secondOnes").textContent = sOnes;
    document.getElementById("secondTens").textContent = sTens;
    document.getElementById("msTens").style.color = "black";
    document.getElementById("msHundreds").style.color = "black";
    document.getElementById("secondOnes").style.color = "black";
    document.getElementById("secondTens").style.color = "black";

    clearInterval(interval);
    startButton.disabled = false;
}

function formatDigits() {
    milliseconds++;
    msTens = milliseconds % 10;

    if (msTens === 0) msHundreds++;
    if (msHundreds === 6) {
        msHundreds = 0;
        sOnes++;
    }

    if (sOnes === 10) {
        sOnes = 0;
        sTens++;
    }

    if (sTens === 1) {
        clearInterval(interval);
        document.getElementById("msTens").style.color = "red";
        document.getElementById("msHundreds").style.color = "red";
        document.getElementById("secondOnes").style.color = "red";
        document.getElementById("secondTens").style.color = "red";

        startButton.disabled = false;
    }

    document.getElementById("msTens").textContent = msTens;
    document.getElementById("msHundreds").textContent = msHundreds;
    document.getElementById("secondOnes").textContent = sOnes;
    document.getElementById("secondTens").textContent = sTens;
}

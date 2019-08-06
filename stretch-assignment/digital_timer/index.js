//Collecting digits
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

//Creating counters
let secondTensCounter = 0;
let secondOnesCounter = 0;
let msHundredsCounter = 0;
let msTensCounter = 0;

function startClock() {
    msTensPlus();
    if (secondOnesCounter === 9 && msHundredsCounter === 5 && msTensCounter === 9) {
        window.setTimeout(function () {
            secondOnesCounter = 0;
            msHundredsCounter = 0;
            msTensCounter = 0;
            secondOnes.textContent = secondOnesCounter;
            msHundreds.textContent = msHundredsCounter;
            msTens.textContent = msTensCounter;
            secondTensPlus();
            secondTens.style.color = "red";
            secondOnes.style.color = "red";
            msHundreds.style.color = "red";
            msTens.style.color = "red";
            clearInterval(clockTicker);
            startButton.disabled = false;
        }, 10)
    }
    else if (msHundredsCounter === 9 && msTensCounter === 9) {
        window.setTimeout(function () {
            msHundredsCounter = 0;
            msTensCounter = 0;
            msHundreds.textContent = msHundredsCounter;
            msTens.textContent = msTensCounter;
            secondOnesPlus();
        }, 10);
    }
    else if (msTensCounter === 9) {
        window.setTimeout(function () {
            msTensCounter = 0;
            msTens.textContent = msTensCounter;
            msHundredsPlus();
        }, 10);
    }
}

// updating counter functions
function msTensPlus() {
    msTensCounter++;
    msTens.textContent = msTensCounter;
}

function msHundredsPlus() {
    msHundredsCounter++;
    msHundreds.textContent = msHundredsCounter;

}

function secondOnesPlus() {
    secondOnesCounter++;
    secondOnes.textContent = secondOnesCounter;
}

function secondTensPlus() {
    secondTensCounter++;
    secondTens.textContent = secondTensCounter;
}


//Stretch Goals

//Making Buttons
const startButton = document.createElement('button');
startButton.textContent = "Touch Me to Start!";
startButton.style.margin = "2% 0%";
const resetButton = document.createElement('button');
resetButton.textContent = "Touch Me to Reset!";

document.querySelector('body').appendChild(startButton);
document.querySelector('body').appendChild(resetButton);

//Adding Event Listeners
startButton.addEventListener('click', start);
resetButton.addEventListener('click', resetValues);

function resetValues() {
    secondTensCounter = 0;
    secondOnesCounter = 0;
    msHundredsCounter = 0;
    msTensCounter = 0;
    secondTens.textContent = "-";
    secondOnes.textContent = "-";
    msHundreds.textContent = "-";
    msTens.textContent = "-";
    secondTens.style.color = "black";
    secondOnes.style.color = "black";
    msHundreds.style.color = "black";
    msTens.style.color = "black";
}


let clockTicker;
function start() {
    startButton.disabled = true;
    clockTicker = window.setInterval(startClock, 10);
}


//Styling buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(item => {
    item.style.color = "darkgreen";
    item.style.padding = "1% 3%";
});
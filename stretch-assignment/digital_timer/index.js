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
    if (msHundredsCounter === 5 && msTensCounter === 9) {
        window.setTimeout(function () {
            msHundredsCounter = 0;
            msTensCounter = 0;
            msHundreds.textContent = msHundredsCounter;
            msTens.textContent = msTensCounter;

            msHundredsPlus();
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

window.setInterval(startClock, 10);

console.log(msTens);
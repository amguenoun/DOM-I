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

function reset(counter, digit) {
    counter = 0;
    digit.textContent = counter;
}

// updating msTens
function msTensPlus() {
    msTensCounter++;
    msTens.textContent = msTensCounter;
    if (msTensCounter === 9) {
        window.setTimeout(function () {
            msTensCounter = 0;
            msTens.textContent = msTensCounter;
        }, 1000);
        console.log("first");
    }
}

window.setInterval(msTensPlus, 1000);

console.log(msTens);
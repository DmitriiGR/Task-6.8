const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeBlack1);
}

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeBlack2);
}

function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeBlack3);
}

function makeBlack1() {
    trafficLightEl.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeBlack1);
    trafficLightE3.addEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeYellow);

}
function makeBlack2() {
    trafficLightE2.style.background = ('black');
    trafficLightE2.removeEventListener('click', makeBlack2);
    trafficLightE3.addEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

function makeBlack3() {
    trafficLightE3.style.background = ('black');
    trafficLightE3.removeEventListener('click', makeBlack3);
    trafficLightE2.addEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeGreen);
}
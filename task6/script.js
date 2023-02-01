const trafficLightE1 = document.querySelector('#trafficLight1');
function makeGreen() {
    trafficLightE1.style.background = ('green');
    trafficLightE1.removeEventListener('click', makeGreen);
    trafficLightE1.addEventListener('click', makeBlack1);
}
function makeBlack1() {
    trafficLightE1.style.background = ('black');
    trafficLightE1.removeEventListener('click', makeBlack1);
    trafficLightE1.addEventListener('click', makeGreen);
}
trafficLightE1.addEventListener('click', makeGreen);


const trafficLightE2 = document.querySelector('#trafficLight2');
function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeBlack2);
}
function makeBlack2() {
    trafficLightE2.style.background = ('black');
    trafficLightE2.removeEventListener('click', makeBlack2);
    trafficLightE2.addEventListener('click', makeYellow);
}
trafficLightE2.addEventListener('click', makeYellow);


const trafficLightE3 = document.querySelector('#trafficLight3');
function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeBlack3);
}
function makeBlack3() {
    trafficLightE3.style.background = ('black');
    trafficLightE3.removeEventListener('click', makeBlack3);
    trafficLightE3.addEventListener('click', makeRed);
}

trafficLightE3.addEventListener('click', makeRed);


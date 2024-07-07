const vector = document.querySelector('.main__dial__vector');
const vector1 = document.querySelector('.main__dial__minutes__vector1');

const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const milliseconds = document.querySelector('#milliseconds');

const start = document.querySelector('#start');
const stoped = document.querySelector('#stop');
const reset = document.querySelector('#reset');

minutes.value = '0';
seconds.value = '0';
milliseconds.value = '0';

let buttonOn = 0;

let timerId;

let audio = new Audio('audio/soundStopwath.mp3');
let audioButton = new Audio('audio/jeleznaya-knopka-vyiklyucheniya1.mp3');
let countDeg = '0';
let countDeg1 = '0';

function millisecondsPlus() {
    if (milliseconds.value !== '99') {
        milliseconds.value = String(Number(milliseconds.value) + 1);
    } else {
        milliseconds.value = '0';
        secondsPlus();
        rotateVector();
    }
}

function secondsPlus() {
    if (seconds.value !== '59') {
        seconds.value = String(Number(seconds.value) + 1);
    } else {
        seconds.value = '0';
        minutesPlus();
        rotateVector1();
    }
}

function minutesPlus() {
    minutes.value = String(Number(minutes.value) + 1);
}

function soundStopwath() {
    if (buttonOn === 1) {
        audio.loop = true;
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

function rotateVector() {
    countDeg = String(Number(countDeg) + 6);
    vector.style.transform = `rotate(${countDeg}deg)`;
}

function rotateVector1() {
    countDeg1 = String(Number(countDeg1) + 6);
    vector1.style.transform = `rotate(${countDeg1}deg)`;
}

start.addEventListener('click', function (e) {
    if (buttonOn === 0) {
        timerId = setInterval(millisecondsPlus, 10)
        buttonOn = 1;
        soundStopwath();
    }
    audioButton.play();
});

stoped.addEventListener('click', function (e) {
    if (buttonOn === 1) {
        clearInterval(timerId);
        buttonOn = 0;
        soundStopwath();
    }
    audioButton.play();
});

reset.addEventListener('click', function (e) {
    minutes.value = '0';
    seconds.value = '0';
    milliseconds.value = '0';
    vector.style.transform = 'rotate(0deg)';
    vector1.style.transform = 'rotate(0deg)';
    countDeg = '0';
    countDeg1 = '0';
    audioButton.play();
});


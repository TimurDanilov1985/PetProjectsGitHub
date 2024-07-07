let display = document.querySelector('.main__calculator__form__input');
display.value = '0';
let ac = document.getElementById('ac');
let plus = document.getElementById('plus');
let persent = document.getElementById('percent');
let division = document.getElementById('division');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let mult = document.getElementById('mult');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let diff = document.getElementById('diff');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let add = document.getElementById('add');
let zero = document.getElementById('zero');
let point = document.getElementById('point');
let equally = document.getElementById('equally');
let num1 = 0;
let num2 = 0;
let action = 0;
let operator = false;
let countAction = 0;

ac.onclick = function () {
    display.value = '0';
    countAction = 0;
    num1 = 0;
    num2 = 0;
    operator = false;
}

plus.onclick = function () {
    if (display.value.indexOf('-') === -1) {
        let number = display.value;
        let result = '-' + number;
        display.value = result;
    } else {
        let result = display.value.slice(1);
        display.value = result;
    }
}

function clickNumber(num) {
    if (operator) {
        display.value = '';
        operator = false;
    }
    if (display.value !== '0' || display.value === display.value + ',') {
        let number = display.value;
        display.value = number + num;
    } else {
        display.value = num;
    }
}

function clickAction(act) {
    if(countAction !== 0) {
        num2 = Number(display.value);
        operatorCalculation();
    }
    num1 = Number(display.value);
    action = act;
}

persent.onclick = function () {
    clickAction(1);
    operator = true;
    countAction = 1;
}

division.onclick = function () {
    clickAction(2);
    operator = true;
    countAction = 1;
}

seven.onclick = function () {
    clickNumber('7');
}

eight.onclick = function () {
    clickNumber('8');
}

nine.onclick = function () {
    clickNumber('9');
}

mult.onclick = function () {
    clickAction(3);
    operator = true;
    countAction = 1;
}

four.onclick = function () {
    clickNumber('4');
}

five.onclick = function () {
    clickNumber('5');
}

six.onclick = function () {
    clickNumber('6');
}

diff.onclick = function () {
    clickAction(4);
    operator = true;
    countAction = 1;
}

one.onclick = function () {
    clickNumber('1');
}

two.onclick = function () {
    clickNumber('2');
}

three.onclick = function () {
    clickNumber('3');
}

add.onclick = function () {
    clickAction(5);
    operator = true;
    countAction = 1;
}

zero.onclick = function () {
    clickNumber('0');
}

point.onclick = function () {
    if (display.value.indexOf('.') === -1) {
        let number = display.value;
        display.value = number + '.';
    }
}

equally.onclick = function () {
    countAction = 0;
    switch (action) {
        case 1:
            num2 = Number(display.value);
            display.value = num1 * num2 / 100;
            break;
        case 2:
            num2 = Number(display.value);
            display.value = num1 / num2;
            break;
        case 3:
            num2 = Number(display.value);
            display.value = num1 * num2;
            break;
        case 4:
            num2 = Number(display.value);
            display.value = num1 - num2;
            break;
        case 5:
            num2 = Number(display.value);
            display.value = num1 + num2;
            break;
        default:
            break;
    }
}

function operatorCalculation() {
    switch (action) {
        case 1:
            num2 = Number(display.value);
            display.value = num1 * num2 / 100;
            break;
        case 2:
            num2 = Number(display.value);
            display.value = num1 / num2;
            break;
        case 3:
            num2 = Number(display.value);
            display.value = num1 * num2;
            break;
        case 4:
            num2 = Number(display.value);
            display.value = num1 - num2;
            break;
        case 5:
            num2 = Number(display.value);
            display.value = num1 + num2;
            break;
        default:
            break;
    }
} 

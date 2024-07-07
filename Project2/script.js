const input = document.querySelector('.main__counter__click__input');
input.value = '0';

const buttons = document.querySelectorAll('.main__counter__click__button');

buttons[0].addEventListener('click', function (e) {
    // if (input.value !== '0') {
    //     input.value = String(Number(input.value) - 1);
    // }
    input.value = String(Number(input.value) - 1);
});

buttons[1].addEventListener('click', function (e) {
    if (input.value !== '99') {
        input.value = String(Number(input.value) + 1);
    }
});

buttons[2].addEventListener('click', function (e) {
    input.value = '0';
});
const button = document.querySelector('.main__slide__button');
const slide = document.querySelector('.main__slide__slider');
const output = document.querySelector('.main__slide__output');

output.value = slide.getAttribute('value');

let value = slide.getAttribute('value');
slide.style.background = 'linear-gradient(to right, green ' + value + '%, white ' + value + '%)';

slide.addEventListener('input', function (e) {
    output.value = slide.value;
    value = (slide.value - slide.min) / (slide.max - slide.min) * 100;
    slide.style.background = 'linear-gradient(to right, green ' + value + '%, white ' + value + '%)';
});

button.addEventListener('click', function (e) {
    slide.value = 0;
    output.value = 0;
    let value = 0;
    slide.style.background = 'linear-gradient(to right, green ' + value + '%, white ' + value + '%)';
});
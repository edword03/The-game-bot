'use strict';

const getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};
const RandomNumber = getRandomNumber(1, 100);

let num = prompt('Угадай число от 1 до 100');

function startGame() {
    console.log(RandomNumber);
    
        if (isNumber(num)) {
            if (RandomNumber > num) {
                num = prompt('Загаданное число больше');
                startGame(num);
            } else if (RandomNumber < num) {
                num = prompt('Загаданное число меньше');
                startGame(num);
            } else {
                alert('угадал');
                return;
            }
        } else {
            if (num === null) {
                return;
            } else {
                num = prompt('Введите число!');
                startGame(num);
            };
        }
};

startGame();

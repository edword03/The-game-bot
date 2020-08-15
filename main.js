'use strict';

const getRandomNumber = function() {
    return 89;
};
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

const startGame = function() {
    const RandomNumber = getRandomNumber();
    
    return (function repeat() {
        let num = prompt('Угадай число от 1 до 100');

        if (isNumber(num)) {

            if (RandomNumber > num) {
                alert('Загаданное число больше');
            } else if (RandomNumber < num) {
                alert('Загаданное число меньше')
            } else {
                alert('угадал');
                return;
            }
        } else {
            if (num === null) {
                return;
            } else {
                alert('Введите число!')
            };
        }
        repeat();
        console.dir(RandomNumber);
    })();
};

console.dir(startGame());
// console.dir(RandomNumber);
// console.log(5 + result());
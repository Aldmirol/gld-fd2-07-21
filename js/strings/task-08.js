/*Создать строку: 10 times 2 is 20 ' используя переменные:
const a = 10;
const b = 2;
Используйте шаблонные строки.*/

const a = 10;
const b = 2;

function templateStr(a, b) {
    return console.log(`${a} times ${b} is ${a * b}`);
}

templateStr(a, b);
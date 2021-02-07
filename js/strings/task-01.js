/*Объявите три переменных: hour, minute, second.Присвойте им следующие значения: 4, 35, 5.
Выведите в консоль время в формате 04: 35: 05.
Используйте String.prototype.padStart().*/

const hour = 4;
const minute = 35;
const second = 5;

console.log(`${'0' + hour}${(minute + '').padStart(3, ':')}${('0' + second).padStart(3, ':')}`);

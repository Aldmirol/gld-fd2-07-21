/*Объявите три переменных: hour, minute, second.Присвойте им следующие значения: 4, 35, 5.
Выведите в консоль время в формате 04: 35: 05.
Используйте String.prototype.padStart().*/

const hour = 4;
const minute = 35;
const second = 5;

const hourStr = (hour + '').padStart(2, '0');
const minuteStr = (minute + '').padStart(2, '0');
const secondStr = (second + '').padStart(2, '0');

console.log(`${hourStr}${minuteStr.padStart(3, ':')}${secondStr.padStart(3, ':')}`);

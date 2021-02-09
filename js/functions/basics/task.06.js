/*Объявите две строчные переменные: params и body и проинициализируйте их строчными значениями,
которые представляют список параметров и тело будущей функции.
Создайте функцию, используя эту информацию с помощью Function Constructor(FC).Вызовите эту функцию.*/

const paramFirst = 'a';
const paramSecond = 'b';
const body = 'return a * b';

const mult = new Function(paramFirst, paramSecond, body);

console.log(mult(6, 5));
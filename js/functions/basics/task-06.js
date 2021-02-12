/*Объявите две строчные переменные: params и body и проинициализируйте их строчными значениями,
которые представляют список параметров и тело будущей функции.
Создайте функцию, используя эту информацию с помощью Function Constructor(FC).Вызовите эту функцию.*/

const params = 'a, b';
const body = 'return a * b';

const calcMult = new Function(params, body);

console.log(calcMult(6, 5));

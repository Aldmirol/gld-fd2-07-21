/*Создайте тег - функцию currency, которая формитирует числа до двух знаков после запятой
 и добавляет знак доллара перед числом в шаблонном литерале.*/

const num = 100.5454545;

function currency(strArr, num) {
   return strArr[0] + '$' + num.toFixed(2);
}

console.log(currency `I have ${num}`);

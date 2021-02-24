/*Создать массив, который содержит строки и числа.Проверить, 
содержит ли массив только строки.Вывети результат в консоль*/

const arrOfNumsAndStr = [1, '0', '4', '1', '0', '5'];

console.log(arrOfNumsAndStr.every(elem => typeof elem === 'string'));
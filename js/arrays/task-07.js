/*Создать массив 20 чисел с случайными значениями от 0 до 100.
Отcортировать массив по возрастанию.Вывести его в консоль.
Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.*/

const arrOfRandomNum = [
    1, 9, 5, 95, 18,
    82, 6, 8, 78, 11,
    23, 28, 31, 34, 39,
    32, 49, 55, 59, 60
];

arrOfRandomNum.sort((a, b) => a - b);

console.log(arrOfRandomNum);

const reversedArr = arrOfRandomNum.reverse();

console.log(reversedArr);
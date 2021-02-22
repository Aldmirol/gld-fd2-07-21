/*Создать массив чисел в диапазоне от 0 до 100. Подсчитать и вывети сумму тех элементов, которые больше 50*/

const arrOfNum = [...Array(101).keys()];

console.log(arrOfNum.filter(elem => elem > 50).reduce((sum, elem) => sum + elem));

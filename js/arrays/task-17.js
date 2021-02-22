/*Создать массив целых чисел.На его основе создать массивы– представления этих же чисел в бинарном,
восьмеричном и шестнадцатеричном виде.Вывести эти массивы в консоль.*/

const arrOfIntegralNum = [1, 2, 3, 4, 5, 15];

const arrOfBinaryNum = arrOfIntegralNum.map(elem => elem.toString(2));
const arrOfOctalNum = arrOfIntegralNum.map(elem => elem.toString(8));
const arrOfHexadecimalNum = arrOfIntegralNum.map(elem => elem.toString(16));

console.log(arrOfBinaryNum);
console.log(arrOfOctalNum);
console.log(arrOfHexadecimalNum);



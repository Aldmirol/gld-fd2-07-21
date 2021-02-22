/*Создать двумерный массив:

1 2 3
4 5 6
7 8 9
Вывести его в консоль.Преобразовать массив одномерный и снова вывести в консоль*/

const twoDemensionalArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(twoDemensionalArr);

const oneDemensionalArr = twoDemensionalArr.flat(1);

console.log(oneDemensionalArr);
/*Создать массив[3, 0, -1, 12, -2, -4, 0, 7, 2].
На его основе создать новый массив[-1, -2, -4, 0, 0, 3, 12, 7, 2].

первая часть - отрицательные числа в том же порядке
вторая часть - нули
третья часть - положительные числа в том же порядке*/

const arrOfNum = [3, 0, -1, 12, -2, -4, 0, 7, 2];

const sortedArrOfNum = arrOfNum.filter(elem => {
    return elem < 0;
}).concat(arrOfNum.filter(elem => {
    return elem === 0;
})).concat(arrOfNum.filter(elem => {
    return elem > 0;
}));

console.log(sortedArrOfNum);

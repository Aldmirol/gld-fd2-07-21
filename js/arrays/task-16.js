/*Создать массив с дублями.Найти первый элемент, который дублируется.
Заменить этот элемент и все его копии на символ '*'.Вывести массив в консоль.*/

const arrWithDupl = [5, 6, 9, 2, 1, 7, 1, 4, 1, 7, 7];

const indexFirstDupl = arrWithDupl.findIndex((elem, index) => {
    return arrWithDupl.slice(index + 1).some(value => elem === value);
});

const duplicate = arrWithDupl[indexFirstDupl];

const arrWithReplaceDupl = arrWithDupl.map(elem => elem === duplicate ? '*' : elem);

console.log(arrWithReplaceDupl);

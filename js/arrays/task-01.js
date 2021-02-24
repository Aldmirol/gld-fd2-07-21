/*Создать массив.Получить последний элемент массива.
Без удаления этого элемента из массива.С удалением этого элемента из массива.Выведите массивы в консоль*/

const arrOrderedNum = [1, 2, 3, 4, 5];
const lastElemWithoutDel = arrOrderedNum[arrOrderedNum.length - 1];

console.log(lastElemWithoutDel);
console.log(arrOrderedNum);

const lastElemWithDel = arrOrderedNum.pop();

console.log(arrOrderedNum);
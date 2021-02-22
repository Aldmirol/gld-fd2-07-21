/*Создать массив любых элементов.Добавить элемент в конец массива.
Модифицировать текущий массив.Создать новый массив.Выведите массивы в консоль*/

const arrRandomElem = [1, 2n, '3', true, null, undefined];

arrRandomElem.push('Symbol');
arrRandomElem.reverse();

const arrRandomElemCopy = [...arrRandomElem];

console.log(arrRandomElem);
console.log(arrRandomElemCopy);
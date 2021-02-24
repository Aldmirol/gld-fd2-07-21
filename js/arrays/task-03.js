/*Создать массив любых элементов.Вставить новый элемент под индексом 3. Модифицировать текущий массив.
Создать новый массив.Выведите массивы в консоль*/

const arrRandomElem = ['1', 2, 3, '4', 5];

arrRandomElem.splice(3, 0, '3');
arrRandomElem.pop();

const arrRandomElemCopy = [...arrRandomElem];

console.log(arrRandomElem);
console.log(arrRandomElemCopy);
/*Создать массив с дублями элементов.На его основе создать новый массив
уникальных элементов(удалить дубли).Вывести новый массив в консоль.*/

const arrWithDuplicateEl = [5, 6, 9, 2, 1, 7, 1, 6];

const arrWithoutDuplicateEl = arrWithDuplicateEl.filter((elem, index) => arrWithDuplicateEl.indexOf(elem) === index);

console.log(arrWithoutDuplicateEl);
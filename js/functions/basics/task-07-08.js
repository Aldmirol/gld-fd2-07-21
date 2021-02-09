/*Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11].Используя стрелочные функции создайте новый массив из элементов elem * elem,
которые меньше 100 и отсортируйте его по возрастанию.Выведите результат в консоль.
Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc.Используйте IIFE.*/

const arr = [1, 8, 3, 5, 12, 7, 9, 11];

const multArrElem = arr => {
    let arrSort = [];

    for (let i = 0; i < arr.length;i++) {
        let elem = arr[i] * arr[i - 1];

        if (elem < 100) {
            arrSort.push(elem);
        }
    }

    arrSort.sort(function(a, b) {
        return a - b;
    });

    console.log(arrSort);
};

multArrElem(arr);
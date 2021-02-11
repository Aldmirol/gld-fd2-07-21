/*Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11].Используя стрелочные функции создайте новый массив из элементов elem * elem,
которые меньше 100 и отсортируйте его по возрастанию.Выведите результат в консоль.
Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc.Используйте IIFE.*/

(function () {
    const multArrElem = arr => {
        const arrSorted = [];

        for (let i = 0; i < arr.length; i++) {
            const elem = arr[i] * arr[i];

            if (elem < 100) {
                arrSorted.push(elem);
            }
        }

        arrSorted.sort(function (a, b) {
            return a - b;
        });

        console.log(arrSorted);
    };

    multArrElem([1, 8, 3, 5, 12, 7, 9, 11]);
})();

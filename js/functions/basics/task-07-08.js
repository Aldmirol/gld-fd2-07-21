/*Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11].Используя стрелочные функции создайте новый массив из элементов elem * elem,
которые меньше 100 и отсортируйте его по возрастанию.Выведите результат в консоль.
Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc.Используйте IIFE.*/

(function () {
    const calcMultEveryArrElem = initialArr => {
        const modyfyedArr = [];

        for (let i = 0; i < initialArr.length; i++) {
            const elem = initialArr[i] * initialArr[i];

            if (elem < 100) {
                modyfyedArr.push(elem);
            }
        }

        modyfyedArr.sort(function (a, b) {
            return a - b;
        });

        return modyfyedArr;
    };

    console.log(calcMultEveryArrElem([1, 8, 3, 5, 12, 7, 9, 11]));
})();

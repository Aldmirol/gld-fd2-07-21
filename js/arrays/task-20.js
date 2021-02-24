/*Создать отсортированный массив чисел.Реализовать функцию binarySearch(arr, value), 
которая принимает массив и значение и возвращает индекс значения в массиве или - 1.
Функция должна использовать бинарный поиск.
Вывести результат в консоль*/

const sortedNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 34, 35, 36];

function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] > value) {
            end = mid -1;
        } else if (arr[mid] < value) {
            start = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

console.log(binarySearch(sortedNumArr, 34));
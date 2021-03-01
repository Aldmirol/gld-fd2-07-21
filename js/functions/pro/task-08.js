/*Memoization.Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле 
F0 = 0, F1 = 1, Fn = Fn - 1 + Fn - 2.
Функция должна хранить те значения, которые она уже вычисляла.
Используя методы console.time(), console.timeEnd() или performance.now() определите время 
вычисления функции fibo и функции fiboMemo.*/

function fibonachi() {
    const memoryObj = {};

    return function fibo(num) {
        if (num in memoryObj) {
            return memoryObj[num];
        } else if (num <= 1) {
            return 1;
        }

        const result = fibo(num - 1) + fibo(num - 2);
        memoryObj[num] = result;

        return result;
    }
}

const fiboMemo = fibonachi();

console.time('Operation execution time');
console.log(fiboMemo(5));
console.timeEnd('Operation execution time');

console.time('Operation execution time');
console.log(fiboMemo(10));
console.timeEnd('Operation execution time');

console.time('Operation execution time');
console.log(fiboMemo(10));
console.timeEnd('Operation execution time');

console.time('Operation execution time');
console.log(fiboMemo(5));
console.timeEnd('Operation execution time');
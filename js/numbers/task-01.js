/*Напишите функцию randomInRange которая принимает два параметра - начало и конец промежутка, в котором искать случайное значение.
Функция должна каждый раз возвращать новое случайное число.*/

(function() {
    function randomInRange(start, end) {
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }

    console.log(randomInRange(5, 9));
})();
/*Дан массив numbers.Найдите среднее арифметическое его элементов.
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.*/

(function() {
    const numbers = [12, 15, 20, 25, 59, 79];
    let mean;
    let sum = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    mean = sum / numbers.length;

    console.log(mean);
})();
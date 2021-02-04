/*Объявите переменную month и проинициализируйте ее числом от 1 до 12.
Вычислите время года и выведите его в консоль.*/

(function() {
    let month;

    month = 2;

    if (month >= 12 || month <= 2) {
        console.log('winter');
    } else if (month > 2 && month <= 5) {
        console.log('spring');
    } else if (month > 5 && month <=8) {
        console.log('summer');
    } else {
        console.log('autumn');
    }
})();

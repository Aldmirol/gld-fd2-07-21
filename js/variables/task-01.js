/*Объявите переменную days и 
проинициализируйте ее числом от 1 до 10.
Преобразуйте это число в количество секунд и 
отобразите в консоли.*/

(function() {
    let days;
    let secondsCounter;

    days = 1;

    secondsCounter = days * 24 * 60 * 60;

    console.log(secondsCounter);
})();
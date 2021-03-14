/*Создайте промис, который через 1 с возвращает строку "My name is".
Создайте функцию onSuccess, которая получает один параметр, 
прибавляет к нему Ваше имя и возвращает новую строку из функции.
Создайте функцию print, которая выводит в консоль значение своего параметра.
Добавьте два метода then и зарегистрируйте созданные функции.*/

const timeoutPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('My name is ');
    }, 1000);
});

function onSuccess(value) {
    return value + 'Alexey';
}

function print(value) {
    return console.log(value);
}

timeoutPromise
    .then(onSuccess)
    .then(print);
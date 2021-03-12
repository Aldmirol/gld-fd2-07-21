/*Используйте предыдущий код.Добавьте в функци onSuccess генерацию исключения.
Обработайте даное исключение, используя
catch.
Обратите внимание, что метод print при этом не выполняется.*/

const timeoutPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('My name is ');
    }, 1000)
});

function onSuccess(value) {
    throw 'Critical error';
}

function print(value) {
    return console.log(value);
}

timeoutPromise
    .then(onSuccess)
    .then(print)
    .catch((error) => {
        console.log(new Error(error));
    });
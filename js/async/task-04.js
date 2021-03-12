/*Создайте промис, который переходит в состояние resolved через 3 с.
(Используйте setTimeout) и возвращает строку 'Promise Data'.
Получите данные промиса и выведите их в консоль*/

const timeoutPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promise Data');
    }, 3000);
});

timeoutPromise.then(console.log);
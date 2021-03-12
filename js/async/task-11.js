/*Для браузера.Создайте промис, который перейдет в состояние resolve через 5 с и вернет 
строку 'Promise Data'.Создайте второй промис, который перейдет в состояние rejected по клику на кнопку.
Добавьте обработчик для кнопки.Используя метод race организуйте отмену промиса.*/

const rejButton = document.querySelector(".eleven__legend__reject__button");
let rejectedPromise;

const resPromise = new Promise((res, rej) => {
    console.log("Promise is created");
    setTimeout(() => {
        res("Promise Data");
    }, 5000);
});

const rejPromise = new Promise((res, rej) => {
    rejectedPromise = rej;
});

rejButton.addEventListener("click", () => rejectedPromise("Promise is rejected"));

Promise.race([resPromise, rejPromise])
    .then(console.log)
    .catch(console.log);




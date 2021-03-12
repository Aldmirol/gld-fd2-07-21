/*Создайте промис, который постоянно находиться в состоянии pending.
В конструкторе промиса выведите в консоль сообщение "Promise is created".*/

const pendingPromise = new Promise((res, rej) => {
    console.log('Promise is created');
});
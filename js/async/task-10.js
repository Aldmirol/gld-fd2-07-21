/*Используйте предыдущее задание.Пусть теперь второй промис переходит 
в состояние rejected со значением "Promise Error".
Измените код, чтобы обработать эту ситуацию.Используйте Promise.allSettled*/

const namePromise = new Promise((res, rej) => {
    setTimeout(() => {
        res({
            name: 'Anna'
        });
    }, 2000);
});

const agePromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej('Promise Error');
    }, 3000);
});

Promise.allSettled([namePromise, agePromise])
    .then(console.log);

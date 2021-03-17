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
    .then(data => {
        const succefulPromises = data.filter(obj => obj.status === "fulfilled").map(elem => elem.value);
        const unSuccefulPromises = data.filter(obj => obj.status === "rejected").map(elem => elem.reason);

        if (unSuccefulPromises.length > 0) {
            return `Not all promises are resolved. Rejected errors: ${unSuccefulPromises}`;
        } else {
            return succefulPromises;
        }
    })
    .then(console.log);

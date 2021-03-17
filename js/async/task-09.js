/*Создайте два промиса.Первый промис возвращает объект {
    name: "Anna"
}
через 2 с, а второй промис возвращает объект {
    age: 16
}
через 3 с.
Получите результаты работы двух промисов, объедините свойства объектов и выведите в консоль.
Используйте Promise.all.*/

const namePromise = new Promise((res, rej) => {
    setTimeout(() => {
        res({
            name: 'Anna',
        });
    }, 2000);
});

const agePromise = new Promise((res, rej) => {
    setTimeout(() => {
        res({
            age: 16,
        });
    }, 3000);
});

Promise.all([namePromise, agePromise])
    .then(values => {
        return values.reduce((acc, value) => acc = {
            ...acc,
            ...value
        });
    })
    .then(console.log);
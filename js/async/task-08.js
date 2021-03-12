/*Напишите функцию getPromiseData, которая принимает один параметр - промис.
Функция получает значение промиса и выводит его в консоль.Объявите объект со свойтвом name и значением Anna.
Создайте врапер в виде промиса для этого объекта и вызовите для него функцию getPromiseData.*/

function getPromiseData(promise) {
    return promise.then(console.log);
}

const obj = {
    name: 'Anna'
};

const wrap = Promise.resolve(obj);

getPromiseData(wrap);
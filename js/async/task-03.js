/*Создайте промис, который после создания сразу же переходит в состояние 
rejected и возвращает строку 'Promise Error'.Получите данные промиса и выведите их в консоль*/

const rejectedPromise = Promise.reject('Promise Error');

rejectedPromise.catch(error => console.log(new Error(error)));
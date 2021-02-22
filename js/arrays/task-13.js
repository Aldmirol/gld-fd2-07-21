/*Создать массив любых элементов.
На его основе получить новый массив– подмножество элементов 
оригинального массива начиная с индекса a и заканчивая индексом b.
Вывести массив в консоль.*/

const arrOfStr = ['Make', 'a', 'long', 'story', 'short'];

const subStrOfArr = arrOfStr.splice(2, 2);

console.log(arrOfStr);
console.log(subStrOfArr);
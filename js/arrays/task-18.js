/*Получить из строки 'a big brown fox jumps over the lazy dog'
массив слов, который содержит элементы, длина которых не больше 3 символа.Вывести массив в консоль.*/

const initalStr = 'a big brown fox jumps over the lazy dog';

const lessThanFourSymbInElemArr = initalStr.split(' ').filter(elem => elem.length <= 3);

console.log(lessThanFourSymbInElemArr);
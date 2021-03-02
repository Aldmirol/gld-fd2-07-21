/*Function as an Object.
Создайте функцию str(), которая принимает один строчный параметр 
и выводит в консоль 'String is non empty', если параметр - непустая строка и 'String is empty', 
если параметр– пустая строка.
Создайте функцию str.isNonEmptyStr(), как свойство функции str.
Эта функция должна принимать один параметр и возвращать true, если параметр 
непустая строка, иначе false.
Используйте эту функцию для реализации условия в основной функции.
Тестовые данные:
str.isNonEmptyStr(), result = false
str.isNonEmptyStr(''), result = false
str.isNonEmptyStr('a'), result = true
str.isNonEmptyStr(1), result = false
str(), console.log('String is empty')
str('a'), console.log('String is non empty')*/

function str(str) {
    return str && str.length > 0 ? `String is non empty` : `String is empty`;

}

str.isNonEmptySrt = function (str) {
    return str && str.length > 0 ? `true` : `false`;
};

console.log(str('Bilbo Baggins'));
console.log(str.isNonEmptySrt('Frodo Baggins'));

/*Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
отдельно количество букв r, k, t и вывести в консоль*/

function findQuantityCharInStr(str, searchChar) {
    return str.split('').filter(elem => elem === searchChar).length;
} 

console.log(findQuantityCharInStr('dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh', 'r'));
console.log(findQuantityCharInStr('dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh', 'k'));
console.log(findQuantityCharInStr('dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh', 't'));

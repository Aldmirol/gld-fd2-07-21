/*Напишите код, который выводит в консоль true, если строка str содержит 'discount'
или 'low price', а иначе false.
Тестовые данные: 'buy now, discount', 'buy now, dIscOUnt', 'take that, low price', 'low take that, prICE'.
Используйте String.prototype.includes().*/

function isWordIncludes(primaryStr) {
    return console.log(primaryStr.includes('discount') || primaryStr.includes('low price'));
}

isWordIncludes('take that, low price');
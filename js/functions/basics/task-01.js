/*Создать функцию, которая выводит в консоль строчку в формате 'символ - код'
для кодов в диапазоне 78000 - 78030(все пары в диапазоне).
Используйте String.prototype.fromCodePoint().*/

function convertNumToSymb(start, end) {
    for (start; start <= end; start++) {
        console.log(`${start} - ${String.fromCodePoint(start)}`);
    }
}

convertNumToSymb(78000, 78030);

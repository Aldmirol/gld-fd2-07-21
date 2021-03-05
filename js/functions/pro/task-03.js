/*Создайте функции toConsoleLog, toConsoleError, toConsoleTrace, toConsoleTable с одним параметром.
Функции должна выводить значение параметра в консоль в соответствующем режиме.
Создайте функцию splitToWords с двумя параметрами: msg и callback.
Функция должна разделять строку на слова и использовать колбек для отображения слов.
Если второй параметр не задан, функция должна возвращать массив слов.*/

function toConsoleLog(value) {
    console.log(value);
}
toConsoleLog('Eregion');

function toConsoleError(value) {
    console.error(value);
}
toConsoleError('Mordor');

function toConsoleTrace(value) {
    console.trace(value);
}
toConsoleTrace('Gondor');

const elfsCapital = {
    name: 'Valimar',
    population: 2e5,
    race: 'elfs',
    fortified: true,
};

function toConsoleTable(data) {
    console.table(data);
}
toConsoleTable(elfsCapital);



function splitToWords(msg, callback) {
    if (callback) {
        return msg.split(' ').forEach(callback);
    } else {
        return msg.split(' ');
    }
}

splitToWords('Imagination rules the world', toConsoleLog);
console.log(splitToWords('Imagination rules the world'));

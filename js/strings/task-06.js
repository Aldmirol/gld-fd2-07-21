/*Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false.
Используйте String.prototype.includes(), String.prototype.indexOf()*/

function charSearch(str, symb) {
    let symbCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(symb)) {
            symbCount++;
        }
    }

    if (symbCount === 0) {
        console.log(`
        Строка "${str}"
        не имеет вхождений символа ${symb}`);
    } else {
        console.log(`
        Строка "${str}"
        имеет ${symbCount} вхождение(я) символа "${symb}"`);
    }
}

charSearch('anana', 'a');

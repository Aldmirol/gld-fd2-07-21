/*Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false.
Используйте String.prototype.includes(), String.prototype.indexOf()*/

function charSearch(str, symb) {
    let symbCount = 0;
    let indexPos = str.indexOf(symb);

    while (indexPos !== -1) {
        symbCount++

        indexPos = str.indexOf(symb, indexPos + 1);
    }

    if (symbCount === 0) {
        console.log(`
        Строка "${str}"
        не имеет вхождений подстроки ${symb}`);
    } else {
        console.log(`
        Строка "${str}"
        имеет ${symbCount} вхождение(я) подстроки "${symb}"`);
    }
}

charSearch('Ann is the same is Anna', 'An');

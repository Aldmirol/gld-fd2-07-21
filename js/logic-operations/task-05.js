/*Перепишите
if используя тернарный опертор
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}*/

(function() {
    const a = 1;
    const b = 2;
    let result;

    (a + b < 4) ? result = 'Мало' : result = 'Много';

    console.log(result);
})();
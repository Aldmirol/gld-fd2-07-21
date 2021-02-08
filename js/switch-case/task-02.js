/*Переписать следующий код используя
switch - case
const a = +prompt('a?', '');

if (a === 0) {
    alert(0);
}

if (a === 1) {
    alert(1);
}

if (a === 2 || a === 3) {
    alert('2,3');
}*/

(function() {
    const a = +prompt('a?', '');

    switch (a) {
        case 0: {
            alert(0);
            break;
        }
        case 1: {
            alert(1);
            break;
        }
        case 2:
        case 3: {
            alert('2,3');
        }    
    }
})();
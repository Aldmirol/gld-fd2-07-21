/*Перепишите
if..else используя оператор
switch -
case.
let message;

if (login === 'Вася') {
    message = 'Привет';
} else if (login === 'Директор') {
    message = 'Здравствуйте';
} else if (login === '') {
    message = 'Нет логина';
} else {
    message = '';
}*/

(function() {
    let message;
    const login = 'Директор';

    switch (login) {
        case 'Вася': {
            message = 'Привет';
            break;
        }
        case 'Директор': {
            message = 'Здравствуйте';
            break;
        }
        case '': {
            message = 'Нет логина';
            break;
        }
        default: {
            message = '';
        }
    }

    console.log(message);
})();
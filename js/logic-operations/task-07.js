/*Требуется спросить у пользователя(в браузере): фамилию, имя, отчество раздельно(prompt),
возраст в годах(prompt), пол(confirm).
Вывести оператором alert анкету пользователя по примеру:
ваше ФИО: Иванов Иван Иванович
ваш возраст в годах: 20
ваш возраст в днях: 7300
через 5 лет вам будет: 25
ваш пол: мужской
вы на пенсии: нет
Реализовать(в обоих реализациях оператор alert должен использоваться ровно один раз):
    с использованием условного оператора(if), без условной операции( ? : )
    с использованием условной операции( ? : ), без условного оператора(if)*/

(function() {
    let lastName = prompt('Введите фамилию');
    let name = prompt('Введите имя');
    let surname = prompt('Введите отчество');
    let age = +prompt('Введите возраст (в годах)');
    let gender = confirm('Ваш пол мужской');
    let pensionStatus;
    let genderStatus;

    if (gender === true) {
        genderStatus = 'Мужской';
    } else {
        genderStatus = 'Женский';
    }

    if ((gender === true && age < 63) || (gender === false && age < 58)) {
        pensionStatus = 'нет';
    } else {
        pensionStatus = 'да';
    }

    // gender === true ? genderStatus = 'Мужской' : genderStatus = 'Женский';

    // (gender === true && age < 63) || (gender === false && age < 58) ? pensionStatus = 'нет' :
    //   pensionStatus = 'да';

    alert(`
    ваше ФИО: ${lastName} ${name} ${surname}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${age * 365}
    через 5 лет вам будет: ${age + 5}
    ваш пол: ${genderStatus}
    вы на пенсии: ${pensionStatus} `);
})();    
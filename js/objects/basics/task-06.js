/*Создать объект
const student = {
    address: {
        street: undefined, // предполагаем что значение возможено будет { name: "Any address" }
    },
};
и получить из него свойство name для улицы которое намернно отсутствует в объекте.
При получении не должно быть ошибки выводимой в консоль.*/

const student = {
    address: {
        street: undefined,
    },
};

console.log(student && student.address && student.address.street && student.address.street.name); //этот вариант у меня работает без ошибки
console.log(student.address.street?.name); //Этот вариант у меня почему-то выдает "SyntaxError: Unexpected token '.'"
/*Borrow Method - call / apply / bind.Создайте литерал объекта person со свойством name.
Вызовите метод work объекта employee из предыдущего задания.*/

const employee = {
    name: "Ann",
    work: function () {
        console.log(`I am ${this.name}. I am working...`);
    },
};

const person = {
    name: "John",
};

employee.work();

employee.work.call(person);
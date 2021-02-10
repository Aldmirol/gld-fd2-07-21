/*Решать как для браузера.Создайте функцию - конструктор Calculator, который создаёт объекты с четырьмя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
multiply() возвращает произведение введённых свойств.
history() возвращает историю вызванных функций при работе с объектом начиная с момента его создания.*/

function Calculator() {
    let historyList = [];

    this.read = function read() {
        this.firstVal = +prompt('Enter first value');
        this.secondVal = +prompt('Enter second value');

        historyList.push(this.read.name);
    };
    this.sum = function sum() {
        historyList.push(this.sum.name);

        return this.firstVal + this.secondVal;
    };
    this.multiply = function multiply() {
        historyList.push(this.multiply.name);

        return this.firstVal * this.secondVal;
    };
    this.history = function history() {
        historyList.push(this.history.name);

        return historyList;
    }

    this.read();
}

const calc = new Calculator();

console.log(calc.sum());

console.log(calc.multiply());

console.log(calc.history());
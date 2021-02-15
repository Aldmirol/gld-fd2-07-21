/*Создать функцию - конструктор Person() для конструирования объектов.Добавить два метода: setFirstName() и setLastName().
Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)*/

function Person() {
    this.setFirstName = function setFirstName(firstName) {
        this.firstName = firstName;

        return this;
    };

    this.setLastName = function setLastName(lastName) {
        this.lastName = lastName;

        return this;
    };
}

const getUserName = new Person();

getUserName.setFirstName('John').setLastName('Snow');

console.log(`${getUserName.firstName} ${getUserName.lastName}`);


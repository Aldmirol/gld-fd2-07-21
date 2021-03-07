/*Создать виртуальную рыбку, которая имеет свои координаты(например, в аквариуме) по x, y и z, у нее есть цвет, 
размер, она двигается, кушает, может размножаться.
У неё должно быть приватное поле содержащее многообразие еды которое она ест.При попытке скормить рыбке что - то, 
она должна выбрать только то, что она может скушать.
Создать вторую рыбку используя существующий класс(без наследования от первой рыбки), которая кушает на один продукт больше, 
чем оригинальная рыбка.
Продумать дополнительные методы и их реализацию(тут надо всё сделать чтоб работало, а не просто консоль - логи), 
которые позволят управлять такой рыбкой.*/

class VirtualFish {
    #ration = ['plankton', 'worm', 'larva'];
    constructor(options) {
        this.x = options.x;
        this.y = options.y;
        this.z = options.z;
        this.color = options.color;
        this.weight = options.weight;
        this.gender = options.gender;
    }

    moveForward() {
        this.x++;
    }

    float() {
        this.x = 10;
        this.y = 10;
        this.z = 10;
    }

    hideAway() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    eat(value) {
        if (this.#ration.includes(value)) {
            this.weight++;
            return console.log(`Yammy, its so tasty!`);
        } else {
            return console.log(`Brrr, i dont eat that!`);
        }
    }

    coupling(obj) {
        if (this.gender !== obj.gender) {
            let gender = this.gender;
            let color = this.color;

            if (Math.floor(Math.random() * (2 - 1 + 1)) + 1 === 1) {
                gender = obj.gender;
            }
            if (Math.floor(Math.random() * (2 - 1 + 1)) + 1 === 1) {
                color = obj.color;
            }

            const babyFish = new VirtualFish({
                x: this.x,
                y: this.y,
                z: this.z,
                color: color,
                weight: 1,
                gender: gender,
            });

            return babyFish;
        } else {
            return 'not today';
        }
    }

    set ration(value) {
        this.#ration.push(value);
    }

    get ration() {
        return this.ration;
    }
}

const carpMale = new VirtualFish({
    x: 1,
    y: 1,
    z: 1,
    color: "silver",
    weight: 20,
    gender: 'male',
});

const carpFemale = new VirtualFish({
    x: 1,
    y: 1,
    z: 1,
    color: "gold",
    weight: 25,
    gender: 'female',
});

const babyCarp = carpMale.coupling(carpFemale);

const crucian = new VirtualFish({
    x: 4,
    y: 3,
    z: 1,
    color: "green",
    weight: 1,
    gender: 'male',
});

console.log(carpFemale);
carpFemale.eat('crawfish');
carpFemale.float();
carpFemale.moveForward();
console.log(carpFemale);

console.log(carpMale);
carpMale.eat('plankton');
carpMale.hideAway();
carpMale.moveForward();
console.log(carpMale);

console.log(babyCarp);
babyCarp.eat('worm');
console.log(babyCarp);

console.log(crucian);
crucian.ration = 'crawfish';
crucian.eat('crawfish');
console.log(crucian);



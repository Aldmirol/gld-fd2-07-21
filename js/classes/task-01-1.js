/*Реализовать две оставшиеся иерархии в виде классов(которые вы не делали в классе).Придумать для каждого класса по 1 - 2 уникальных свойств, 
1 - 2 методов(методы можно не сильно реализовывать, а просто выводить что - то в консоль - лог внутри, чтобы знать, 
что он вызвался в какой - то момент) 
https: //docs.google.com/document/d/1gre7iEn1Iq-rstFlDrltCXxZvxaLlVtA8xtJmhzAjkA/edit?usp=sharing*/

class Shape {
    constructor(mold) {
        this.mold = mold;
    }

    checkMold() {
        return `My mold is ${this.mold}`;
    }
}


class Circle extends Shape {
    constructor(fill) {
        super('circle');
        this.fill = fill;
    }
}

class Rectangle extends Shape {
    constructor(name, diagonal) {
        super('Rectangle');
        this.name = name;
        this.diagonal = diagonal;
    }

    checkDiagonal() {
        return `My diagonal is ${this.diagonal}`;
    }
}

class Polygon extends Shape {
    constructor(angleCount) {
        super('Polygon');
        this.angleCount = angleCount;
    }

    checkAngleCount() {
        return `I have ${this.angleCount} angles`;
    }
}


class FilledCircle extends Circle {
    constructor(size) {
        super('blue');
        this.size = size;
    }

    checkFill() {
        return `My fill color is ${this.fill}`;
    }
}

class Squre extends Polygon {
    constructor(name) {
        super(4);
        this.name = name;
    }
}

class FilledPolygon extends Polygon {
    constructor(name, fill) {
        super(5);
        this.name = name;
        this.fill = fill;
    }

    checkFill() {
        return `My fill color is ${this.fill}`;
    }
}


class SizedCircle extends FilledCircle {
    constructor(name) {
        super('tiny');
        this.name = name; 
    }

    checkSize() {
        return `I have a ${this.size} size`;
    }
}

const lcdElement = new SizedCircle('Pixel');
const entertainmentThing = new Rectangle('TV', 55);
const toy = new Squre('Rubik\'s Cube');
const showplace = new FilledPolygon('Egyptian pyramid', 'Yellow');

console.log(lcdElement);
console.log(entertainmentThing);
console.log(toy);
console.log(showplace);


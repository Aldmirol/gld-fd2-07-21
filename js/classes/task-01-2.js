
class Transport {
    constructor(isCanMove) {
        this.isCanMove = isCanMove;
    }

    move() {
        return `I move!`;
    }
}


class RealyExisting extends Transport {
    constructor(movingEnvironment) {
        super(true);
        this.movingEnvironment = movingEnvironment;
    }

    checkIsItReal() {
        return `Yes, it's real, you can touch this!`;
    }
}

class Fairytail extends Transport {
    constructor(movingEnvironment) {
        super(true);
        this.movingEnvironment = movingEnvironment;
    }

    checkIsItReal() {
        return `No, it's not real, you can't touch this!`;
    }
}


class AirTransport extends RealyExisting {
    constructor(isItHasWings) {
        super('air transport');
        this.isItHasWings = isItHasWings;
    }

    checkIsItHasWings() {
        if (this.isItHasWings === true) {
            return `I have wings!`;
        } else {
            return `I haven't wings!`;
        }
    }
}

class LandTransport extends RealyExisting {
    constructor(name, wheelsCount, engineVolume) {
        super('land transport');
        this.name = name;
        this.wheelsCount = wheelsCount;
        this.engineVolume = engineVolume;
    }

    checkEngineVolume() {
        return `My engine volume is ${this.engineVolume} cubic centimeters`;
    }
}

class FairytailLandTransport extends Fairytail {
    constructor(name, isNeedToWear) {
        super('land transport');
        this.name = name;
        this.isNeedToWear = isNeedToWear;
    }

    fastMove() {
        return `I moving fast by magic!`;
    }
}

class FairytailAirTransport extends Fairytail {
    constructor(name, composition) {
        super('air transport');
        this.name = name;
        this.composition = composition;
    }

    checkComposition() {
        return `I'm made of ${this.composition}!`;
    }
}


class Helicopters extends AirTransport {
    constructor(name, bladesCount) {
        super(false);
        this.name = name;
        this.bladesCount = bladesCount;
    }

    takeOff() {
        return `I turn the propellers and take off vertically!`;
    }
}

class Airplanes extends AirTransport {
    constructor(name, maxRageOfFlight) {
        super(true);
        this.name = name;
        this.maxRageOfFlight = maxRageOfFlight;
    }

    takeOff() {
        return `I accelerate down the runway and take off!`;
    }
}


const uglyCar = new LandTransport('Fiat Multipla', 4, 1600);
console.log(uglyCar.move());

const combatHelicopter = new Helicopters('MI- 8', 3);
console.log(combatHelicopter.checkIsItHasWings());

const civilHelicopter = new Helicopters('KA- 26', 2);
console.log(civilHelicopter.takeOff());

const smallRangeAirplane = new Airplanes('AN- 24', 2700);
console.log(smallRangeAirplane.takeOff());

const longRageAirplane = new Airplanes('IL- 62', 10000);
console.log(longRageAirplane.checkIsItHasWings());

const emelysTransport = new FairytailLandTransport('Furnace', false);
console.log(emelysTransport.checkIsItReal());

const ivansTransport = new FairytailLandTransport('Seven- league boots', true);
console.log(ivansTransport.move());

const hagTransport = new FairytailAirTransport('Mortar', 'wood');
console.log(hagTransport.checkComposition());

const alladinsTransport = new FairytailAirTransport('Carpet Plane', 'whool');
console.log(alladinsTransport.checkComposition());
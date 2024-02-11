
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }


    accelerate() {
        this.speed += 10;

        console.log(this.speed);
    }

    decelerate() {
        this.speed -= 5;

        console.log(this.speed);
    }

    get speedUS() {
        return this.speed / 1.6;
        console.log(this.speed);
    }

    set speedUS(_speed) {
        this.speed = (_speed * 1.6)
        console.log(this.speed);
    }
}

const Ford = new CarCl('Ford', 120);

let i = Ford.speedUS;

console.log(i);






const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;

    console.log(this.speed);
}

Car.prototype.decelerate = function () {
    this.speed -= 5;

    console.log(this.speed);
}

const bmw = new Car('BMW', 120);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.decelerate();



const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`my name is ${this.firstName} and I study ${this.course}`)
}

const ben = new Student('Ben', 2015, 'CS');
ben.introduce();
ben.calcAge();


const ElectricCar = function (make, speed, currentBattery) {
    Car.call(this, make, speed);
    this.currentBattery = currentBattery;


}
ElectricCar.prototype = Object.create(ElectricCar.prototype);
ElectricCar.prototype.chargeBattery = function (chargeTo) {
    this.currentBattery = chargeTo;
};

const tesla = new ElectricCar('tesla', 100, 70);
tesla.chargeBattery(90);
console.log(tesla.currentBattery);
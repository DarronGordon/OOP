
// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }


//     accelerate() {
//         this.speed += 10;

//         console.log(this.speed);
//     }

//     decelerate() {
//         this.speed -= 5;

//         console.log(this.speed);
//     }

//     get speedUS() {
//         return this.speed / 1.6;
//         console.log(this.speed);
//     }

//     set speedUS(_speed) {
//         this.speed = (_speed * 1.6)
//         console.log(this.speed);
//     }
// }

// const Ford = new CarCl('Ford', 120);

// let i = Ford.speedUS;

// console.log(i);






// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;

//     console.log(this.speed);
// }

// Car.prototype.decelerate = function () {
//     this.speed -= 5;

//     console.log(this.speed);
// }

// const bmw = new Car('BMW', 120);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.decelerate();


// const ben = new Student('Ben', 2015, 'CS');
// ben.introduce();
// ben.calcAge();


// const ElectricCar = function (make, speed, currentBattery) {
//     Car.call(this, make, speed);
//     this.currentBattery = currentBattery;


// }
// ElectricCar.prototype = Object.create(Car.prototype);
// ElectricCar.prototype.chargeBattery = function (chargeTo) {
//     this.currentBattery = chargeTo;
// };

// const tesla = new ElectricCar('tesla', 100, 70);
// tesla.chargeBattery(90);
// console.log(tesla.currentBattery);



/// CLASS OOP ES
// class Person {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calaAge() {
//         console.log(2024 - this.birthYear);
//     }

//     get age() {
//         return 2024 - this.birthYear;
//     }

//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!?`);
//     }
//     get fullName() {
//         return this._fullName;
//     }
// }

// class Student extends Person {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);

//         this.course = course;
//     }

//     introduce() {
//         console.log(`Hi my name is ${this.fullName} and i study ${this.course}`);
//     }
// }

// const daz = new Student('Daz G', 1991, 'CS');

// daz.fullName = 'D Gords';

// daz.introduce();




// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }
// Person.prototype.calcAge = function () {
//     console.log(2024 - this.birthYear);
// }

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// };

// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function () {
//     console.log(`my name is ${this.firstName} and I study ${this.course}`)
// }


const Person = {
    calcAge() {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },

};



const StudentProto = Object.create(Person);
StudentProto.init = function (firstName, birthYear, test) {

    Person.init.call(this, firstName, birthYear);

    this.test = test;

};



const jay = Object.create(StudentProto);
jay.init('does work', 1899, 'testing');

jay.newestTesting = "LETS SEEEEE";

console.log(jay);
console.log(jay.test);
console.log(jay.newestTesting);




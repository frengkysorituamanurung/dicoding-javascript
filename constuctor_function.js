function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function () {
  console.log(`The ${this.brand} ${this.color} is driving.`);
};

Car.prototype.reverse = function () {
  console.log(`The ${this.brand} ${this.color} is reversing.`);
};

const myCar = new Car("Toyota", "red", 150, "123ABC");
myCar.drive();
console.log(myCar.chassisNumber);

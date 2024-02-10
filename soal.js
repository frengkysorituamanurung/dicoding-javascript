class Car { }
const car = new Car();
console.log(typeof Car);

function car({ brand, maxSpeed, wheelCount }) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    this.wheelCount = wheelCount;
  }
  
  const myCar = car({ brand: 'Toyota', maxSpeed: 200, wheelCount: 4 });
class Car{
    constructor(brand, color, maxSpeed, chasisNumber){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        // this.chasisNumber = chasisNumber;

        //set a random number chassis number
        this.chasisNumber = Math.floor(Math.random() * 1000);
    }
}

const car1 = new Car("Toyota", "Red", 200, "A1B2C3D4");
console.log(car1);
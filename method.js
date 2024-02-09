class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-$Math.floor(Math.random() * 1000))}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(_chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  drive() {
    console.log(`${this.brand} ${this.color} is driving}`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
}

class Mail {
  constructor(sender, receiver, subject, body, message) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
    this.message = message;
  }

  send() {
    console.log(`Message sent from ${this.sender} to ${this.receiver}.`);
    console.log(`Subject: ${this.subject}\nBody:\n${this.body}\n\nMessage:\n${this.message}`);
  }
}

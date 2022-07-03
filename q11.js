// What is the difference between module.exports and export?

// About module.exports: 
// When we want to export a single class/variable/function from one module to another module, we use module.exports way.

// Example: Create two file calculator.js and operation.js and export the Arithmetic class from calculator.js to operation.js using module.exports method. Here, we have created a class Arithmetic and exported the whole class using module.exports.

// Filename: calculator.js

class Artimatics {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
  
    add() {
        return this.a + this.b;
    }
    subtract() {
        return this.a - this.b;
    }
  
    multiply() {
        return this.a * this.b;
    }
  
    divide() {
        if (this.b != 0) {
            return this.a / this.b;
        }
        return "divided by zero !!!!";
    }
};
  
module.exports = Artimatics;

// Filename: operation.js

const Artimatics = require('./calculator.js');
  
const op = new Artimatics(100,40);
  
console.log(`Addition -> ${op.add()}`);
console.log(`subtraction -> ${op.subtract()}`);
console.log(`Multiplication -> ${op.multiply()}`);
console.log(`Division -> ${op.divide()}`);

// About exports:  
// When we want to export multiple variables/functions from one module to another, we use exports.

// Example: Create a two file calculator.js and operation.js and export multiple functions from calculator.js file. 

// Filename: calculator.js

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => {
    if (b != 0) {
        return a / b;
    }
    return `Divided by zero !!!`;
}

// Filename: operation.js

const Artimatics = require('./calculator.js');
  
console.log(`Addition -> ${Artimatics.add(100,40)}`);
console.log(`subtraction -> ${Artimatics.subtract(100,40)}`);
console.log(`Multiplication -> ${Artimatics.multiply(100,40)}`);
console.log(`Division -> ${Artimatics.divide(100,40)}`);
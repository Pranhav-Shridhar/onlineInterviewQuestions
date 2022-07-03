// Function hoisting in JSON

// JavaScript’s default behavior that allows moving declarations to the top is called Hoisting. The 2 ways of creating functions in JavaScript are Function Declaration and Function Expression. Let’s find out more about these:

// Function Declaration
// A function with the specific parameters is known as function declarations. To create a variable in JavaScript is called declarations.

// e.g:

hoisted(); // logs "foo"

function hoisted() {

  console.log('foo');

}

// Function Expression

// When a function is created by using an expression it is called function expression.

// e.g:

notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {

   console.log('bar');

};
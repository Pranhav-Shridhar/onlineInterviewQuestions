// What will happen if an infinite while loop is run in JS?

// An infinite loop, as the name suggests, is a loop that will keep running forever. If you accidentally make an infinite loop, it could crash your browser or computer. It is important to be aware of infinite loops so you can avoid them.

// A common infinite loop occurs when the condition of the while statement is set to true. Below is an example of code that will run forever. It is not necessary to test any infinite loops.

// infiniteLoop.js

// Initiate an infinite loop
// while (true) {
	// execute code forever
// }

// An infinite loop will run forever, but the program can be terminated with the break keyword.

// In the below example, we will add an if statement to the while loop, and when that condition is met, we will terminate the loop with break.

// polarBears.js

// Set a condition to true
const iceCapsAreMelting = true;
let polarBears = 5;

// Initiate infinite loop
while (iceCapsAreMelting) {
  console.log(`There are ${polarBears} polar bears.`);
  polarBears--;
  // Terminate infinite loop when following condition is true
  if (polarBears === 0) {
	console.log("There are no polar bears left.");
  	break;
  }
}

// When we run the code above, the output will be as follows.

// Output
// There are 5 polar bears.
// There are 4 polar bears.
// There are 3 polar bears.
// There are 2 polar bears.
// There are 1 polar bears.
// There are no polar bears left.

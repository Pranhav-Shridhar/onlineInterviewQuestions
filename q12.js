// How to import all exports of a file as an object?

// To import all exports from a file in JavaScript:

// Export all members you intend to import from file A.
// Import all the exports in file B as import * as myObj from './another-file'.
// Use the imported members as myObj.myFunction() in file B.

// another-file.js 

// To import all exports from a file in JavaScript:

// 👇️ all named exports
export const getEmployee = () => {
    return {id: 3, salary: 300};
  };
  
  export function getDeveloper() {
    return {name: 'James'};
  }
  
  export const department = 'front-end';

// index.js 

import * as company from './another-file.js';

const emp = company.getEmployee();
console.log(emp); // 👉️ {id: 3, salary: 300}

const dev = company.getDeveloper();
console.log(dev); // 👉️ {name: 'James'}

console.log(company.department); // 👉️ "front-end"
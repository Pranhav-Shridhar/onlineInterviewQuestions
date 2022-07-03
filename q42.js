// What is the difference between deep and shallow object copying in JS?

// Some differences are:

// Deep copy means copies all values or properties recursively in the new object whereas shallow copy copies only the reference.
// In a deep copy, changes in the new object don't show in original object whereas, in shallow copy, changes in new objects will reflect in the original object.
// In a deep copy, original objects do not share the same properties with new object whereas, in shallow copy, they do.

// Shallow copy:

var employeeDetailsOriginal = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };

var employeeDetailsDuplicate = employeeDetailsOriginal; //Shallow copy!

// Deep copy:

var employeeDetailsDuplicate = { name: employeeDetailsOriginal.name, age: employeeDetailsOriginal.age, Profession: employeeDetailsOriginal.Profession}; //Deep copy!
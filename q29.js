// Difference between the substr() and substring() functions in JavaScript.
// The substr() function has the form substr(startIndex,length). It returns the substring from startIndex and returns ‘length’ number of characters.

var s = 'hello';
console.log(s.substr(1,4));

// The substring() function has the form substring(startIndex,endIndex). It returns the substring from startIndex up to endIndex – 1.

console.log(s.substring(1,4));
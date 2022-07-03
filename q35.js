// How to clone an object in JS?

// Object.assign() method is used for cloning an object in Javascript.Here is sample usage

setTimeout(() => {
    console.log("Hello")
}, 3000);

var x = {myProp: "value"};
var y = Object.assign({}, x);
console.log(y);

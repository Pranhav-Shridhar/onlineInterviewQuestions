// How to calculate Fibonacci numbers in JS?

// Fibonacci numbers are a sequence of numbers where each value is the sum of the previous two, starting with 0 and 1. The first few values are 0, 1, 1, 2, 3, 5, 8, 13 ,…,

function fib(n){
    var a=0, b=1;
    for( var i=0;i<n;i++){
        var temp = a+b;
        a = b;
        b = temp;
    }
    return a;
}

console.log(fib(10));
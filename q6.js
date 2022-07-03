// Describe negative infinity in JS

// NEGATIVE_INFINITY property represents negative infinity and is a number in javascript, which is derived by ‘dividing negative number by zero’. It can be better understood as a number that is lower than any other number. Its properties are as follows:
// – A number of objects need not to be created to access this static property.
// – The value of negative infinity is the same as the negative value of the infinity property of the global object.

// The values behave differently than the mathematical infinity:

// Any positive value, including POSITIVE_INFINITY, multiplied by NEGATIVE_INFINITY is NEGATIVE_INFINITY.
// Any negative value, including NEGATIVE_INFINITY, multiplied by NEGATIVE_INFINITY is POSITIVE_INFINITY.
// Zero multiplied by NEGATIVE_INFINITY is NaN.
// NaN multiplied by NEGATIVE_INFINITY is NaN.
// NEGATIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is POSITIVE_INFINITY.
// NEGATIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is NEGATIVE_INFINITY.
// NEGATIVE_INFINITY, divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN.
// Any number divided by NEGATIVE_INFINITY is zero.

function geekNegativeInfinity() {
    //negative value greater than the 
    //largest representable number in JavaScript
    var n = (-Number.MAX_VALUE) * 2; 
    console.log(n);
}

geekNegativeInfinity();
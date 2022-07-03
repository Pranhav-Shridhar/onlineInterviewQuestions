// List different ways to empty an array in JS. 

// In Javascript, there are many ways to empty an array in Javascript, below we have listed 4 major

// By assigning an empty array.

var arr1 =[1,4,5,6];
arr1=[];

// By assigning array length to 0.

var arr2 =[1,4,5,6];
arr2.length=0;

// By poping the elements of the array.

var arr2 =[1,4,5,6];
while(arr.length > 0) {
    arr.pop();
}

// By using .splice() .

var arr =[1,4,5,6];
arr.splice(0,arr.length)
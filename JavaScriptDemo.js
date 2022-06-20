// JavaScript source code

// For Declare
var name = "Sudhir";
var age = 24;
var salary = 15000;

//For Print
console.log(name);
console.log(age);
console.log(salary);

var n = 1;
while (n < 10) {
    if (n % 2)
        console.log(n);
    else
        console.log(0);
    n++;
}

var IsValid = age > 18 ? "Valid" : "Not Valid";
console.log(IsValid);

/*---------------------------------------------Function------------------------------------------------------*/

// 1. Function without parameter and return type

function Addition() {
    var a = 10, b = 20;
    var c = a + b;
    console.log("Addition is : " + c);
}

// call to the function
Addition();

// 2. function with parameter 

function Substract(a, b) {
    var c = a - b;
    console.log("Substraction is : " + c)
}

Substract(25, 20);

// 3. function with parameter and return type

function Multiple(a, b) {
    var c = a * b;
    return c;
}

var result = Multiple(2, 4);
console.log("Multiplication is : " + result);

/*-------------------------------------------------Array-----------------------------------------------------*/

// For Array
var num = [10, 20, 30, 40];
var names = ["Sudhir", "Harshad", "Shubham", "Vinayak", "Omkar"];

/*for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}*/

// For add value to the end
names.push("Dhananjay");

// For add value to the first
names.unshift("Sanket");

// For remove last value
names.pop();

// For remove first value
names.shift();

// For add value inside 
names.splice(1, 0, "Dinesh", "Vishal");

// For replace value inside with index
names.splice(1, 3, "Dinesh", "Vishal");

// For create new array with copy of old array
// var names2 = names.slice(2);
var names2 = names.slice(2, 4);

// For Sorted order
names.sort();

// For Descending Order
names.reverse();

document.getElementById("d1").innerHTML = names;
document.getElementById("d2").innerHTML = names2;
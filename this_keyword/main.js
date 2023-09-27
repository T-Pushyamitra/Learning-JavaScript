"use strict"

console.log("Example for global 'this' keyword");

let x = this;
console.log(x); // with or without using strict mode it returns {}

console.log("Example for global 'this' keyword inside the function");

function thisFunction() {
    return this;
}

console.log(thisFunction()) // With strict mode it returns {} and without strict mode it returns undefined


console.log("Example for Explicit function binding using call() and apply()");

// Explicit Function Binding

// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.


const greeting = {
    greet: function() {
        return "Good Morning, " + this.lastName;
    }
};

const person = {
    firstName: "Pushyamitra",
    lastName: "Thammineni"
};

// Here we call greeting.greet with person as argument, 'this' refers to person, even if greet is a method of greeting. 
let message = greeting.greet.call(person);

console.log(greeting);
console.log(message);


const sayThankyou = {
    greet: function() {
        return "Good Morning, " + this.lastName;
    }
};

const person1 = {
    firstName: "Pushyamitra",
    lastName: "Thammineni"
};

// Here we call greeting.greet with person as argument, 'this' refers to person, even if greet is a method of greeting. 
let thankMessage = greeting.greet.call(person);

console.log(sayThankyou);
console.log(thankMessage);



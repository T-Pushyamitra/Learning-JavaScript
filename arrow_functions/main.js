
// Without arrow functions
const greet = function() {
    return "Good Morning"; // Returns "Good Morning"
}
console.log(greet());

// with arrow functions
const sayHi = () => {
    return "Hi there!"; // Returns "Hi there!"
}
console.log(sayHi());

// Few more examples of arrow functions
const sayHello = () =>  "Hi there!";  // Returns "Hi there!"
console.log(sayHello());

// Arrow functions with params
const greetWithParams = (greet, name) => `Good ${greet}, ${name}`; // Returns "Good Morning, Thammineni"
console.log(greetWithParams("Morning", "Thammineni")); 

const sayHiWithParams = name  => `Hi there, ${name}`; // Returns "Hi there, Thammineni"
console.log(sayHiWithParams("Thammineni"));


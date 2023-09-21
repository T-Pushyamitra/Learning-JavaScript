
// Immediately Invoked Function Expression Examples

// Example - 1
(function(a,b) {
    console.log(a + b); // Math operation
})(1, 2); // passing the parameters


// Example - 2
// Variable defined inside the function are not global

(function(name_of_user){
    const message = `Greeting, ${name_of_user}`;
})('Mitra');

console.log(message); // throws ReferenceError



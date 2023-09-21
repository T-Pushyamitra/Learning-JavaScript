// Calculator using IIFE

const calculator = (function(a, b){

    function add(a, b){ return a + b; }
    function mul(a, b){ return a * b; }
    function sub(a, b){ return a - b; }
    function div(a, b){ return (a == 0)? "Can't divide" : a/b; }

    return {
        add: add,
        mul: mul,
        sub: sub,
        div: div
    }
})();

let addition = calculator.add(1, 3);
let subtraction = calculator.sub(1,3);
let multiply = calculator.mul(3, 5);
let division = calculator.div(0, 4);

console.log("Addition: " + addition);
console.log("Subtraction: " + subtraction);
console.log("Multiply : "+ multiply);
console.log("Division : "+ division);
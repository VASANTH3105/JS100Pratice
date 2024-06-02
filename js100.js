const firstOrder = () => {
    console.log("I'm firsr order function");
}

const higherOrderFunction = (ReturnFirstOrderFunction) => {
    ReturnFirstOrderFunction();
}
higherOrderFunction(firstOrder);

//2
// unary function
// Accept single argument only

const unary = a => {
    console.log(`A is : ${a}`);
}

unary(10);

//IIFE- Immediately Invoked Function Expression
(function () {
    var message = 'Hello';
    console.log(message);

    }
)
();

//Memoization

console.log(msg);
var msg = "This is Hoisting"; //undefined

var msg;
console.log(msg);
msg = "This is Hoisting";

//memoization

const memoizAddition = () => {
    let cache = {};

    return (value) => {
        if(value in cache) {
            console.log("Returning from cache");
            return cache[value];
        } else {
            console.log("Calculating result");
            let result = 20 + value;
            cache[value] = result;
            return result;
        }
    }
}

const addition = memoizAddition(20);
console.log(addition);
console.log(addition);

//setinterval

// setInterval(function() {
//     console.log("Interval time");
// }, 2000);

//JSON

var nameJSON = {
    'name' : 'SV',
    'age' : 20
}

console.log(nameJSON);
var string = JSON.stringify(nameJSON);
console.log(string);

var partoobj = JSON.parse(string);
console.log(partoobj);
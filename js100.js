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
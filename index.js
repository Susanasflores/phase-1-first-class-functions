//The receivesAFunction function should://
//take a callback function as an argument
//call the callback function//
//it doesn't matter what this function returns,//
//so long as it calls the callback function//

const callback = () => {
    // code to be executed
    return 1 + 1 
}
const receivesAFunction = (callback) => {
    return callback();
};

//next error//

const returnsANamedFunction = () => {
    function namedFunction() {
    return "Hello world"
}
return namedFunction;
}
const namedFunction = () => {
    return "Hello world"
}
function returnsAnAnonymousFunction() {
    return function() {
    1 + 1
    }
}



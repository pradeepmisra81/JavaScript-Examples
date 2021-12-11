welcome();

function welcome() {
    console.log('Welcome to JavaScript World!');
}


var anonymousWelcome = function() {
    console.log('Welcome to anonymous World!');
}

anonymousWelcome();

var welcome = () => {
    console.log('Welcome!');
}

welcome();

function printTheObject(x) {
    console.log(x);
}

printTheObject(function() {
    console.log('Welcome');
});

function callFunctionInsideFunction(x) {
    x();
}

callFunctionInsideFunction(function() {
    console.log('Welcome');
});
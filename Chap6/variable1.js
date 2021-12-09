function testVar() {
    console.log('function start');
    var x1 = 10;
    let x2 = 20;
    console.log(x1);
    console.log(x2);
    console.log('function end');
}


testVar();

console.log('Start');
console.log(x1);// Error : Uncaught ReferenceError: x1 is not defined
console.log(x2);// Error : Uncaught ReferenceError: x2 is not defined
console.log('End');
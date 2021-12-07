function y() {
    var var1;
    console.log(var1);
}

function x() {
    var var1 = 10;
    console.log(var1);
    y();
}

var var1 = 21;
console.log(var1);
x();
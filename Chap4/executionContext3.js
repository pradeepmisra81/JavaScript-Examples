function x() {
    console.log(var1);
    function y() {
        console.log(var1);
    }
    y();
}

var var1 = 11;
console.log(var1);
x();
console.log(var1);
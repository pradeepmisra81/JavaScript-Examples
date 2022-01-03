function funcX() {
    console.log(this);
    this.newVariable = "global variable";

}


var y = function() {
    console.log(this);
}


funcX();

console.log(newVariable);


y();
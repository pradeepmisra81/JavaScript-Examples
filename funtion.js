function Test(firstname,lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log(this);

}

Test.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}
var ram = new Test('ram','kumar');
console.log(ram);
console.log(ram.__proto__);
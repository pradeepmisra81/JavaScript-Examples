var w = 10;
var x ;
x = w;

console.log(w);
console.log(x);
console.log('_________________________________________');

x = 15;

console.log(w);
console.log(x);
console.log('_________________________________________');

var y = { welcomeMessage: "Suswagatam"};
var z;

z = y;

console.log(y);
console.log(z);
console.log('_________________________________________');

y.welcomeMessage = "Swagat hai !";

console.log(y);
console.log(z);
console.log('_________________________________________');


function changeWelcomeMessage(obj) {
    obj.welcomeMessage = "Swagatam";
}

// on changaing valued in z, y should also be changed , because y and z are pointing to same memory location
changeWelcomeMessage(z);

console.log(y);
console.log(z);
console.log('_________________________________________');

// new memory location is assigned to y 
y = { welcomeMessage: 'aapka swagar hai !'};
console.log(y);
console.log(z);
console.log('_________________________________________');
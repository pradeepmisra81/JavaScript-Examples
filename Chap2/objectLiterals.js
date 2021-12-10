var Ram = {
    firstname: 'Ram',
    lastname: 'Kumar',
    address: {
        street: 'Sen Gupta Street',
        city: 'Coimbatore',
        state: 'Tamilnadu'
    }
};

function greet(person) {
    console.log('Hi, ' + person.firstname);
}

greet(Ram);

greet({
    firstname: 'Sujay',
    lastname: 'Kumar'
});

Ram.isAWebDeveloper = true;

console.log(Ram);
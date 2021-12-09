var objectLiteral = {
    firstname: 'Ram',
    isAWebDeveloper: true
}

console.log(JSON.stringify(objectLiteral));
// output: {"firstname":"Ram","isAWebDeveloper":true}


var jsonValue = JSON.parse('{"firstname":"Ram","isAWebDeveloper":true}');
console.log(jsonValue);
// long running function
function waitfiveseconds() {
    var ms = 5000 + new Date().getTime();
    while( new Date() < ms){}
    console.log('Finished function');

    
}

function clickHandler() {
    console.log('click event!');
}


// listen for the click event
document.addEventListener('click', clickHandler);

waitfiveseconds();
console.log('Finished execution');
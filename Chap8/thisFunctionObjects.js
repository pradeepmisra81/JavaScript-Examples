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

var zObj1 = {

    name1: "The zObj1 Object",
    log1: function() {
        this.name1 = "The updated zObj1 Object";
        console.log(this);

        var setname1 = function(newname1){
            this.name1 = newname1;
        }

        setname1("Updated again , the zObj1 Object");
        console.log(this);
    }

}

var zObj2 = {

    name2: "The zObj2 Object",
    log2: function() {
        var self2 = this;
        self2.name2 = "The updated zObj2 Object";
        console.log(self2);

        var setname2 = function(newname2){
            self2.name2 = newname2;
        }

        setname2("Updated again , the zObj2 Object");
        console.log(self2);
    }

}

zObj1.log1();

console.log("_______________________________________________");

zObj2.log2();
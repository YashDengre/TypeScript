"use strict";
exports.__esModule = true;
exports.Person = void 0;
//Module: 
//Export the class or code so that we cna import in other files. 
//When we are importing any class - it measn we are executing that class/code
//see Intermediate_Progress_Support.ts
var Person = /** @class */ (function () {
    function Person(fname, lName) {
        this.firstName = fname;
        this.lastName = lName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
var personObj = new Person("Yash", "Dengre");
console.log(personObj.getFullName());

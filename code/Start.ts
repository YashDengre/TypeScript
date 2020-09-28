
console.log("Hello World!");

function  welcomePerson(person:Person): string{
    console.log("hey" + person.firstName + person.lastName);
        return 'hey ${person.firstName} ${person.lastName}'
    //return 15 incorrect
}

const per = {
    firstName : "Yash",
    lastName : "Dengre"
}
welcomePerson(per); //correct
//welcomePerson(''); //incorrect

interface Person {
    firstName: string,
    lastName: string
}
var x= 10;
var n = "";
var xa=10.32;
var list : number [] = [1,23]
var g = [1,23]
var h =  true; 
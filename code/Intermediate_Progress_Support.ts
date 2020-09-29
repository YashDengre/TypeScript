//Module: 
//Export the class or code so that we cna import in other files. 
//When we are importing any class - it measn we are executing that class/code
import {Person} from './Intermediate_Progress';

class Admin extends Person {

}
class Manager extends Person {

}
let admin =  new Admin("Admin","Admin");
let manager = new Manager("Manager","Manager");
console.log("admin: "+admin.getFullName())
console.log("manager: "+manager.getFullName())

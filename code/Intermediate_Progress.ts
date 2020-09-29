//Module: 
//Export the class or code so that we cna import in other files. 
//When we are importing any class - it measn we are executing that class/code
//see Intermediate_Progress_Support.ts
export class Person
{
    firstName:string;
    lastName:string;
    constructor(fname:string,lName:string)
    {
        this.firstName = fname;
        this.lastName =lName;
    }
    getFullName()
    {
        return this.firstName + " " + this.lastName;
    }
}
var personObj = new Person("Yash","Dengre");
console.log(personObj.getFullName());


//Namespcae : it is also a logical grouping of code.
//we can define multiple namespace in single file or multiple namespace in mulitple file

namespace AppModel
{
    //need to use export for exporting otherwise it will be private and we will not be able to use it outside.
    export interface ToDo
    {
        id:number;
        description:string;
    }
}
namespace AppModel_New
{
 import ToDoModel =  AppModel;
 interface User {
     id:string;
     todo:ToDoModel.ToDo;
     name:string;
 }

}
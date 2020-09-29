// Generics
/*
Generics are templates allowing the same function to accept arguments of various different types.
Generics create the components that are capable of working over data of present and future. 
It gives us the most dynamic capabilities for developing real time large scale software systems. 
C# and Java use generics enabling us to create a component that can work over a variety of types rather than a single one.
*/
//You can implement Generics by writing "T" instead of any specific data type like- number, boolean etc. as shown below.

function calVolumeCube<T>(side: T): T{
    return side*side*side;
}

//To explicitly define type of arguments in function call, you can use <> (angular brackets) as shown below.
let volume1 = calVolumeCube <number> (5);
//Else compiler will decide the type based on argument you pass as shown below
let volume2 = calVolumeCube (5);
console.log(volume1 + " : "+volume2);
//"T" is used to capture type sent by user.

let retunrArray = <T>(input : T) =>
{
return [input,input,input];
}
let output1 = retunrArray<number>(10);
//let output2 = retunrArray<number>("Name"); // not allowd by TS compiler
let output3 = retunrArray<string>("Yash");
//let output4 = retunrArray<string>(10); //not allowed by TS compiler
let output5 = retunrArray<any>(10) //allowed because we have used any type
let output6 = retunrArray<any>("Yash Dengre") //allowed becase we have used any type
console.log("output1: "+output1+ "\noutput3: "+output3 + "\noutput5: "+output5+"\noutput6: "+output6);

//Enums : rstore related values.
enum myConstants {
    pi =3.14,
    e=2.73,
    log2 = 0.3,
    log5 =0.7
}

console.log("Finding circumference of circle");
let radius : number = 10;
console.log(2* myConstants.pi * radius);
//myConstants.pi = 3.15 ;// we can not modified the values 

//Some Example: Hello world!
class Greet<T>
{
    greeting : T;
    constructor (greeting : T)
    {
        this.greeting = greeting;
    }
    greet()
    {
        return "<h1>"+this.greeting+"</h1>"
    }
}
var greeter =  new Greet<string>("Hello World");
document.body.innerHTML = greeter.greet();
//Following is a function to calculate Volume Of Cube and display result in web page.
function volumeOfCube(length:number, widht:number, height:number) : string
{
    let volume =  length * widht * height;
    return "Volume of the cube is : "+ volume
}
document.body.innerHTML = document.body.innerHTML + "<br> : <h2>"+volumeOfCube(10,20,30)+"</h2?";
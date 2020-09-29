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
//document.body.innerHTML = greeter.greet();
//Following is a function to calculate Volume Of Cube and display result in web page.
function volumeOfCube(length:number, widht:number, height:number) : string
{
    let volume =  length * widht * height;
    return "Volume of the cube is : "+ volume
}
//document.body.innerHTML = document.body.innerHTML + "<br> : <h2>"+volumeOfCube(10,20,30)+"</h2?";

//Classes:
class Student
{
    name:string;    
}
var classObject =  new Student();
classObject = {
    name : "Yash Dengre"
}
// class Websites
class WebSites {
    url :string;
    facebookLikes:number;
}
var google = new WebSites();
google.url = "https://gooogle.co.in";
google.facebookLikes - 12345;

//Class:' Strudents with private and public scope of variable in TypeScript
// by default it is public:
class Strudents{
    private firstName : string ;//private member
    private lastName : string; //private member
    yearofBirth : number ; //by default public scope
    schoolName:string;
    public city : string;
    constructor(fisrtName:string,lastName:string,dob:number,schoolName:string, city:string)
    {
this.firstName =fisrtName;
this.lastName =lastName;
this.yearofBirth = dob;
this.schoolName = schoolName;
this.city =city;
    }
    age()
    {
        return 2020 - this.yearofBirth + "Current Age"
    }
    printStudentFullName():void
    {
alert("Name: "+this.firstName + " "+this.lastName);
    }
}

//Class : ANimal
abstract class Animal { //created this as abstract.
    private name : string;
    constructor (theName:string)
    {
        this.name = theName;
    }
    walk(distance:number)
    {
        console.log("Hi my name is "+this.name + " and I am walking " + distance + " meter");
    }
    }
    //let myAnimal =  new Animal("Dave");//this won't be allowed any more
    //myAnimal.walk(78);

    //extend aor inheritance:

    class Snake extends Animal{ //this will be allowed
        constructor(theName : string){
            super(theName)
        }
        walk(distance:number)
        {
            console.log("Snake don't really walk");
        }
    }
    //but Animal class should not be directly instantiated because Animla is type - we have to define what animal it so we need to make it onlt extensible 

    //Interfaces:
    //They allow- declare how a function should behave
/*
function operate(x:{shape:string, side:number})
{
    return x.side*x.side;
}*/

//var calc =  operate({shape:"sqaure",side:5});
//   for above method we can create interface
interface operateInterface {
    shape?:string;
    side:number;
}
function operate(x:operateInterface)
{
    return x.side*x.side;
}
var calc2 = operate({shape:"sqaure",side:5});

//Interface helps in detecting error in compile time.

	interface Volume {
		length: number;
		width: number;
		sayHi: () => string;
	}
	//Volume binding object Physics to define all members as specified by interface 
	var Physics: Volume = {
		length: 10,
		width: 10,
		sayHi: (): string => { return "Hello" }
	}
class ImplementInterfaceVolume implements Volume
{
    length: number = 10;
    width:number = 140;
    sayHi():string{
        return "Hello"
    }
}

interface Player {
    run(): void;
    addLives(n:number):void;
    score():number;
}
function createPlayer():Player
{//whatever it should return it should be comptible with interface
    return {
        run:function(){},
        addLives:function(n:number){},
        score:function(){return-1}

    }
}
var player1 = createPlayer();

//Question Create a class  Restaurant with menu property and a function to display menu into console.
class Restaurant
{
    public menu:string[];
    constructor(menu:string[])
    {
        this.menu = menu;
    }
    list():void
    {
        console.log (this.menu);
    }
}
var objectO =  new Restaurant(["dosa","idly","sambhar"]);
objectO.list();

//Inheritacne:
class Person{
    // constructor()
    // {
    //     console.log( "Person Constructor");
    // }
    constructor(name:string)
    {
        console.log( name+"Person Constructor");
    }
    getID()
    {
           return 10;
    }
}
class Employee extends Person
{

    // constructor()
    // {
    //     console.log( "PEmployee Constructor");
    // }
    constructor(name:string)
    {
        super(name);
        console.log( name+"Employee Constructor");
    }
    getID()
    {
        //return 5;
        return super.getID();
    }
}

//multiple constructor are not allowed in TypeScript
//let objOfEmployee1 = new Employee(); //it will direclt call the constructor of parent class
//even we have not defined any in the child class
let objOfEmployee2 = new Employee("Yash");//even when we ahve provided the paramter construcor
//what if we define the constructor in chlid class also then
//we need to call the constructor of parent in child first by super(); otherwise compiler will give error
//if only parent class contain the method that we are calling then it will directly call ths method from paraent class
console.log(objOfEmployee2.getID());
//what if we wanted to use method of child class then in child class we need to call the method of parent
// by super -> return super.getID();

//Question Create Class Human and Employee , employee should return name and department but name should b in Human class.

class Human
{
    protected name:string;
    constructor(theName:string)
    {
        this.name = theName;
    }

}
class Employees extends Human{
    private department:string;
    constructor(theName:string,theDepartment:string)
    {   super(theName);
        this.department = theDepartment;
    }
    getInfo()
    {
        console.log("Name of the Employee: "+this.name + "\nDepartment of the Employee: "+this.department);
    }
}

let EmployeeObject =  new Employees("Yash Dengre","Computer/IT");
EmployeeObject.getInfo();

//Polymorphism  - Overloading:
//Overloading is possible in TypeSscript 
//See the below example:
class Length
{
    Length(length: number);
    Length(length:string);
    Length(value: any) {
    if (value && typeof value == "number") {
    alert("overload 1");
    }
    if (value && typeof value == "string") {
    alert("overload 2");
    }
    }
}

//In wide picture: overloading does provide a security and ensurity that correct method is called for correct requirement
//overloading is just a check on typescript - won't complied in JS
function areaOfQuad(side1:number):any;
function areaOfQuad(side1:number,side2:number):any;
function areaOfQuad(side1:number,side2:number,side3:number):any;
function areaOfQuad(side1:number,side2?:number,side3?:number,side4?:number):any;
function areaOfQuad(side1:number,side2?:number,side3?:number,side4?:number):any
{
    if(side2 === undefined && side3===undefined && side4 == undefined)
    {
        return side1*side1;
    }
    else if(side3 === undefined && side4 === undefined)
    {
        return side1*side2;
    }
    else if(side4!== undefined)
    {
        return("area of trapezium");
    }
   
    
}

// function areaOfQuad()
// {

// } 
areaOfQuad(1); //for square
areaOfQuad(1,2) // rectangle
areaOfQuad(1,2,3,4) //trapezium
areaOfQuad(1,2,3)//wont allow because we have not overloaded for this option
console.log(areaOfQuad(2));
console.log(areaOfQuad(2,4));
console.log(areaOfQuad(2,4,8));
console.log(areaOfQuad(2,4,8,16));
/*Polymorphism - Overriding
Method Overriding is a mechanism by which the child class redefines the superclass’s method.
The following code snippet will demonstrate how:*/

class PrinterClass { 
   doPrint():void {
      console.log("doPrint() from Parent called…") 
   } 
} 

class StringPrinter extends PrinterClass { 
   doPrint():void { 
      super.doPrint() 
      console.log("doPrint() is printing a string…")
   } 
} 

var obj = new StringPrinter() 
obj.doPrint()

/*
Create a class "Automobile" that has two protected properties and a method:

    fuelType: "petrol";
    price
    printInfo(): displays "I am autombile" in console Now create another class "Car" which extends the above class and has two functions
    constructor: this initializes "price"
    printInfo: displays Fuel type and price of that object in //overriding function

Create object of type Car and call function "printInfo".
*/
//Solution: 
class Automboile
{
    protected fuelType:string;
    protected price:number;
    printInfo()
    {
        console.log("I am automobile");
    }
    constructor(theprice:number)
    {
        this.price = theprice;
        this.fuelType = "Petrol";
    }

}
class Car extends Automboile{
    constructor(theprice:number)
    { 
        super(theprice);
    }
    printInfo()
    {
        super.printInfo();
        console.log("Fuel Type: "+this.fuelType + "\nPrice of Fuel: "+this.price);
    }
}

let carOb =  new Car(75);
carOb.printInfo();


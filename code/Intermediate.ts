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
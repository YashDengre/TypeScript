// Generics
/*
Generics are templates allowing the same function to accept arguments of various different types.
Generics create the components that are capable of working over data of present and future.
It gives us the most dynamic capabilities for developing real time large scale software systems.
C# and Java use generics enabling us to create a component that can work over a variety of types rather than a single one.
*/
//You can implement Generics by writing "T" instead of any specific data type like- number, boolean etc. as shown below.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function calVolumeCube(side) {
    return side * side * side;
}
//To explicitly define type of arguments in function call, you can use <> (angular brackets) as shown below.
var volume1 = calVolumeCube(5);
//Else compiler will decide the type based on argument you pass as shown below
var volume2 = calVolumeCube(5);
console.log(volume1 + " : " + volume2);
//"T" is used to capture type sent by user.
var retunrArray = function (input) {
    return [input, input, input];
};
var output1 = retunrArray(10);
//let output2 = retunrArray<number>("Name"); // not allowd by TS compiler
var output3 = retunrArray("Yash");
//let output4 = retunrArray<string>(10); //not allowed by TS compiler
var output5 = retunrArray(10); //allowed because we have used any type
var output6 = retunrArray("Yash Dengre"); //allowed becase we have used any type
console.log("output1: " + output1 + "\noutput3: " + output3 + "\noutput5: " + output5 + "\noutput6: " + output6);
//Enums : rstore related values.
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.73] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
    myConstants[myConstants["log5"] = 0.7] = "log5";
})(myConstants || (myConstants = {}));
console.log("Finding circumference of circle");
var radius = 10;
console.log(2 * myConstants.pi * radius);
//myConstants.pi = 3.15 ;// we can not modified the values 
//Some Example: Hello world!
var Greet = /** @class */ (function () {
    function Greet(greeting) {
        this.greeting = greeting;
    }
    Greet.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greet;
}());
var greeter = new Greet("Hello World");
//document.body.innerHTML = greeter.greet();
//Following is a function to calculate Volume Of Cube and display result in web page.
function volumeOfCube(length, widht, height) {
    var volume = length * widht * height;
    return "Volume of the cube is : " + volume;
}
//document.body.innerHTML = document.body.innerHTML + "<br> : <h2>"+volumeOfCube(10,20,30)+"</h2?";
//Classes:
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var classObject = new Student();
classObject = {
    name: "Yash Dengre"
};
// class Websites
var WebSites = /** @class */ (function () {
    function WebSites() {
    }
    return WebSites;
}());
var google = new WebSites();
google.url = "https://gooogle.co.in";
google.facebookLikes - 12345;
//Class:' Strudents with private and public scope of variable in TypeScript
// by default it is public:
var Strudents = /** @class */ (function () {
    function Strudents(fisrtName, lastName, dob, schoolName, city) {
        this.firstName = fisrtName;
        this.lastName = lastName;
        this.yearofBirth = dob;
        this.schoolName = schoolName;
        this.city = city;
    }
    Strudents.prototype.age = function () {
        return 2020 - this.yearofBirth + "Current Age";
    };
    Strudents.prototype.printStudentFullName = function () {
        alert("Name: " + this.firstName + " " + this.lastName);
    };
    return Strudents;
}());
//Class : ANimal
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("Hi my name is " + this.name + " and I am walking " + distance + " meter");
    };
    return Animal;
}());
//let myAnimal =  new Animal("Dave");//this won't be allowed any more
//myAnimal.walk(78);
//extend aor inheritance:
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(theName) {
        return _super.call(this, theName) || this;
    }
    Snake.prototype.walk = function (distance) {
        console.log("Snake don't really walk");
    };
    return Snake;
}(Animal));
function operate(x) {
    return x.side * x.side;
}
var calc2 = operate({ shape: "sqaure", side: 5 });
//Volume binding object Physics to define all members as specified by interface 
var Physics = {
    length: 10,
    width: 10,
    sayHi: function () { return "Hello"; }
};
var ImplementInterfaceVolume = /** @class */ (function () {
    function ImplementInterfaceVolume() {
        this.length = 10;
        this.width = 140;
    }
    ImplementInterfaceVolume.prototype.sayHi = function () {
        return "Hello";
    };
    return ImplementInterfaceVolume;
}());
function createPlayer() {
    return {
        run: function () { },
        addLives: function (n) { },
        score: function () { return -1; }
    };
}
var player1 = createPlayer();
//Question Create a class  Restaurant with menu property and a function to display menu into console.
var Restaurant = /** @class */ (function () {
    function Restaurant(menu) {
        this.menu = menu;
    }
    Restaurant.prototype.list = function () {
        console.log(this.menu);
    };
    return Restaurant;
}());
var objectO = new Restaurant(["dosa", "idly", "sambhar"]);
objectO.list();
//Inheritacne:
var Person = /** @class */ (function () {
    // constructor()
    // {
    //     console.log( "Person Constructor");
    // }
    function Person(name) {
        console.log(name + "Person Constructor");
    }
    Person.prototype.getID = function () {
        return 10;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // constructor()
    // {
    //     console.log( "PEmployee Constructor");
    // }
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + "Employee Constructor");
        return _this;
    }
    Employee.prototype.getID = function () {
        //return 5;
        return _super.prototype.getID.call(this);
    };
    return Employee;
}(Person));
//multiple constructor are not allowed in TypeScript
//let objOfEmployee1 = new Employee(); //it will direclt call the constructor of parent class
//even we have not defined any in the child class
var objOfEmployee2 = new Employee("Yash"); //even when we ahve provided the paramter construcor
//what if we define the constructor in chlid class also then
//we need to call the constructor of parent in child first by super(); otherwise compiler will give error
//if only parent class contain the method that we are calling then it will directly call ths method from paraent class
console.log(objOfEmployee2.getID());
//what if we wanted to use method of child class then in child class we need to call the method of parent
// by super -> return super.getID();
//Question Create Class Human and Employee , employee should return name and department but name should b in Human class.
var Human = /** @class */ (function () {
    function Human(theName) {
        this.name = theName;
    }
    return Human;
}());
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees(theName, theDepartment) {
        var _this = _super.call(this, theName) || this;
        _this.department = theDepartment;
        return _this;
    }
    Employees.prototype.getInfo = function () {
        console.log("Name of the Employee: " + this.name + "\nDepartment of the Employee: " + this.department);
    };
    return Employees;
}(Human));
var EmployeeObject = new Employees("Yash Dengre", "Computer/IT");
EmployeeObject.getInfo();

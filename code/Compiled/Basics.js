//Declaring Variables
var num1 = 10; //implict type : number
var num2 = 10; //explictly defining type : number
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var array3 = [1, 2, 3, 'name'];
var array4 = [1, 2, 3, 'name'];
var bool_var1 = true;
var bool_var2 = true;
//var bool_var3 : boolean = 'false' // not allowed - compiler will give error but it will compile and  we need to indetify in TS itself so that our JS will not be affected
//funciton
//x, y -define as a number and  third number means it will return a number type.
var Add_Two = function (x, y) { return x + y; };
//with optional parameter
//We can define optional parameter by adding “?” so that anyone calling that function may or may not pass value for that variable. 
//Optional parameters do not exist in JavaScript and hence those will not be handled.
var Add_Three = function (x, y, z) {
    if (z != null) {
        return x + y + z;
    }
    return x + y;
};
//default value
//we are not required to pass the value
var Add_default = function (x, y, z) {
    if (z === void 0) { z = 20; }
    return x + y + z;
};
var point_2D = { x: 10, y: 20 }; // correct
//var point_2d : Point2D = {x:10,y:"name"} //incorrect - compiler will not allow thhs because y is type of number
function Add_number(num1, num2) {
    return num1 + num2;
}
console.log(Add_number(10, 20)); //correct
//console.log(Add_number('10',20)) //incorrect - num1 is type of number so compiler will not allow
//Below function will allow string and num
function Add_number_string(num1, num2) {
    if (typeof (num1) == "string") {
        if (isNaN(parseInt(num1, 10))) {
            return 0;
        }
        num1 = parseInt(num1, 10);
    }
    return num1 + num2;
}
console.log(Add_number_string("10", 20)); //correct
var array_any = [1, 2, 3, "Yash", true, false, 10.25, null, undefined];
//any :  can take any type of vaue, which denotes dynamic type
/*Create a function "arrLength" that takes string array as input, calculate number of elements present in it and return it.
Use the function to find out the length of the array ["hi", "there"] and [1,5,4].
Define proper types as and when required.*/
function arrLength(arrayInp) {
    var len_of_Array = arrayInp.length;
    return len_of_Array;
}
console.log(arrLength(["Name", "City", "Mobile", "Education", "JOB"]));

// data ko kis basis me memory me rakha jata hai aur access kiya jata hai,
// us basis me data ka do type me classification hai - primitve and non-primitive
// primitive 

// 7 types : String , Number , Boolean , null, undefined , Symbol, bigint

// JavaScript is a *dynamically typed language*. 
// This means that variable types are determined at runtime, and you do not need to
// explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime.

const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsidetemp = null


const id = Symbol('123');
const id2 = Symbol('123');

//console.log(id === id2);

const bignumber = 497847496464756435876846346386

// Refernce (non primitive)

// Array, Objects, Functions

const heroes = ["shaktimaan", "naagraj", "doga"]
let myobj = {
    name: "anagh",
    age : 20,
}
//{} curly braces ke andar jitna bhi hai woh object hai

//declare functionn by variable
const myfunction = function(){
    console.log("hello world");
}

//kisi ka data type kese pata kare 
//console.log(typeof bignumber);
//null ka typeof se data type --> "object" hoga
// undefined ka typeof se data type --> undefined hoga
console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isloggedin);
console.log(typeof outsidetemp);
console.log(typeof id);
console.log(typeof id2);
console.log(typeof bignumber);
console.log(typeof heroes);
console.log(typeof myobj);
console.log(typeof myfunction);
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/



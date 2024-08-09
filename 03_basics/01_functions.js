// function ka matlab hai jo bhi apne code likha hai uskp ek package me band kar diya hai woh package aap ja chahe waha uthake uski copy le ja skate ha
//console.log("A");
//console.log("N");
//console.log("A");
//console.log("G");
//console.log("H");
// is tarah toh bahut time la jayega

function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("G");
    console.log("H");
}

//sayMyName() // agar function ko aise likhoge toh aap bata rahe ho ki yeh uska reference hai

// function addTwoNumbers(number1, number2){ // this is called function defintion isme jo bhi input lete hainnusko bolte hai parameters
//     console.log(number1 + number1); // aur yah pe use hue hai arguments
    
// }
function addTwoNumbers(number1, number2){ // this is called function defintion isme jo bhi input lete hainnusko bolte hai parameters
    // let result = number1 + number2 // yaha pe jo result use hai uske scope ki baadt ham karenge
    // return result
    //console.log("ahbfn");// yeh kabhi bhi execute nahi hoga kyuki by ddfault function me ek rule hota hai ki jb apne ek baar function se return kardiya uke baad woh koi kam nahi karega
    // dusra tarika likhne ka : direct hi return kardo
    return number1 + number2
}

const result = addTwoNumbers(7,4)

//console.log("Result: ", result);

function loginusermessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//loginusermessage("anagh") // abhi tak koi print nahi hoga kyuki return toh kardiya usne lekin print karne thodi bola

//console.log(loginusermessage("anagh"));
//what if agar koi value hi pass nahi kari , tab kya aata?

//console.log(loginusermessage()); // undefined just logged in

// yah phir pe ek aur chiz kar sakte hai for eg appko woh case consider hi nahi karna ki value undefined aaye toh 
//line no. 35 me function loginusermessage(username = "xyz") toh is case agar aap kuch bhi value nahi dalte toh likhkar aayega xyz just logged in 
// aur agar koi value de di hai toh us value ko overwrrite kar dega


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// functions with objects and arrays in javascript

function calculateCartPrice(...num1/*rest operator*/){
    return num1
}

console.log(calculateCartPrice(200,400,500)); // keval 200 hi aata hai toh isliye hame num1 me aage ... lagayenge isko yaha par rest operator bolenege na ki spread operator use case ki wajah se different naam pade hai
// toh muje ek array milega]


const user = {
    username: "anagh",
    price: 199
}

function HandleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//HandleObject(user) //: yeh bhi ek tarika but dusra tarika hai : -
HandleObject({
    username: "sam",
    price: "299" 
}) 
// toh jaruri nahi hai ki kisi user data type ko define kare

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100,200,300,400]));



















let a = 1000
const b =203
// var c = 30
// Scope determines where variables are accessible and how long they exist in a program.
if (true) {
    let a = 10
    const b =20
    //console.log("inner : ",a);
    
    //var c = 30
    // in memory variables ko jo declare kiya unka scope line 5 se leeke 10 tak hi hai
}

//if ke andar jo bhi hai yeh hai pura block scope aur iske wahar jo bhi hai woh hai global scope 
// global scope me jo bhi aap value likhenge woh value if block me use kar sakte ho aur lekin scope ke andar jo value likhte hai woh bhar nahi jani chahiye
//SUMMARY :

//1. Variable declared outside of function is global object.It can be accessed from anywhere.
//2. Variable declared inside a function,if/else or loop is  block scope.It can't be access outside 
//that function. But variable declared with var are function-scoped and can be accessed outside the
//block in which they are defined, leading to potential issues.So let and const should be used.

// console.log(a);// a is not definedv
// console.log(b); // b is not defined
//console.log(c);// print hijayegav jo ki ek problem hai

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//scope level and mini hoisting in js

function one (){
    const username = "anagh"

    function two(){
        const website = "yotube"
        //console.log(username);
        
    }
   // console.log(website);

    two()
}

one()

//jo child function hota hai woh parent ke variable ko access kar pate hai but not vice -versa
// yeh same kaam if else me bhi hota hai

if (true) {
    const username = "anagh"
    if (username === "anagh"){
        const website = "youtube"
        //console.log(username + website);//execute nahi hoga
        
    }
   // console.log(website)// execute nahi hoga
}

//console.log(username);//execute nahi hoga kyuki uska cope keval first if block tak me hi tha 

//+++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));


function  addone(num){
    return num + 1
}
//addone(5)// yaha pe add one niche likha hai , no problem function decleration se pehle bhi isse likha ja sakta hai

//isi cheez ko log dusre tarike se bhi karte hai

const addTwo = function(num){
    return num + 2
}

addTwo(5) // but is cheez ko aap pehle sakte hai bcz it will say "cannot access addTwo before initialization"
// aisa isliye hua because apne function ko varible me hold kiya hai alag tarike se declare kiya hia













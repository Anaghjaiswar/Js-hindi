const userEmail = "h@gmail.com"

if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("don't have use remail");
    
}
const useremail = ""// empty string me tre nahi mana

if(useremail){
    console.log("Got user email");
    
}
else{
    console.log("don't have user email");
    
}
const Useremail = []// empty array me true man liya

if(Useremail){
    console.log("Got user email");
    
}
else{
    console.log("don't have use remail");
    
}

/*
falsy values
false, 0, -0, BigInt-> 0n, "",null,undefined, NaN(not a number)

enke alawa jitne bhi hai unko true mante hai 
truthy values --> kuch *surprisy values* hoti hai
"0"--> true, 'false'," "(space hai toh true),[],{}, function(){} => truthy values

*/

// if(Useremail.length === 0){
//     console.log("array is empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj)/*yeh ban gya ek array toh iski length property check kar sake hai */.length === 0){
   
    console.log("Object is Empty");
    
}


//Nullish Coalescing Operator(//); null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10

//val1 = undefined ?? 15
val1 = null ?? 13 ?? 10

console.log(val1);



//ternery operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");














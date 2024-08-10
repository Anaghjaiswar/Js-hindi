//Immediately Invoked Function Expressions (IIFE)
//jaise hi apne function usko turant hi execute karana hai

//ham chhate hai hai ji jaise hi hamara application start ho waise hi us file ke andar hamara database ka connection start ho jaye
//jab hmara global scope hai waha se chezze pollute hoti hai kai bar aur pollution rokne ke liye iife likhte hai
// function chai(){
//     console.log(`DB connected`);
// }
// chai()
(function chai(){
    console.log(`DB connected`);
})();

//interview - global scope ke pollution se problem hoti hia kai baar toh us global scope ke variables ya jo bhi declaration hai uske hatane ke liye hamne IIFE ka use kiya 

// ab yeh dusra wala nhai chalega bcz IIFE function invoke toh hogaya but isko pata nahi hai ki context rokna kaha hai toh usko end karne ke liye ek *semicolon* ki jarurat hai
( function aurcode(){
    //Named IIFE
    console.log(`DB connected two`);
    
}  )();
( () => {
    //Unamed IIFE
    console.log(`DB connected three`);
    
}  )();
( (name) => {
    //unnamed IIFE with parameter pass
    console.log(`DB connected four ${name}`);
    
}  )(`AnaghJaiswar`)

const user = {
    username : "anagh",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);//current context ko refer karne ke liye this lagana jaruri hai
        console.log(this);// this current context ki baat karta hai yani jo bhi current values hai uski
        
    }
    
}
//what if ab mai bahar this likhu toh ?? yaha pe bhi toh kuch current context hoga

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()//toh ab sam aayega kyuki hamne hard code nahi kiya tha hamne kaha tha ki jo bhi current context hai us current context me username ki value print karo


console.log(this); //{} - because global me koi context hi nahi hai

// function chai(){
//     let username = "Anagh "

//     console.log(this.username);//undefined,context hamara object ke andar hi kaam kar raha hai aise function ke andar use nahi akr pa raha hu
//     console.log(this);
    
// }

// chai()

// const chai = function(){
//     let username = "Anagh"
//     console.log(this.username);//undefined
    
// }
const chai = () =>/*arrow function */ {
    let username = "Anagh"
    console.log(this);
}
chai()

// arrow function
//expilicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return

//curly braces me wrap kara toh return likhna padega aur brackets me kara hai toh nahi
//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => ( num1 + num2)

//now suppose you have return a aobject
const addTwo = (num1, num2) => ({username: "Anagh"})


console.log(addTwo(3,4));







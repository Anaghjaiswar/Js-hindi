//const tinderuser = new Object() // DONO ME VALUE SAME AAYEGI (singleton object)

const tinderuser = {} // same value(non-singleton object)

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

//console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            FirstName: "Anagh",
            LastName: "Jaiswar"
        }
    }
}
// console.log(regularUser);
// console.log("------------------------");

// console.log(regularUser.fullname);
// console.log("------------------------");
// console.log(regularUser.fullname.userfullname);


// do objects ko merge karna hai

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

//const obj3 = {obj1, obj2}// not valid (same array wali problem)
const obj3 = Object.assign(obj1, obj2)
//console.log(obj3);
// assign:-  Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
//result toh aagaya magar yeh syntax ka sahi tarika nai hain right way is including a parenthesis so to make sure it definitely combines

//const obj4 = Object.assign({},obj1, obj2)//aur yeh value merge hoke obj 1 me hi chali jayengi


//but we will use these methods less to merge

// console.log(obj4);
// console.log(obj1);
// so we use spread operator
const obj5 = {...obj1,...obj2} // 90% of time we use this (...) spread operator to merge  *latest*
//console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]


console.log(users[1].email)

console.log(tinderuser);
// hame chahiye iski keys

console.log(Object.keys(tinderuser)); // yaha pe jo output value milti hai uska data type hai array toh ab ham isme sare array ke operations laga sakte hai
//jis tarah see keys nikal sakte hai usi tarah se values nikal sakte hai
console.log(Object.values(tinderuser))
//entries
console.log(Object.entries(tinderuser)) // array ke andar array milega

//what if value exist hi nahi karti hai toh phir suppose loop me chalaya kuch toh crash hone ke chances hai toh puch sakte ho tinder user se ki values exist karengi ki nahi

console.log(tinderuser.hasOwnProperty('isloggedin')); // single quotes me hasOwnProperty ke andar likhe hai








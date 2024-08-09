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


//console.log(users[1].email)

//console.log(tinderuser);
// hame chahiye iski keys

//console.log(Object.keys(tinderuser)); // yaha pe jo output value milti hai uska data type hai array toh ab ham isme sare array ke operations laga sakte hai
//jis tarah see keys nikal sakte hai usi tarah se values nikal sakte hai
//console.log(Object.values(tinderuser))
//entries
//console.log(Object.entries(tinderuser)) // array ke andar array milega

//what if value exist hi nahi karti hai toh phir suppose loop me chalaya kuch toh crash hone ke chances hai toh puch sakte ho tinder user se ki values exist karengi ki nahi

//console.log(tinderuser.hasOwnProperty('isloggedin')); // single quotes me hasOwnProperty ke andar likhe hai


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//( object de structure and JSON - API)

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh" 
}

//course.courseInstructor // aisi bhi value access kar akte hai biut ek dusra tarika hai

const {courseInstructor: teacher } = course // yah pe suppose kafi bada naam hai toh aap isko apene hisaab se bhi naaam de sakte ho jo colon ke badd diya gya hai

console.log(courseInstructor);
console.log(teacher);

// const navbar (props.company) => {


// } yeh react ka hai

// navbar(company = "Hitesh")


//JSON - API
// api : jab bhi aapka apna kaam kisi aur ke sar pe dal dena hai tpoh use api kahte hai

// {
//     "name": "hitesh",
//     "courseName": "JS in hindi",
//     "price": "free"
// }
// jab ham sirf parenthesis me declare karte hai toh usse JSON hi kehteb hai
[
    {},
        {
        "results": [
          {
            "gender": "female",
            "name": {
              "title": "Miss",
              "first": "Jennie",
              "last": "Nichols"
            },
            "location": {
              "street": {
                "number": 8929,
                "name": "Valwood Pkwy",
              },
              "city": "Billings",
              "state": "Michigan",
              "country": "United States",
              "postcode": "63104",
              "coordinates": {
                "latitude": "-69.8246",
                "longitude": "134.8719"
              },
              "timezone": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
              }
            },
            "email": "jennie.nichols@example.com",
            "login": {
              "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
              "username": "yellowpeacock117",
              "password": "addison",
              "salt": "sld1yGtd",
              "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
              "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
              "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
              "date": "1992-03-08T15:13:16.688Z",
              "age": 30
            },
            "registered": {
              "date": "2007-07-09T05:51:59.390Z",
              "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
              "name": "SSN",
              "value": "405-88-3636"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/75.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
          }
        ],
        "info": {
          "seed": "56d27f4a53bd5441",
          "results": 1,
          "page": 1,
          "version": "1.4"
        }
      },
    {}
]



















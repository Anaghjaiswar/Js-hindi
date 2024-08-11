//array specific loops

//for of

//["","",""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]


for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello world!"

for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
    
}

//Maps
const map = new Map()// map me keval unique values hi hoti hai aur jis order me enter kiya hia usi order me rehti hai 
//agar dubara value repeat kardoge toh nahi lega
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);

//how to apply loop in map?

// for (const key of map) {
//     console.log(key);
    
// }
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'SF3',
    'game2': 'COC'
}

// for (const [key,value] of object) {
//     console.log(key, ':-', value);
    
// }
// myObject is not iterable

//you have other ways to iterate a object




















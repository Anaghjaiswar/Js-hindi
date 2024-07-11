const name = "hitesh"
const repoCount = 50;

//console.log(name + repoCount + "value");  //gimmiccky

//console.log(`hello my name is ${name} and my Repo counnt is ${repoCount}`)
//We use ` ` to write complete string and will use ${} to inject variables in it.
//now string ko declare karne ka ek aur tarika
const gamename = new String('Anagh-hc-com')



// console.log(gamename[0])
// console.log(gamename.__proto__);
// console.log(gamename.length)//length return karke dega
// console.log(gamename.toUpperCase())//uppercase me convert kardega, similiarly lowercase wala bhi hota hai
// console.log(gamename.charAt('4'))// yeh batayega ki konsi postion me konsa character hai
// console.log(gamename.indexOf('a'))// tells about the position of the character , if 2 or more chacters in string tell only first one

const newString = gamename.substring(0, 4) //substring mane string ko divide karna aur isne last wale(4th position character) ko nahi liya

//console.log(newString);
const anotherstring = gamename.slice(0, 4)

//console.log(anotherstring);

const string3 = gamename.slice(-7, 4)
//console.log(string3)

//trim and replace
const string4 = "    Anagh  "
// console.log(string4)
// console.log(string4.trim()) //trim starting and end spaces ko reduces kardeta hai

const url = "https://anagh.com/anagh%20jaiswar"
//console.log(url.replace('%20','-'));// replace as can bs=e seeen directly string me kuch replace karle ke kaam aata hai


//console.log(url.includes("anagh")) // search karne ke liye ki hai bhi  ya nahi

// now i want to convert my string into different arrays based on - dash

//console.log(gamename.split('-'));

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// now use of all string functins one-by-one
let learnstring = "hello my name is Anagh";
let learnstring_2 = " how are you"
let index = 9
console.log(learnstring.at(index))//aage se 9th position
index = -12;
console.log(learnstring.at(index))// piche se 12th position
console.log(learnstring.charAt(6)) // 6th position pe konsa character 
console.log(learnstring.charCodeAt(3)) // 3rd position pe character ka ascii value
console.log(learnstring.concat(' ', learnstring_2))// yeh do strings ko jodta hai first write first priority
console.log(learnstring_2.concat(', ', learnstring))// same here 
console.log(learnstring.endsWith('Anagh'));// string ke last me same value hai ya nahi
console.log(learnstring.includes("name")) // kya string me yeh hai ya nahi
console.log(learnstring.indexOf('a'))// yeh string me us particular charcter ka index search karta hai aage se
console.log(learnstring.lastIndexOf('a'))// yeh string me us particular charcter ka index search karta hai piche se
// console.log(lernstring.);//
// console.log(lernstring.);//
// console.log(lernstring.);//
// console.log(lernstring.);//
// console.log(lernstring.);//
// console.log(lernstring.);//
// console.log(lernstring.);//
// console.log(lernstring.);//
// console.log(lernstring.);//
// console.log(lernstring.);//
const score = 400
console.log(score);
const balance = new Number(100.5665)
//ab toh uska data  type explicitly number hi hai
console.log(balance); // woh specially cast karega ki number hai 

console.log(balance.toString());//number string ban gaya hai 
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //fixed mean decimal ki baad utni hi place me value dega agar value decimal ke baad 4 hai aur fixed me 2 hai toh roundd off karke 2 places after decimal tak hi return karega 

const othernumber = 123.8966

console.log(othernumber.toPrecision(3));// pehle 3 places me round off karega 3 digit answer  dega
console.log(othernumber.toPrecision(4));//pehle 4 place ko round off karke 123.9 dedega (4 digit answer dega) 
console.log(othernumber.toPrecision(2));//pehle 2 digit ko toh 1.2 likh dega uske baad exponential me dega 
//precision => No. of significant digits. must be in the range of 1- 21 inclusive


const hundreds = 1000000// yeh number me lage zeroes kabhi kabi calculate karne me dikkat hote hai toh kuch methods hai 
console.log(hundreds.toLocaleString());// aise cases me answer comma ke form me aayega in accordance with U.S. standards
console.log(hundreds.toLocaleString('en-IN'));// aise cases me answer in accordance with indian standards aayega

//+++++++++++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));// negative value positive me convert ho jaati hai lekin positive value positive hi rehti hai

console.log(Math.round(4.6));// round off karke 5 dedega
console.log(Math.ceil(4.2));// round off karega lekin 4 hi dega ceil matlab upar se round off karega
console.log(Math.floor(4.9));// round off karega 4 hi dega hamesa lowest value hi lega chae 4.9 ho ya 4.2

console.log(Math.min(4,3,6,8,12,5));// min value return karke dega array se
console.log(Math.max(4,5,8,11,6,12))// max value return krke dega

console.log(Math.random());// iski value kuch bhi ho sakti hai 0 aur 1 ke beech me
console.log((Math.random()*10) + 1); // isme floor bhi laga sakte ho usse ek hi randiom value aayegi

/*
A simple explanation that I always think about is "Math.random() sirf 0 se 1 tk random number generate 
krta hai 0 is inclusive, 1 is exclusive....So in this statement Math.random() * 10, the result can 
never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, to result 
hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar
aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi.
to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if
you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at
last isme bas aap 1 add kr doge to result [1,10] m convert ho jaega....
*/

// 11 => (max - min) + 1


// + 1 isliye kar rahe hai taki zero values na aaye
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
/*
the plus one is  added to include the maximum number(20) into the range .. Zero case is
already handled by adding +min after it ...   For example  let's say the random
returns 0.99999 then multiply it with 11(20-10+1)..  , we will get 10.989.... take 
the floor value of this which will be 10 and now add it with min value which is 10 
so overall answer would be 20(the ending range). That's the maximum case. 
Similarly if random returns 0.0122... then everything will get 0 in the left and then
adding min(10) to 0 will give us 10 which is the starting range..
*/
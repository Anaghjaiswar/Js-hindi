//const coding = ["JS", "Ruby", "Java", "python", "C++"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     //return likhte hai
//     return item  // abhi bhi nahi hoga undefined aayega
// })
// console.log(values);// undefined:-> yaha pe return kuch bhi nahi hua agar aapko return karna hai toh return likhma padega 

const myNum = [1, 2,3, 4, 5, 6, 7, 8, 9, 10]


//filter return bhi karta hai
// const newNums = myNum.filter((num) => num > 4)//filter bhi apne andar call back hi leta hai

// console.log(newNums);


// const newNums = myNum.filter((num) => {
//     return num > 4
// })//filter bhi apne andar call back hi leta hai

// console.log(newNums); // output is => []

// ab mujhe yeh hi sab kaam karna tha lekin filter waghera use nahi karna tha mujhe use karna tha for each toh dekho kese hoga

const NewNums = []

myNum.forEach((num) => {
    if (num > 4) {
        NewNums.push/*array me add karne ke liye hota hai*/(num)
    }
})
//console.log(NewNums);
// eg ek databas ese hame kuch values milit toh woh kuch isi tarah milengi ab isme kuch exercises karte hai
const books = [
    {title: 'Book One', Genre: 'Fiction', Publish: 1981, Edition: 2004},
    {title: 'Book Two', Genre: 'Non-Fiction', Publish: 1992, Edition: 2008},
    {title: 'Book Three', Genre: 'History', Publish: 1999, Edition: 2007},
    {title: 'Book Four', Genre: 'Non-Fiction', Publish: 1989, Edition: 2010},
    {title: 'Book Five', Genre: 'Science', Publish: 2009, Edition: 2014},
    {title: 'Book Six', Genre: 'Fiction', Publish: 1987, Edition: 2010},
    {title: 'Book Seven', Genre: 'History', Publish: 1986, Edition: 1996},
    {title: 'Book Eight', Genre: 'Science', Publish: 2011, Edition: 2016},
    {title: 'Book Nine', Genre: 'Non-Fiction', Publish: 1981, Edition: 1989}
]
// only woh books jinka genre history ho
let userBooks = books.filter((BK) => BK.Genre === 'History')
// only woh books jo 1995 ke baad publish hui ho aur history genre ki ho
userBooks = books.filter((BK) => {
    return BK.Publish >= 1995 && BK.Genre === 'History'
})
console.log(userBooks);
 

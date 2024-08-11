//for each loop

const coding = ["JS", "Ruby", "Java", "python", "C++"]


//for each bolega ki call back function do yaha pe function ka name nhai hota hai,kyuki yeh function array ke andar chal rah ahai toh yeh parameter ki bvalue apne aap leeke aayega
// coding.forEach( function (item) {
//     console.log(item);
    
// }  )


// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })
//[{},{},{}]
const MyCoding = [
    {
        languageName: "Javascript",
        LanguageFileName: "Js"
    },
    {
        languageName: "Java",
        LanguageFileName: "java"
    },
    {
        languageName: "Python",
        LanguageFileName: "py"
    }
]

MyCoding.forEach((item) => {

    console.log(item.languageName);
    
})




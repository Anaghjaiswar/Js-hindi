const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc,currentvalue){
//     console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
    
//     return acc + currentvalue
// },0)

// console.log(myTotal)

const myTotal = myNums.reduce((acc,curr) => acc + curr, 0)
console.log(myTotal);


const shopping_cart = [
    {
        itemname: "Js course",
        price: 999
    },
    {
        itemname: "Python course",
        price: 2999
    },
    {
        itemname: "Mobile Development Course",
        price: 5999
    },
    {
        itemname: "Data science course",
        price: 12999
    },
]


// you have add to calculate the final price

const pricetopay = shopping_cart.reduce((acc, item) => acc + item.price,0)
console.log(pricetopay)


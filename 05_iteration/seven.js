const MyNumbers = [1, 2, 3, 4, 5, 6,7 ,8 ,9 ,10]

//const newNums = MyNumbers.map((num) => {return num + 10})
//console.log(newNums)

//or
//const newnums = MyNumbers.map((num) => num + 10)
//console.log(newnums)
//chaining
const newNums = MyNumbers
                .map((num) => num * 10) // [10,20,30,...]ab yaha pe ek array ekhata ho chuka hai, jab bhi chaining hoti hai toh jo bhi result hota hai woh second chain me pass hoj ata hai
                .map((num) => num + 1)//[11,21,31,...]
                .filter((num) => num >= 40)
console.log(newNums);

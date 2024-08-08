const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

//marvel_heroes.push(dc_heroes)// array ke andar ek sub array aa jayega
// console.log(marvel_heroes);
// console.log(marvel_heroes[2][1]);
// console.log(marvel_heroes[3][0]);

// const all_heroes = marvel_heroes.concat(dc_heroes);
// //concat() --> Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(all_heroes);

//spread operator

// const all_new_heroes = [...dc_heroes, ...marvel_heroes]
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity);
// //flat --> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// console.log(real_another_array);
// const real_another_array_0 = another_array.flat(0);
// console.log(real_another_array_0);
// const real_another_array_1 = another_array.flat(1);
// console.log(real_another_array_1);
// const real_another_array_2 = another_array.flat(2);
// console.log(real_another_array_2);

console.log(Array.isArray("Anagh"))
console.log(Array.from("Anagh"))//Creates an array from an iterable object.
console.log(Array.from({name: "Anagh"}));//interesting returns square brackets only bcz you didn't specify what to convert whether key or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
//of --> Returns a new array from a set of elements.







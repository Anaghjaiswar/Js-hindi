//array

const myArray = [0,1,2,3,4,5]//array me similiar and non- similliar dono data type le sakte hai
// javascript arrays are rsizable 
//js arrays are nno associative

//console.log(myArray[0]);//array ke 1st element ki indexing zero se start hoti hai
//javascript array-copy operations create shallow copies

//A shalllow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made.
//A deep copy of an object is a copy whose properties do not share the same references as those of the source object from which the copy was made.

const myHeroes =["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArray[1]);
//console.log(myArray.length);

// array methods

// myArray.push(6);//Appends new elements to the end of an array, and returns the new length of the array.
// myArray.push(2);
// console.log(myArray);
// myArray.pop();//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.



myArray.unshift(9);//Inserts new elements at the start of an array, and returns the new length of the array.
myArray.shift();//Removes the first element from an array and returns it.
//console.log(myArray);

//array questionaire form
// console.log(myArray.includes(9));//Returns the index of the (first occurrence) of a value in an array, or -1 if it is not present.
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(-19));
// console.log(myArray.indexOf(3));

//const newArray = myArray.join()//Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArray);
// console.log(typeof myArray);
// console.log(newArray)

// console.log(typeof newArray);

//slice,splice

console.log("A", myArray);

const myn1 = myArray.slice(1,3)//Returns a copy of a section of an array.The end index of the specified portion of the arrayis exclusive.
//original array ko manipulate nahi karta hai 

console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
//original array ko manipulate karta hai 

//splice ke baad jo bacha hua array hota hai woh hoo jata hai myArray
//removes elements from an array and @returns — An array containing the elements that were deleted.
console.log(myn2);
console.log("C", myArray);

















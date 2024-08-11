// The 'for' and 'while' loops are what we call 'entry control loops' because they check the condition before entering the loop. On the other hand, 'do-while' loops are known as 'exit control loops' since they ensure that the loop body is executed at least once before checking the condition.

//while loop

// while (condition) {
    
// }
let index = 0
while (index <= 10){
    //console.log(`Value of index is ${index}`);
    index = index + 2;
}

let MyArray = ["flash", "batman", "superman"]

let i = 0
while (i < MyArray.length){
    //console.log(`Value is ${MyArray[i]}`);
    i++
}


//do while loop
// do {

// }while(Condition)

let score = 11

do {
    console.log(`Score is ${score}`);
    score++;
} while (score<= 10);







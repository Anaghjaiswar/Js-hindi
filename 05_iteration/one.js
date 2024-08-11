//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element === 5){
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`innner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
        
        
    }
}
    
// for (let i = 0; i <= 10; i++) {
//     let row = "";
//     for (let j = 0; j <= 10; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

let MyArray = ["flash", "batman", "superman"]
//console.log(MyArray.length);

for (let i = 0; i < MyArray.length; i++) {
    const element = MyArray[i];
    //console.log(element);
    
    
}


//keywords

//break and continue

for (let index = 1; index <= 20; index++) {

    if(index == 5){
        //console.log(`Detected 5`);
        break
    }

    //console.log(`Value of i is ${index}`);
    
    
}
for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log(`Detected 5`);
        continue// ek baar maaf kardo --> ignore ho jata hai
    }

    console.log(`Value of i is ${index}`);
    
    
}




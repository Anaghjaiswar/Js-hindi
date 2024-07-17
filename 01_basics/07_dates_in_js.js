// DATES

let myDate = new Date() 
console.log(myDate); // display ajeeb sa format 
console.log(myDate.toString());// display date , day , time , gmt , coordinated universal time
console.log(myDate.toDateString());//display only date and day
console.log(myDate.toISOString());// display ajeeb sa format
console.log(myDate.toJSON());//display ajeeb sa format
console.log(myDate.toLocaleDateString());// display date in slash / format 
console.log(myDate.toLocaleString());// display date in slash / format and display time 
console.log(myDate.toTimeString());// time , gmt , coordinated universal time
console.log(myDate.toUTCString());//day, date , time gmt-greenwich mean time
console.log(myDate.getTimezoneOffset());// got zero 

console.log(typeof myDate);// object

let mycreatedDate1 = new Date(2004, 3, 11,5,3,2,8);//date me format hoga year(full year) -> month(0 to 11) -> date(1 to 31) -> hour(0 to 23) -> minutes(0 to 59) -> seconds(0 to 59) -> milliseconds(0 to 999)
console.log(mycreatedDate1.toDateString());
console.log(mycreatedDate1.toLocaleString());


//let mycreatedDate2 = new Date("2004-04-11")
let mycreatedDate2 = new Date("11-04-2023")

console.log(mycreatedDate2.toLocaleString()); 

let myTimeStamp = Date.now()

console.log(myTimeStamp);// 1st january 1970 se leke aab tak ka time in milli seconds
//returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC)
console.log(mycreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000)); // shows current date in seconds without displaying decimal

let newDate = new Date()
console.log(newDate);
//0 se start ho raha hai yaha pe yaad rakhiyega
console.log(newDate.getDate());//Gets the day-of-the-month, using local time.
console.log(newDate.getDay()+1);//Gets the day of the week, using local time.
console.log(newDate.getFullYear());//Gets the year, using local time.
console.log(newDate.getHours());//Gets the hours in a date, using local time
console.log(newDate.getMilliseconds());//Gets the milliseconds of a Date, using local time
console.log(newDate.getMinutes());//Gets the minutes of a Date object, using local time.
console.log(newDate.getMonth() + 1);//Gets the month, using local time.
console.log(newDate.getSeconds());//Gets the seconds of a Date object, using local time.
console.log(newDate.getTime());//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

console.log(`today date is ${newDate.getDate()} and day is ${newDate.getDay() + 1} and month is ${newDate.getMonth() + 1}`)

console.log(newDate.toLocaleString('default', {
    weekday: "long",
   
}))









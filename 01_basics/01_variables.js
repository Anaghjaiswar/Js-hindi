const accountId = 144553
let account_Email = "Anagh@gmail.com"
var account_password = "123456"
accountCity = "Pilibhit" 
let account_state; //undefined

//accountId = 2 // not allowed
account_Email ="hjds@gmail.com"
account_password = "659876"
accountCity = "delhi" 



console.log(accountId);
console.table([accountId,account_Email,account_password,accountCity,account_state])
/*
prefer not to use var because of issue in block scope and functional scope.
*/
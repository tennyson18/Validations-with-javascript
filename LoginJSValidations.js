// ---------------------------------------------
//  LOGIN VALIDATION PROGRAM 
// ---------------------------------------------

// Import the readline module so we can take user input from the terminal
const readline = require("readline");

// Create an interface to read and write from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* 
//Uncomment for browswer usage
//let username = prompt("Enter username");
// let password = prompt("Enter password");
rl.question("Enter username: ", (username) => {
  rl.question("Enter password: ", (password) => {
   
   rl.close();
  });
});
*/

//Ask user to enter username and password
rl.question("Enter username: ", (username) => {
  rl.question("Enter password: ", (password) => {

   //These are our correct login details
   let correctUsername = "Bennyboi";
   let correctPassword = "Test#124";
   let age = 25;

   //Check if the user filled in both fields

   if(username.length = 0){
      console.log("Username required");
      rl.close();
      return; //Stops the program
   }

   if(password.length < 5){
      console.log("Password too short")
      rl.close();
      return;
   }

   //Check if the username and password match

   if ( (username === correctUsername) && (password === correctPassword) && (age >= 18)){
      console.log("Login Successful")
   } 
   else if((username === correctUsername) && (password !== correctPassword)){  
      console.log("Incorrect user details")
   }  
   else{
      console.log("User not found")
   } 

   //Validates password contains one of these special characters

   const passwordSet = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&$@#!?+])[A-Za-z\d&$@#!?+]{5,}$/
   if (!passwordSet.test(password)) {
      console.log( "Password must contain one upper case, one lower case and a special character");
   }
   // else {
   //    console.log("Password check complet, however isn't the correct password.");
   // }
   // Close the readline interface to end the program
   rl.close();
  });
});

//on game start prompt for users number of characters and hold in a variable
//event listener added so prompt pops up after page loads
window.addEventListener("load", function() {
    var numChars = prompt("How many characters would you like in your password?")
    });

//create variables to hold the options for special, lowercase and numeric characters
var specialCharsArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+"]
var upperCaseArray = ["A", "B'", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericalNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//create an empty array that will hold users selected characters
var possibleCharsArray = []
var numChars = 10;



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    //userInput variable created if prompts are confirmed, then password will be generated
    var userInput = validateUserInput();
    var passwordText = document.querySelector("#password");

   if (userInput) {
       var newPassword = generatePassword();
       passwordText.value = newPassword;
  }  else {
       passwordText.value = "";
  } 
  if (!specialCharsArray && !upperCaseArray && !lowerCaseArray && !numericalNumsArray) {
    alert("You need to select at least one type of character for your password.");
    return generatePassword();
  }
}
//write generatePassword function
function generatePassword() {
    var password = "";
    //loop through possibleChars and select a random character from the possibleChars array based on how many characters they entered into the prompt
    for (var i = 0; i < numChars; i++) {
        var randomChar = [Math.floor(Math.random() * possibleCharsArray.length)];
        password = password + possibleCharsArray[randomChar];
    }
    return password;
    

}
 
//write function that validates the users input
function validateUserInput() {
    numChars = parseInt (prompt("How many characters would you like in your password?"));
    //check users input and confirm they put in a number btw 8 and 128 and that it is numeric
    if(isNaN(numChars) || numChars < 8 || numChars > 128) {
        alert ("Character length has to be a number between 8 and 128. Please try again.");
        return false;
    }
    //after validation create variables for character selection and concat into possibleCharsArray
     if (confirm("Would you like to include special characters in your password?")) {
        possibleCharsArray = possibleCharsArray.concat(specialCharsArray)
     }
     if (confirm("Would you like to include lowercase letters in your password?")) {
        possibleCharsArray = possibleCharsArray.concat(lowerCaseArray)
     }
     if (confirm("Would you like to include uppercase letters characters in your password?")) {
        possibleCharsArray = possibleCharsArray.concat(upperCaseArray)
     }
     if (confirm("Would you like to include numbers in your password?")) {
        possibleCharsArray = possibleCharsArray.concat(numericalNumsArray)
     }
     return true;
    
    
     
     
}    
   
        
//if (!specialChars && !upperCase && !lowerCase && !numericalNums) {
    //alert("You need to select at least one type of character for your password.");
      //function generatePassword(){
      //return;
     //}
    
//}

//loop through possibleChars and select a random character from the possibleChars array based on how many characters they entered into the prompt

//push() the randomly generated character to an empty array called passwordArray

//return passwordArray.join()

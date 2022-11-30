
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("you clicked the button")
    return "Generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create variables to hold the options for special, lowercase and numeric characters
var specialCharsArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+"]
var upperCaseArray = ["A", "B'", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericalNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//create an empty array that will hold users selected characters
var possibleChars = []
//on game start prompt for users number of characters and hold in a variable
var numChars = prompt("How many characters would you like in your password?")
//check users input and confirm they put in a number btw 8 and 128 and that it is numeric

//write function that validates the users input
function validateUserInput(numChars) {
    if (numChars < 8 || numChars > 128) {
        return null;
    }
}
//after validation create variables for character selection
var specialChars = confirm("Would you like to include special characters in your password?")
var upperCase = confirm("Would you like to inlude uppercase letters in your password?")
var lowerCase = confirm("Would you like to include lowercase letters in your password")
var numericalNums = confirm("Would you like to include numbers in your password?")
//validate that at least one option was selected
if (!specialChars && !upperCase && !lowerCase && !numericalNums) {
    alert("You need to select at least one type of character for your password.");
      function generatePassword(){
      return;
     }
    
}
//after validation is complete start pushing the selected characters into possibleChars array
if (specialChars) {
possibleChars.concat(specialCharsArray)
}
if (upperCase) {
    possibleChars.concat(upperCaseArray)
    }
if (lowerCase) {
        possibleChars.concat(lowerCaseArray)
        }   
 if (numericalNums) {
            possibleChars.concat(numericalNumsArray)
            }
//create a random number
for (i = 0; i <userInput(numChars); i++) {
    var randomNum = possibleChars[Math.floor(Math.random() * possibleChars.length)];

}
//loop through possibleChars and select a random character from the possibleChars array based on how many characters they entered into the prompt

//push() the randomly generated character to an empty array called passwordArray

//return passwordArray.join()

// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "-", "`", "{", "}  ", "|", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var answer = "Y";

// Write password to the #password input
function writePassword() {
  function generatePassword(){
    alert("Which Criterias would you like to be in your password?");
    var userLength = prompt("How long do you want your password to be? (Please provide an answer as a number between 8 and 128 characters.)");
    var userLower = prompt("Would you like lowercase letters in the password? (type y for yes and n for no)");
    var userUpper = prompt("Would you like uppercase letters in the password? (type y for yes and n for no)");
    var userNumber = prompt("Would you like numbers in the password? (type y for yes and n for no)");
    var userSpecial = prompt("Would you like special character? (type y for yes and n for no)");
  
    if (!userLength || !userLower || !userNumber || !userSpecial || !userUpper) {
      return;
    }
  
    userLower = userLower.toUpperCase();
    userUpper = userUpper.toUpperCase();
    userNumber = userNumber.toUpperCase();
    userSpecial = userSpecial.toUpperCase();

    if(userLower === answer){
      const passArray = letters;
      console.log(passArray);
    }else{
      console.log("Lowercase letters will not be used.");
    }

    if(userUpper === answer){
      passArray2 = upperLetters;
      console.log(passArray2);
    }else{
      alert("Uppercase letters will not be used.")
    }

    if(userNumber === answer){
      const passArray3 = numbers;
      console.log(passArray3);
    }else{
      console.log("Numbers will not be used.");
    }

    if(userSpecial === answer){
      const passArray4 = specialCharacters;
      console.log(passArray4);
    }else{
      console.log("Special characters will not be used.");
    }

    const finalArray = passArray + passArray2 + passArray3 +passArray4;
    console.log(finalArray);
    // password = Math.random() * finalArray.length;
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

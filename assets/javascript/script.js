// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "-", "`", "{", "}", "|", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function writePassword() {
  function generatePassword(){
    alert("Which Criterias would you like to be in your password?");
    var userLength = prompt("How long do you want your password to be? (Please provide an answer as a number between 8 to 128 characters.)");
    if(userLength < 8 || userLength > 128){
      alert("A number was not submitted between 8 to 128. The program will be restarting from the beginning.")
      writePassword();
    }else{
      console.log(userLength);
    }
    var userLower = confirm("Would you like lowercase letters in the password?");
    var userUpper = confirm("Would you like uppercase letters in the password?");
    var userNumber = confirm("Would you like numbers in the password? ");
    var userSpecial = confirm("Would you like special character? ");
  
    var passwordLength = parseInt(userLength);

    console.log(passwordLength);

    var finalArray = [];
    var password = "";

    if(userLower){
      finalArray = finalArray.concat(letters);
      // console.log(finalArray);
    }else{
      console.log("Lowercase letters will not be used.");
    }

    if(userUpper){
      finalArray = finalArray.concat(upperLetters);
      // console.log(finalArray);
    }else{
      console.log("Uppercase letters will not be used.")
    }

    if(userNumber){
     finalArray = finalArray.concat(numbers);
      // console.log(finalArray);
    }else{
      console.log("Numbers will not be used.");
    }

    if(userSpecial){
      finalArray = finalArray.concat(specialCharacters);
      // console.log(finalArray);
    }else{  
      console.log("Special characters will not be used.");
    }

    for(var i = 0; i < passwordLength; i++){
      var character = finalArray[Math.floor(Math.random() * finalArray.length)];
      password = password + character;
    }
    // console.log(password);
    // // const finalArray = passArray + passArray2 + passArray3 + passArray4;
    // // finalArray = finalArray.filter(finalArray => Boolean);
    // console.log(finalArray);
    // // // password = Math.random() * finalArray.length;
    return password;
  }

  var password = generatePassword();
  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

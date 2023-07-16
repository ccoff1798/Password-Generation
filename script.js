// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword(criteria1) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword(generateReturn){
  var specialCharacters = "Override"
  var length = prompt("Pick password length between 8 and 128")
  if(length >= 8){
    if(length < 128){
      specialCharacters = prompt("Would you like to include special characters? Y/N")
      if(specialCharacters == "Y"){
        console.log(specialCharacters)
      }
      if(specialCharacters == "N")
      {
        console.log(specialCharacters)
      }
    }
    
  }else{
    alert("You did Bad")
  }
  // } else{
  //   console.log("ElseDebug")
  // }
  var generateReturn = length
  console.log(length)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

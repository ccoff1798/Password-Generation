// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword(criteria1) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword(generateReturn){
  var length = prompt("Pick password length")
  // if(length >= 8 $$ length <=128){
  //   console.log("debug")
  // } else{
  //   console.log("ElseDebug")
  // }
  var generateReturn = length
  console.log(length)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

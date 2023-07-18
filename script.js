

//Getting Length of Password
function getLength() {
  var length = prompt("Pick password length between 8 and 128")
  if (length >= 8) {
    if (length < 128) {
      return length;
    }
  } else {
    alert("invalid answer");
    return null
  }
}
//Determaining special Characters
function hasSpecialCharacters() {
  var hasSpecChar = prompt("Would you like to include special characters? Y/N")
  if (hasSpecChar.toUpperCase() == "Y") {
    return hasSpecChar = true;

  }
  else if (hasSpecChar.toUpperCase() == "N") {
    return hasSpecChar = false;
  }
  else {
    console.log("CharacterDebug");
  }
}
//Determaing casing
function hasCaptial() {
  var isCap = prompt("Would you like capital Letters? Y/N")
  if (isCap.toUpperCase() == "Y") {
    return isCap = true
  }
  else if (isCap.toUpperCase() == "N") {
    return isCap = false
  }
  else {
    console.log("CapitalDebug")
  }
}
//Generates Password
// }
function generatePassword() {
  var lengthReturn = getLength();
  var specialReturn = hasSpecialCharacters();
  var capitalReturn = hasCaptial();
  var generatorOutput = '';
  var fullAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*=+-_?~"
  var lowAlphabet = "abcdefghijklmnopqrstuvwxyz"
  var lowSpecAlphabet = "abcdefghijklmnopqrstuvwxyz!@#$%^&*=+-_?~"
  var fullAlphabetNoSpec = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


  if (specialReturn) {
    if (capitalReturn) {
      for (i = 0; i < lengthReturn; i++) {
        var randomCharacter = fullAlphabet[Math.floor(Math.random() * fullAlphabet.length)];
        generatorOutput += randomCharacter;
        console.log(randomCharacter)
      }
      return generatorOutput;
    } else if(!capitalReturn)
    {
      for (i = 0; i < lengthReturn; i++) {
        var randomCharacter = lowSpecAlphabet[Math.floor(Math.random() * lowSpecAlphabet.length)];
        generatorOutput += randomCharacter;
        console.log(randomCharacter)
      }
      return generatorOutput;
    }
  }else if(!specialReturn)
  {
    if (capitalReturn)
    {
      for (i = 0; i < lengthReturn; i++) {
        var randomCharacter = fullAlphabetNoSpec[Math.floor(Math.random() * fullAlphabetNoSpec.length)];
        generatorOutput += randomCharacter;
        console.log(randomCharacter)
      }
      return generatorOutput;
    } else if(!capitalReturn)
    {
      for (i = 0; i < lengthReturn; i++) {
        var randomCharacter = lowAlphabet[Math.floor(Math.random() * lowAlphabet.length)];
        generatorOutput += randomCharacter;
        console.log(randomCharacter)
      }
      return generatorOutput;
    }
  }
  console.log(generatorOutput);
  return generatorOutput;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

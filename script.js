
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;

// }

// //password Generation
// var generatedPassword = function generatePassword(lengthReturn, specialReturn, capitalReturn) {
//   var lengthReturn = getLength();
//   var specialReturn = hasSpecialCharacters();
//   var capitalReturn = hasCaptial();
//   var generatorOutput;
//   const alphabet = "abcdefghijklmnopqrstuvwxyz"
//   const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
//   if (specialReturn = "Y") {
//     if (capitalReturn = "Y") {
//       for (i = 0; i > lengthReturn; i++) {
//         generatorOutput = generatorOutput + randomCharacter
//       }
//       return generatorOutput
//     }
//   }
//   return generatorOutput
// }

//variables
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
var generatorOutput
//Getting Length of Password
function getLength() {
  var length = prompt("Pick password length between 8 and 128")
  if (length >= 8) {
    if (length < 128) {
      return length;
    }
  } else {
    alert("invalid answer");
  }
}
//Determaining special Characters
function hasSpecialCharacters() {
  var specialCharacters = prompt("Would you like to include special characters? Y/N")
  if (specialCharacters.toUpperCase() == "Y") {
    return specialCharacters;

  }
  else if (specialCharacters.toUpperCase == "N") {
    return specialCharacters;
  }
  else {
    console.log("CharacterDebug");
  }
}
//Determaing casing
function hasCaptial() {
  var isCap = prompt("Would you like capital Letters? Y/N")
  if (isCap.toUpperCase() == "Y") {
    return isCap
  }
  else if (isCap.toUpperCase() == "N") {
    return isCap
  }
  else {
    console.log("CapitalDebug")
  }
}

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

//password Generation
// var generatedPassword = 
function generatePassword(lengthReturn, specialReturn, capitalReturn) {
  var lengthReturn = getLength();
  var specialReturn = hasSpecialCharacters();
  var capitalReturn = hasCaptial();
  var generatorOutput = '';
  if(specialReturn = "Y") {
    if(capitalReturn = "Y") {
      for(i = 0; i > lengthReturn; i++) {
        // generatorOutput = randomCharacter;
        // if(i == lengthReturn)
        // {
        //   return generatorOutput;
        // }
        var runGen = Math.floor(Math.random() * randomCharacter.length); 
        generatorOutput += randomCharacter.substring(runGen, runGen+1);
        console.log(runGen)
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



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

function hasNum() {

  var hasNumbers = prompt("Do you want it to have numbers?")
  if (hasNumbers.toUpperCase() == "Y") {
    return hasNum = true;
  }
  else if (hasNumbers.toUpperCase() == "N") {
    return hasNum = false;
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
  var numberReturn = hasNum();
  var specialReturn = hasSpecialCharacters();
  var capitalReturn = hasCaptial();
  var generatorOutput = '';
  var numFalseCapTrueSpecTrue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*=+-_?~"
  var numFalseCapFalseSpecFalse = "abcdefghijklmnopqrstuvwxyz"
  var numFalseCapFalseSpecTrue = "abcdefghijklmnopqrstuvwxyz!@#$%&*=_?"
  var numFalseCapTrueSpecFalse = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  var numTrueCapTrueSpecTrue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*=_?1234567890"
  var numTrueCapTrueSpecFalse = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
  var numTrueCapFalseSpecTrue = "abcdefghijklmnopqrstuvwxyz!@#$%&*=_?1234567890"
  var numTrueCapFalseSpecFalse = "abcdefghijklmnopqrstuvwxyz1234567890"

  if (numberReturn) {
    if (specialReturn) {
      if (capitalReturn) {
        for (i = 0; i < lengthReturn; i++) {
          var randomCharacter = numTrueCapTrueSpecTrue[Math.floor(Math.random() * numTrueCapTrueSpecTrue.length)];
          generatorOutput += randomCharacter;
          console.log(randomCharacter)
        }
        return generatorOutput;
      } else if (!capitalReturn) {
        for (i = 0; i < lengthReturn; i++) {
          var randomCharacter = numTrueCapFalseSpecTrue[Math.floor(Math.random() * numTrueCapFalseSpecTrue.length)];
          generatorOutput += randomCharacter;
          console.log(randomCharacter)
        }
        return generatorOutput;
      }
    } else if (!specialReturn) {
      if (capitalReturn) {
        for (i = 0; i < lengthReturn; i++) {
          var randomCharacter = numTrueCapTrueSpecFalse[Math.floor(Math.random() * numTrueCapTrueSpecFalse.length)];
          generatorOutput += randomCharacter;
          console.log(randomCharacter)
        }
        return generatorOutput;
      } else if (!capitalReturn) {
        for (i = 0; i < lengthReturn; i++) {
          var randomCharacter = numTrueCapFalseSpecFalse[Math.floor(Math.random() * numTrueCapFalseSpecFalse.length)];
          generatorOutput += randomCharacter;
          console.log(randomCharacter)
        }
        return generatorOutput;
      }
      return generatorOutput
    }
  }
  else if (!numberReturn) {
    if (specialReturn) {
      if (capitalReturn) {
        for (i = 0; i < lengthReturn; i++) {
          var randomCharacter = numFalseCapTrueSpecTrue[Math.floor(Math.random() * numFalseCapTrueSpecTrue.length)];
          generatorOutput += randomCharacter;
          console.log(randomCharacter)
        }
        return generatorOutput;
      } else if (!capitalReturn) {
        for (i = 0; i < lengthReturn; i++) {
          var randomCharacter = numFalseCapFalseSpecTrue[Math.floor(Math.random() * numFalseCapFalseSpecTrue.length)];
          generatorOutput += randomCharacter;
          console.log(randomCharacter)
        }
        return generatorOutput;
      }
    } else if (!specialReturn) {
      if (capitalReturn) {
        for (i = 0; i < lengthReturn; i++) {
          var randomCharacter = numFalseCapTrueSpecFalse[Math.floor(Math.random() * numFalseCapTrueSpecFalse.length)];
          generatorOutput += randomCharacter;
          console.log(randomCharacter)
        }
        return generatorOutput;
      } else if (!capitalReturn) {
        for (i = 0; i < lengthReturn; i++) {
          var randomCharacter = numFalseCapFalseSpecFalse[Math.floor(Math.random() * numFalseCapFalseSpecFalse.length)];
          generatorOutput += randomCharacter;
          console.log(randomCharacter)
        }
        return generatorOutput;
      } else
      alert("refresh page to reset");
    }
    console.log(generatorOutput);
    return generatorOutput;
  }
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

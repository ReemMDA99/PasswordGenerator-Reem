/*// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

const keys = {
  includeUppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  includeLowercase: "abcdefghijklmnopqrstuvwxyz",
  includeNumbers: "0123456789",
  includeSymbols: " !#$%&'()*+,-./:;<=>?@[^_`{|}~"
}
const getKey = [
  function includeUppercase() {
    return keys.includeUppercase[Math.floor(Math.random() * keys.includeUppercase.length)];
  },
  function includeLowercase() {
    return keys.includeLowercase[Math.floor(Math.random() * keys.includeLowercase.length)];
  },
  function includeNumbers() {
    return keys.includeNumbers[Math.floor(Math.random() * keys.includeNumbers.length)];
  },
  function includeSymbols() {
    return keys.includeSymbols[Math.floor(Math.random() * keys.includeSymbols.length)];
  }
];

function createPassword() {
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  if (includeUppercase + includeLowercase + includeNumbers + includeSymbols === 0) {
    alert("Please check atleast one box!");
    return;
  }
  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  
 return passwordBox.innerHTML = password();
};

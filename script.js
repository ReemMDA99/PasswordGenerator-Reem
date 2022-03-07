// Assignment Code

const resultEl = document.getElementById('result');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

//create a random function

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol

}
//create alert for length of password not less than 8 and more than 128.

var lengthpass =window.prompt("How many characters would you like your password to be?")

console.log(lengthpass);

if (lengthpass < 8 || lengthpass > 128){
  window.alert("Please enter the numbers between 8 to 128!")
  lengthpass =window.prompt("How many characters would you like your password to be?")
}
// Add event listener to generate button
    
generateEl.addEventListener('click', () => {
    const length = +lengthpass;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    
});
// Write password to the #password input
    
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typeArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

// Create alert to select atleast one option uppercase/ lowercase/ numbers or symbols.

    if(typesCount === 0) {
        return (window.alert('Please select atleast one option'));
    } 
  
    
    for(let i=0; i<length; i+=typesCount) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
} 
function getRandomLower() {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}
function getRandomUpper() {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getRandomNumber() {
  const number = '1234567890'
  return number[Math.floor(Math.random() * number.length)];
}


function getRandomSymbol() {
    const symbols = '!@#$%^&*()<>[]{}/,.='
    return symbols[Math.floor(Math.random() * symbols.length)];
}

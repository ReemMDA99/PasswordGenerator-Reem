// Assignment Code
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol

}
// Add event listener to generate button
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
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

    if(typesCount === 0) {
        return ('Please select atleast one option');
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

var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters."));
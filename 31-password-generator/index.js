window.addEventListener('load', () => {
    console.log('crate a new password!!')
});

const resultEle = document.getElementById('result');
const lengthEle = document.getElementById('length');
const uppercaseEle = document.getElementById('uppercase');
const lowercaseEle = document.getElementById('lowercase');
const numbersEle = document.getElementById('numbers');
const symbolsEle = document.getElementById('symbols');
const generateEle = document.getElementById('generate');
const clipboardEle = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

clipboardEle.addEventListener('click', () => {
    const password = resultEle.innerText;
    if( !password ) {
        return
    }
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
});

generateEle.addEventListener('click', () => {
    const length = +lengthEle.value;
    const hasLower = lowercaseEle.checked;
    const hasUpper = uppercaseEle.checked;
    const hasNumber = numbersEle.checked;
    const hasSymbol = symbolsEle.checked;

    resultEle.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

function generatePassword( lower, upper, number, symbol, length ) {
    let generatePassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter( item => Object.values( item )[0]);

    if ( typesCount === 0 ) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach( type => {
            const funcName = Object.keys( type )[0];
            generatePassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

setInterval('location.reload()', 600000 );

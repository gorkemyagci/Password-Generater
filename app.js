// 97 = Lower 65 = Upper 48 = Number
const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
}
const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 95);
}
const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
}
const getRandomSymbol = () => {
    let symbol = '#$!?*%';
    return symbol[Math.floor(Math.random() * symbol.length)];
}

const randomFunctions = {getRandomLower,getRandomUpper,getRandomNumber,getRandomSymbol};

const generatePassword = () => {
    const length = 16;
    let generatedPassword = '';
    for(let i=0;i<length;i++)
    generatedPassword += Object.values(randomFunctions)[Math.floor(Math.random() * 4)]()

    return generatedPassword
}

const spanResult = document.getElementById('result');
const generateBtn = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

generateBtn.addEventListener('click',() => {
    spanResult.innerText = generatePassword();
});

clipboard.addEventListener('click',() => {
    let password = spanResult.innerText;
    if(!password){
        return
    }
    
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    document.getElementById('copy').innerText = "Parola Kopyalandı";
    setTimeout(() => {
        document.getElementById('copy').innerText = "";
    }, 2500);
})
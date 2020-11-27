let bntEdit = document.querySelector('.btnEdit');
let boxEdit = document.querySelector('.edit-password');
let btnGerar = document.querySelector('.btnGerar');
let txtPassword = document.querySelector('.txtPassword');
let chkUppercase = document.querySelector('#uppercase');
let chkNumbers = document.querySelector('#numbers');
let chkSpecial = document.querySelector('#special');
let rgLength = document.querySelector('#rangePassword');

bntEdit.addEventListener('click', () => {
    boxEdit.classList.toggle('active');
});

btnGerar.addEventListener('click', () => {  
    const textarea = document.createElement('textarea');
    
    let password = generatePassword(
        rgLength.value, 
        chkUppercase.checked, 
        chkNumbers.checked, 
        chkSpecial.checked
    );

    txtPassword.value = password;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
});

function generatePassword(length = 16, handlerUppercase = true, handlerNumber = true, handlerSpecial = true) {
    const charsetLettersLowercase = 'abcdefghijklmnopqrstuvwxyz';
    const charsetLettersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charsetNumber = '1234567890';
    const charsetSpecial = '!@#$%^&*()_+=[]';

    let charset = charsetLettersLowercase;
    let password = '';

    if (handlerUppercase) {
        charset += charsetLettersUppercase;
    }
    if (handlerNumber) {
        charset += charsetNumber;
    }
    if (handlerSpecial) {
        charset += charsetSpecial;
    }

    for (let i = 0; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }

    return password;
}
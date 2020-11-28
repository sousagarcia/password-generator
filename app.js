import { generatePassword, copyPassword } from './generatePassword.js';

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
    let settings = {
        handlerUppercase: chkUppercase.checked, 
        handlerNumber: chkNumbers.checked, 
        handlerSpecial: chkSpecial.checked
    }
    
    let password = generatePassword(
        rgLength.value, 
        settings
    );

    txtPassword.value = password;

    copyPassword(password);
});
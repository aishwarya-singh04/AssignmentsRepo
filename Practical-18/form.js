//Selectors
const form = document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password1= document.getElementById('password1');
const password2= document.getElementById('password2');
const small= document.querySelector('small');

//Event Handlers

//form submission
form.addEventListener('submit', function(e){
    e.preventDefault();                     //to stop submission
    checkInput();
});
//Functions
function checkInput()
{
    const usernameValue = username.value.trim();    //trim() to remove whitespacesh
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue===''){
        showError(username, "Username can't be blank");
    }
    else if(!isUsernameValid(usernameValue))
    {
        showError(username, "Username can have small letters and underscores only");
    }
    else {
        showSuccess(username);
    }
    if(emailValue==='')
    {
        showError(email, "Email Id can't be blank");
    }
    else if(!isEmailValid(emailValue))
    {
        showError(email, "Email Id is inavalid");
    }
    else{
        showSuccess(email);
    }
    if(password1Value===''){
        showError(password1, "Password can't be blank");
    }
    else {
        showSuccess(password1);
    }
    if(password2Value===''){
        showError(password2, "Re-enter password");
    }
    else if(password2Value != password1Value)
    {
        showError(password2, "Password not matched!")
    }
    else {
        showSuccess(password2);
    }
}
function showError(input, msg)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small= formControl.querySelector('small');
    small.innerHTML= msg;
}
function showSuccess(input)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}
function isEmailValid(email)
{
    return /^([a-zA-Z0-9_\.\-\+]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}
function isUsernameValid(username){
    return /^[a-z_]+$/.test(username);
}
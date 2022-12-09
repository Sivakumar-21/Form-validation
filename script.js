const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmpassword");
const phone = document.getElementById("phone");
const textarea = document.getElementById("textarea");

form.addEventListener('submit',e => {
      e.preventDefault();
      checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phonevalue = phone.value.trim();
    const textareavalue = textarea.value.trim();

    if(usernameValue === ''){
        setError(username, "Username cannot be blank");
    }
    else{
        setSuccess(username, "success");
    }

    if(emailValue === ''){
        setError(email, "Email cannot be blank");
    }
    else if(!isEmail(emailValue)){
        setError(email, 'Invalid email ID. please enter correct email ID');
    }
    else
    {
        setSuccess(email);
    }


    if(passwordValue === ''){
        setError(password, "Password cannot be blank");
    }
    else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, "Password cannot be blank");
    }
    else if(passwordValue !== password2Value)
    {
        setError(password2, " Password Does not match")
    }
    else{
        setSuccess(password2);
    }
    if(phonevalue === ''){
        setError(phone, "Fill the phone number");
    }
    else
    {
        setSuccess(phone);
    }
    if(textareavalue === ''){
        setError(textarea, "Message cannot be blank");
    }
    else
    {
        setSuccess(textarea);
    }
}


    function setError(input, message){
       const formcontrol = input.parentElement;
       const small = formcontrol.querySelector('small');
       formcontrol.className = 'form-control error';
       small.innerText = message;
    }

    function setSuccess(input){
       const formcontrol = input.parentElement;
       formcontrol.className = 'form-control success';
    }
    

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

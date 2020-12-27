const usernameField = document.querySelector("#usernameField");
const FeedbackArea = document.querySelector('.invalid-feedback');
const PasswordToggle = document.querySelector('.showPasswordToggle');
const passwordField = document.querySelector('#passwordField');
const submitBtn = document.querySelector('.submit-btn');
console.log('Connected')

const handleToggleInput=(e)=>{
    if(PasswordToggle.textContent==='SHOW'){
        PasswordToggle.textContent = 'HIDE';
        passwordField.setAttribute('type','text');
    }
    else{
         PasswordToggle.textContent = 'SHOW';
         passwordField.setAttribute('type','password');
    }
};

PasswordToggle.addEventListener('click',handleToggleInput);


const emailField = document.querySelector('#emailField');
const emailFeedBackArea = document.querySelector('.emailFeedBackArea');


emailField.addEventListener('keyup',(e)=>{
    const emailVal= e.target.value;
    console.log(emailVal);

    emailField.classList.remove('is-invalid')
    emailFeedBackArea.style.display='none'

    if(emailVal.length>0){
        fetch('/authentication/validate-email',{
            body:JSON.stringify({email:emailVal}),
            method:'POST',
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log('data',data);
            if(data.email_error){
                emailField.classList.add('is-invalid')
                emailFeedBackArea.style.display='block'
                emailFeedBackArea.innerHTML = `<p>${data.email_error}</p>`
                submitBtn.disabled=true;
            }
            else{
                submitBtn.removeAttribute('disabled');
            }
        })
    }
});


usernameField.addEventListener('keyup',(e)=>{
    const usernameVal= e.target.value;
    console.log(usernameVal);

    usernameField.classList.remove('is-invalid')
    FeedbackArea.style.display='none'

    if(usernameVal.length>0){
        fetch('/authentication/validate-username',{
            body:JSON.stringify({username:usernameVal}),
            method:'POST',
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log('data',data);
            if(data.username_error){
                usernameField.classList.add('is-invalid')
                FeedbackArea.style.display='block'
                FeedbackArea.innerHTML = `<p>${data.username_error}</p>`
                submitBtn.disabled=true;
            }
            else{
                submitBtn.removeAttribute('disabled');
            }
        })
    }
});
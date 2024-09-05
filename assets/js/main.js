// LOGIN FORM
var loginBtn = document.getElementById('login_btn');
const loginContainer = document.getElementById('login_container');
const loginForm = document.getElementById('login_form')
const loginFormCancelBtn = document.getElementById('login_form_cancel');
const otherLoginBtns = document.querySelectorAll('#login_form .btn--socials');

function CloseForm(formContainer) {
    ToggleDisplay(formContainer);

    AddAnimation(loginContainer, loginForm);
    AddAnimation(signupContainer, signupForm);
}

function ToggleDisplay (container) {
    container.classList.toggle('d-flex');
}

function AddAnimation (container, form) {
    if(container.classList.contains('animate-none')) {
        container.classList.remove('animate-none');
        form.classList.remove('animate-none')
    }
}

function RemoveAnimation (container, form) {
    container.classList.add('animate-none');
    form.classList.add('animate-none')
}

loginBtn.addEventListener('click', (e) => {
    loginContainer.classList.toggle('d-flex')
})

loginContainer.addEventListener('click', (e) => {
    CloseForm(loginContainer);
})

loginForm.addEventListener('click', (e) => {
    e.stopPropagation();
})

loginFormCancelBtn.addEventListener('click', () => {
    CloseForm(loginContainer);
})

for(const ohterBtn of otherLoginBtns) {
    ohterBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })
}

// SIGNUP FORM
var signupBtn = document.getElementById('signup_btn');
const signupContainer = document.getElementById('signup_container');
const signupForm = document.getElementById('signup_form')
const signupFormCancelBtn = document.getElementById('signup_form_cancel');
const otherSignupBtns = document.querySelectorAll('#signup_form .btn--socials');

signupBtn.addEventListener('click', (e) => {
    signupContainer.classList.toggle('d-flex')
})

signupContainer.addEventListener('click', (e) => {
    CloseForm(signupContainer);
})

signupForm.addEventListener('click', (e) => {
    e.stopPropagation();
})

signupFormCancelBtn.addEventListener('click', () => {
    CloseForm(signupContainer);
})

for(ohterBtn of otherSignupBtns) {
    ohterBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })
}

// FORM SWITCH
const redireactBtns = document.querySelectorAll('.form--redireact');

for(const redireactBtn of redireactBtns) {
    redireactBtn.addEventListener('click', () => {
        ToggleDisplay(loginContainer);
        ToggleDisplay(signupContainer);
        if(!loginContainer.classList.contains('animate-none'))
            RemoveAnimation(loginContainer, loginForm);
        if(!signupContainer.classList.contains('animte-none'))
            RemoveAnimation(signupContainer, signupForm);
    })
}
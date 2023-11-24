const form = document.querySelector('#formRegister');
 
const userNameError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const phoneError = document.querySelector('#phoneError');
const passwordError = document.querySelector('#passwordError');
const password2Error = document.querySelector('#password2Error');
const checkboxError = document.querySelector('#checkboxError');


form.addEventListener('submit', (e) => {
 
    e.preventDefault();
    const username = form['username'].value;
    const email = form['email'].value;
    const phone = form['phone'].value;
    const password = form['password'].value;
    const password2 = form['password2'].value;
    const check = form['checkbox'].checked;

    if (username === '' || username.length < 5) {
        userNameError.textContent = 'Username is required, at least 8 characteres';
        } else {
        userNameError.textContent = '';
        }
         
        if (!email.includes("@")) {
        emailError.textContent = 'Email is required';
        } else {
        emailError.textContent = '';
        }

        if (phone === '' ) {
        phoneError.textContent = 'Phone is required';
        } else if (!/^\d+$/.test(phone) && (!(phone.toString()[2] === 9))) {
            phoneError.textContent = 'Phone must contain only numbers and the 3º number must be 9';
        } else {
        phoneError.textContent = '';
        }
         
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (password === '') {
        passwordError.textContent = 'Password is required';
        } else if (!passwordRegex.test(password)) {
            passwordError.textContent = 'Password must be 8 characters, contain at least one uppercase letter, and one special character (!@#$%^&*)';
        } else {
        passwordError.textContent = '';
        }
         
        if (password2 === '') {
        password2Error.textContent = 'Password is required';
        } else {
        password2Error.textContent = '';
        }
         
        if (password !== password2) {
        password2Error.textContent = 'Password do not match';
        } else {
        password2Error.textContent = '';
        }
         
        if (!check) {
        checkboxError.textContent = 'Please check the box';
        } else {
        checkboxError.textContent = '';
        }
         
})


    
    
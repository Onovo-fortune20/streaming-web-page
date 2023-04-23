let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")

signinBtn.onclick= function(){
    nameField.style.maxHeight = "0"
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable")
    signinBtn.classList.remove("disable")
}

signupBtn.onclick= function(){
    nameField.style.maxHeight = "60px"
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable")
    signinBtn.classList.add("disable")
}
let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById('password')
let passwordconfirm = document.getElementById('conpassword')
let strengthBadge = document.getElementById('strength')
let passwordstatement = document.getElementById("passwordchecker")

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter) {
    // We then change the badge's color and text based on the password strength

    if (strongPassword.test(PasswordParameter)) {
        strengthBadge.style.color = "green"
        strengthBadge.textContent = 'Strong'
    }
    else if (PasswordParameter <= 0) {
        strengthBadge.textContent = ''
    }
    else if (mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.color = 'blue'
        strengthBadge.textContent = 'Medium'
    } else {
        strengthBadge.style.color = 'red'
        strengthBadge.textContent = 'Weak'
    }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {


    // strengthBadge.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);
    

});








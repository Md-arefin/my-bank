document.getElementById('btn-submit').addEventListener('click', function () {
    // step1 :collect value from email input field

    const emailField = document.getElementById('user-email')
    const email = emailField.value;

    // step2 : collect password value from password input field

    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;

    // step2 : collect password value from password input field

    const passwordConfirmField = document.getElementById('user-confirm-password')
    const passwordConfirm = passwordConfirmField.value;
    console.log(email,password,passwordConfirm)

    // step3: add condition for login to new page

    if (password === passwordConfirm){
        window.location.href = 'bank.html'
    }
})
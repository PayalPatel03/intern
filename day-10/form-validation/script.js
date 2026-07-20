let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

let validate = () => {
    console.log(email.value);

    //username
    if (username.value.trim() === "") {
        document.querySelector('.userError').classList.remove('d-none');
    }
    else {
        document.querySelector('.userError').classList.add('d-none');
    }

    //email
    if (email.value.trim() === "") {
        document.querySelector('.emailError').classList.remove('d-none');
    }
    else {
        document.querySelector('.emailError').classList.add('d-none');
    }

    //password
    if (password.value.trim() === "") {
        document.querySelector('.passwordError').classList.remove('d-none');
    }
    else {
        document.querySelector('.passwordError').classList.add('d-none');
    }


}

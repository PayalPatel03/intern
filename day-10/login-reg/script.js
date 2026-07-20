let form = document.getElementById('form');
let form1 = document.getElementById('form1');
document.getElementById('form1').style.display = 'none';
document.getElementById('card').style.display = 'none';
console.log(form);

let u_email;
let u_password;

form.addEventListener('submit',function(event){
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    u_email = email;
    u_password = password;
    formHide();
 })

 function formHide(){
    document.getElementById('form').style.display = 'none';
    document.getElementById('form1').style.display = 'block';
 }

form1.addEventListener('submit',function (event){
    event.preventDefault();

    let email1 = document.getElementById('email1').value;
    let password1 = document.getElementById('password1').value;

    if(email1 === u_email && password1 === u_password)
    {
        displayCard();
    }
    else
    {
        alert("Invalid Email or Password");
    }
 });

 function displayCard(){
    document.getElementById('card').style.display = 'block';
    document.getElementById('form1').style.display = 'none';
    document.getElementById('username').innerText = u_email;
 }
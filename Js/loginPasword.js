let login=document.getElementById('login');
let password=document.getElementById('password');
let checkclick=document.getElementById('remchek')
signIn.addEventListener('click',function (){
    if(checkclick.checked){
        alert(`Hello ${login.value} !`)
    }
    else{
        alert(`Hello ${login.value} !`)
        login.value=''
        password.value=''
    }
})
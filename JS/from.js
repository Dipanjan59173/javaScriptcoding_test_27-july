'use strict';
let btn = document.getElementById('btnsubmit')

// let email = document.querySelector('#btn')
// let  div1 = document.querySelectorAll('.myclass')
// let div=document.getElementsByClassName('myclass')[1]
function onBtnClick(){
    let userName = document.getElementById('uname').value
let email = document.getElementById('email').value
let pass = document.getElementById('pass').value
let cpass = document.getElementById('cpass').value
    if(userName.value=='NULL' || userName.value.length<4){
        div.innerHTML='Username must be3 atleast 3 characters'
    }
    let mailformat = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/;
    if(email!=null)
    {
        if(email.value.match(mailformat))
        {
        return true;
        }
        else{
            div.innerHTML= 'Email is not valid'

        }
    }
    if(pass==null || pass.length<7){
        div.innerHTML='Password must be atleast 6 characters'
    }
    if(cpass!==pass || cpass===null){
        div.innerHTML='password2 is required'
    }
    if(userName=='NULL' || userName.length<4){
        div.innerHTML='Username must be3 atleast 3 characters'
    }
}
btnsubmit.addEventListener('click',onBtnClick)
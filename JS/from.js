// 'use strict';
let btn = document.getElementById('btnsubmit')

// let email = document.querySelector('#btn')

// let div=document.getElementsByClassName('myclass')[1]
function onBtnClick(){
    let userName = document.getElementById('uname').value
    if(userName.value=='null' || userName.length<3 || userName.value==""){
        document.getElementById('name_e').innerHTML='Username must be atleast 3 characters';
    }
    else
    {
        document.getElementById('name_e').innerHTML='';
    }  
    
    //-----for email------ 
    let email = document.getElementById('email').value
    let emailCheck=ValidateEmail(email);
    
    if(emailCheck!= true)
    {
        document.getElementById('err_email').innerHTML= 'Email is not valid';
    }
    else
    {
        document.getElementById('err_email').innerHTML='';
    } 
        
    
        //-------Password------
    let pass = document.getElementById('pass').value
    let cpass = document.getElementById('cpass').value
     if(pass==null || pass.length<7){
        
        document.getElementById('e-pass').innerHTML='Password must be atleast 6 characters';
    }
    if(cpass!=pass || cpass==null){
        document.getElementById('e_c').innerHTML='confrimed password  is required';
    }
    else if (cpass!=pass)
        {
            document.getElementById('e_c').innerHTML='Password not matched with confirmed password';          
         }
    
    
}


function ValidateEmail(email) 
        {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) == false) 
        {        
        return false;
        }
        return true;
        }

//btn.addEventListener('click',validateForm)

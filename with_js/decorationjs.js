window.alert("Bienvenue sur mon CV");

let myname = document.getElementById("myname")
let information = document.getElementById("information")
var check = false

myname.onmouseover = function() {ShowInfor(information)}
myname.onmouseout = function() {HideInfor(information)}
myname.onclick= function(){ShowInforEver(information)}

function ShowInfor(targer) {
 if(check == false ){targer.style.visibility = 'visible'}
}

function HideInfor(target) {
 if(check == false){target.style.visibility = 'hidden'}
}

function ShowInforEver(targer){
 if(check == false){
    check = true
    targer.style.visibility = 'visible'
 }
}

var mymail = document.getElementById('mymail')
mymail.style.visibility = 'hidden'

function MailButtonFunction(){
    var ButtonMail = document.getElementById('ButtonMail')
       if(ButtonMail.style.display == 'block'){
          mymail.style.visibility = 'visible'  
          ButtonMail.style.display = 'none'
        }
       else
          ButtonMail.style.display = 'block'
}

// not-finish
var LessImportant1 = document.getElementById('LessImportant1')
var LessImportant2 = document.getElementById('LessImportant2')
LessImportant1.style.visibility = 'hidden'
LessImportant2.style.visibility = 'hidden'

function Clarifyinfor(){
    var PlusButton = document.getElementById('PlusButton')
       if(PlusButton.style.display == 'block'){
          LessImportant1.style.visibility = 'visible'  
          LessImportant2.style.visibility = 'visible'  
          PlusButton.style.display = 'none'
        }
       else
          PlusButton.style.display = 'block'
}
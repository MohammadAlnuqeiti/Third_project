let Trainers = JSON.parse(localStorage.getItem("Trainers")) || []

// clear local storage ----    
function logSubmit(event) {

    let trainId = Trainers.length
    let obj = { id:trainId.value, name: User.value, mail: Email.value, phone: Phone.value, password: Pass.value}
    Trainers.push(obj)
    let useCon = /^[a-zA-Z ]/
    let useCon1 = /[^a-zA-Z ]/
    let mailCon = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/
    let checkPass=/^^[A-Za-z]\w{8,31}$/
    let Mobilcheck = /^([+]\d{2})?\d{10}$/;
    //-----------------------------------------

    let a = false
    let b = false
    let c = false
    let d = false
    let f = false
    if(  User.value.match(useCon) ){
            a=true
            document.getElementById("errName").innerHTML = "" 
    }else{
        document.getElementById("errName").style.display = 'block'
        document.getElementById("errName").innerHTML = "**The name is not valid" 
    }
    if(  Email.value.match(mailCon) ){
            b=true
            document.getElementById("errEmail").innerHTML = ""

    }else{
        document.getElementById("errEmail").style.display = 'block'
        document.getElementById("errEmail").innerHTML = "**The email is not valid"
    }
    if(   Phone.value.match(Mobilcheck) ){
            c=true
            document.getElementById("errphon").innerHTML = ""
    }else{
        document.getElementById("errphon").style.display = 'block'
        document.getElementById("errphon").innerHTML = "**The phone is not valid"
    }
    if(   Pass.value.match(checkPass) ){
            d=true
            document.getElementById("match").innerHTML = ""

    }else{
        document.getElementById("match").style.display = 'block'
        document.getElementById("match").innerHTML = "**The password does not match"
    }
    if(  Pass.value ===  rePass.value ){
            f=true
    }else{
        document.getElementById("match").style.display = 'block'
        document.getElementById("match").innerHTML = "**The password does not match"
    }
    if(   a==true && b==true &&   c==true  &&  d==true   &&  f==true ){
        rePass.style.borderColor = ''
        document.getElementById("match").style.display = 'none'
        User.style.borderColor = ''
        document.getElementById("errName").style.display = 'none'
        Email.style.borderColor = ''
        document.getElementById("errEmail").style.display = 'none'
        Phone.style.borderColor = ''

        localStorage.setItem("Trainers", JSON.stringify(Trainers));
        window.open('./login.html', '_self')  
    }
    event.preventDefault();
 
}
let trainId = Trainers.length

const User = document.getElementById('username')
const Email= document.getElementById('email')
const Phone = document.getElementById('phone')
const Pass = document.getElementById('password')
const rePass = document.getElementById('repssword')
const form = document.getElementById('form')
form.addEventListener('submit', logSubmit)





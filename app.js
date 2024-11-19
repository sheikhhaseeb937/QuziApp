
var form = document.querySelector('.formwarp')
var quziBody =document.querySelector('.divinfo')
var inp =document.querySelector('.formInput')

var h1Email = document.getElementById('userEmail')
var h1Name = document.getElementById('userName')
var h1Roll = document.getElementById('userRoll')
var h1Univ = document.getElementById('userUniv')

// console.log(h1Email)

function getData(){
   
    var userName  = document.getElementById('name').value.toUpperCase()
    var userEmail  = document.getElementById('email').value
    var userRollno  = document.getElementById('rollno').value
    var userUniv  = document.getElementById('university').value.toUpperCase()
    console.log(userName,userEmail,userRollno,userUniv)
    if(!userEmail || !userName || !userRollno || !userUniv){
        alert("required fields are missing");
    
        return;
       }
       var isValid = userEmail.indexOf("@gmail.com");
       // console.log(isValid)
     
       if (isValid == -1) {
         alert("Wrong Email");
         return;
       }
    inp.style.display = 'none'
    quziBody.style.display = 'block'
    h1Email.innerHTML = userEmail
    h1Name.innerHTML = userName,
    h1Roll.innerHTML = userRollno
    h1Univ.innerHTML = userUniv
   
    

}

function nextQues(){
var nextQ = document.getElementById('question')
var nextQ2 = document.getElementById('question2')
// nextQ2.style.display="block"
nextQ.innerHTML = nextQ2.innerHTML
nextQ2.style.display="block"
}

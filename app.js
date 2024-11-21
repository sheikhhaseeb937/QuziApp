
var form = document.querySelector('.formwarp')
var quziBody =document.querySelector('.divinfo')
var inp =document.querySelector('.formInput')

var h1Email = document.getElementById('userEmail')
var h1Name = document.getElementById('userName')
var h1Roll = document.getElementById('userRoll')
var h1Univ = document.getElementById('userUniv')

// questionDiv
var quesDiv = document.querySelector('.divQues')
///btn restart
var rest = document.getElementById('btn1')
console.log(rest)
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
    quesDiv.style.display = 'block'

}
////question
var ques = document.querySelector('.question')
console.log(ques)
///option
var opt1 = document.querySelector('.option1')
var opt2 = document.querySelector('.option2')
var opt3 = document.querySelector('.option3')
var opt4 = document.querySelector('.option4')



// console.log(opt) 
var resultEnd =document.querySelector('.result')

var seleOpt =[
  {
    questions : 'JavaScript is a ....?',
    optA: 'Scrpting language',
    optB: 'Programing language',
    optC: 'Style language',
    optD: 'Design language',
    answer : 'Scrpting language'
  },

  {
    questions : 'JavaScript is a ___ -side programming language.',
    optA: 'Client',
    optB: 'Both',
    optC: 'Sever',
    optD: 'none',
    answer : 'Both'
  },

  {
    questions : 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
    optA: 'alertBox(“Hello DataFlair!”);',
    optB: ' alert(Hello DataFlair!);',
    optC: ' msgAlert(“Hello DataFlair!”);',
    optD: 'alert(“Hello DataFlair!”);',
    answer : 'alert(“Hello DataFlair!”);'
  },

  {
    questions : 'How do you find the minimum of x and y using JavaScript?  ',
    optA: ' min(x,y);',
    optB: 'Math.min(x,y)',
    optC: 'Math.min(xy)',
    optD: ' min(xy);',
    answer : 'Math.min(x,y)'
  },

  {
    questions : 'Which of the following statements will throw an error?Please select 2 correct answers',
    optA: 'var fun = function bar( ){ }',
    optB: 'var fun = function bar{ }',
    optC: ' function fun( ){ }',
    optD: ' function( ){ }',
    answer : 'var fun = function bar{ }',
     answer2 : ' function( ){ }'
  },
]
ques.innerHTML = seleOpt[0].questions
opt1.innerHTML = seleOpt[0].optA
opt2.innerHTML = seleOpt[0].optB
opt3.innerHTML = seleOpt[0].optC
opt4.innerHTML = seleOpt[0].optD


var quesCount = 0
function nextQues(ele){
 if(quesCount <seleOpt.length - 1){
quesCount = quesCount + 1
ques.innerHTML = seleOpt[quesCount].questions
opt1.innerHTML = seleOpt[quesCount].optA
opt2.innerHTML = seleOpt[quesCount].optB
opt3.innerHTML = seleOpt[quesCount].optC
opt4.innerHTML = seleOpt[quesCount].optD

 }else{
  console.log('no Ques')
   
  quesDiv.innerHTML = ""
 resultEnd.style.display = "block"
rest.style.display = "block"
}




}



// var newinput = input  = opt1
// console.log(newinput.innerHTML)
var paraResult = document.querySelector('.resultHeading')
console.log(paraResult.innerHTML)

var countResult = 0

function match(ele){
  var input = ele.nextElementSibling
  console.log(input)
 
  if(input.innerHTML === seleOpt[0].answer || input.innerHTML === seleOpt[1].answer
    || input.innerHTML === seleOpt[2].answer|| input.innerHTML === seleOpt[3].answer
    || input.innerHTML === seleOpt[4].answer || input.innerHTML === seleOpt[4].answer2){
console.log('true')
countResult = countResult+10;
console.log(countResult)
 paraResult.innerHTML = countResult
var str = "result" + paraResult.innerHTML


return;
  }else{
    console.log('false')
  }
}


function restart(){
// form.style.display = "block"
//  inp.style.display = "block"


}





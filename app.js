
var form = document.querySelector('.formwarp').children[0]
// var form2 =document.querySelector('.formwarp').children[1]
console.log(form)
var quziBody =document.querySelector('.divinfo')
var inp =document.querySelector('.formInput')

var h1Email = document.getElementById('userEmail')
var h1Name = document.getElementById('userName')
var h1Roll = document.getElementById('userRoll')
var h1Univ = document.getElementById('userUniv')
var radioInp = document.querySelector('.inp1')
var radioInp = document.querySelector('.inp2')
var radioInp = document.querySelector('.inp3')
var radioInp = document.querySelector('.inp4')
var btnNext = document.getElementById('nextBtn')
var inpurs1 = document.getElementById('inputs').children[0]
var inpurs2 = document.getElementById('inputs').children[3]
var inpurs3 = document.getElementById('inputs').children[6]
var inpurs4 = document.getElementById('inputs').children[9]



var totalQ = document.getElementById('tQues')
var corrAns = document.getElementById('cAns')
var worAns = document.getElementById('wAns')
var totalNum = document.getElementById('tNum')

// console.log(totalQues)

// questionDiv
var quesDiv = document.querySelector('.divQues')
///btn restart
var rest = document.getElementById('btn1')
console.log(rest)
// console.log(h1Email)

///inputs//
var naMe = document.getElementById('name')
var eMail = document.getElementById('email')
var rolNo = document.getElementById('rollno')
var univer= document.getElementById('university')



function getData(){
   
    var userName  = document.getElementById('name').value.toUpperCase()
    var userEmail  = document.getElementById('email').value
    var userRollno  = document.getElementById('rollno').value
    var userUniv  = document.getElementById('university').value.toUpperCase()
    console.log(userName,userEmail,userRollno,userUniv)
    // if(!userEmail || !userName || !userRollno || !userUniv){
    //     alert("required fields are missing");
    
    //     return;
    //    }
    //    var isValid = userEmail.indexOf("@gmail.com");
    //    // console.log(isValid)
     
    //    if (isValid == -1) {
    //      alert("Wrong Email");
    //      return;
    //    }
    inp.style.display = 'none'
    quziBody.style.display = 'block'
    h1Email.innerHTML = userEmail
    h1Name.innerHTML = userName,
    h1Roll.innerHTML = userRollno
    h1Univ.innerHTML = userUniv
    quesDiv.style.display = 'block'

  btnNext.style.display = "none"
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
    
    option:{
      optA: 'Scrpting language',
      optB: 'Programing language',
      optC: 'Style language',
      optD: 'Design language',
    },
    answer : 'Scrpting language'
  },

  {
    questions : 'JavaScript is a ___ -side programming language.',
    
    option:{
      optA: 'Client',
    optB: 'Both',
    optC: 'Sever',
    optD: 'none',
    },
    answer : 'Both'
  },

  {
    questions : 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
   
    option:{
      optA: 'alertBox(“Hello DataFlair!”);',
      optB: ' alert(Hello DataFlair!);',
      optC: ' msgAlert(“Hello DataFlair!”);',
      optD: 'alert(“Hello DataFlair!”);',
    },
    answer : 'alert(“Hello DataFlair!”);'
  },

  {
    questions : 'How do you find the minimum of x and y using JavaScript?  ',
    
    option:{
      optA: ' min(x,y);',
      optB: 'Math.min(x,y)',
      optC: 'Math.min(xy)',
      optD: ' min(xy);',
    },
    answer : 'Math.min(x,y)'
  },

  {
    questions : 'Which of the following statements will throw an error?Please select 2 correct answers',
   
    option:{
    optA: 'var fun = function bar( ){ }',
    optB: 'var fun = function bar{ }',
    optC: ' function fun( ){ }',
    optD: ' function( ){ }',
    },
    answer : ' function fun( ){ }',
   
  },
]
var quesCount = 0
ques.innerHTML = seleOpt[quesCount].questions
opt1.innerHTML = seleOpt[quesCount].option.optA
opt2.innerHTML = seleOpt[quesCount].option.optB
opt3.innerHTML = seleOpt[quesCount].option.optC
opt4.innerHTML = seleOpt[quesCount].option.optD


var totalQues = seleOpt.length

var correctAns = 0
var wrongAns = 0
var countResult = 0


function nextQues(ele){
 if(quesCount <seleOpt.length-1){
quesCount = quesCount + 1
console.log(quesCount)
ques.innerHTML = seleOpt[quesCount].questions
opt1.innerHTML = seleOpt[quesCount].option.optA
opt2.innerHTML = seleOpt[quesCount].option.optB
opt3.innerHTML = seleOpt[quesCount].option.optC
opt4.innerHTML = seleOpt[quesCount].option.optD

inpurs1.checked  = false
inpurs2.checked  = false
inpurs3.checked  = false
inpurs4.checked  = false

 }else{
  console.log('no Ques')
   
  quesDiv.innerHTML = ""
 resultEnd.style.display = "block"
rest.style.display = "block"

inpurs1.checked  = false
inpurs2.checked  = false
inpurs3.checked  = false
inpurs4.checked  = false
}





 btnNext.style.display = 'none'

totalQ.innerHTML = totalQues
corrAns.innerHTML = correctAns
worAns.innerHTML=wrongAns
totalNum.innerHTML = countResult

}



// var newinput = input  = opt1
// console.log(newinput.innerHTML)




function match(ele){
  var input = ele.nextElementSibling
  console.log(input)
 


 
    if(input.innerHTML === seleOpt[quesCount].answer){
      countResult = countResult+10;
      correctAns =correctAns+ 1
      
      btnNext.style.display = 'block'
      
    }else{
      console.log('false')
    btnNext.style.display = 'block'
wrongAns = wrongAns +1
    }
   


}




function restart(){




document.querySelector('.result').style.display="none"
document.getElementById('btn1').style.display= "none"

window.location.reload();
}





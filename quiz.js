  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
//   import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, set, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"; 

  var firebaseConfig = {
    apiKey: "AIzaSyDiQK8DeAwrg7fSqr6TxzdWzZh-FE1FVrI",
    authDomain: "quiz-app-f0060.firebaseapp.com",
    projectId: "quiz-app-f0060",
    storageBucket: "quiz-app-f0060.appspot.com",
    messagingSenderId: "1012184608789",
    appId: "1:1012184608789:web:a8afc81b28e5f43035de1c",
    measurementId: "G-7075257M8W"
  };

  var app = initializeApp(firebaseConfig);
//   var auth = getAuth(app);
var DATABASE = getDatabase(app);


 
var scoreValue = document.getElementById("scoreValue");
var countdown = document.getElementById("countdown");
var quizList = [];

var questionIndex = 0;
var score = 0;


function gettingQuizFromDatabase(){
    var refe = ref(DATABASE,'Quiz Data');
    onChildAdded(refe, function(quizData){
        renderQ(quizData.val())
    })
}
window.onload = gettingQuizFromDatabase()


function renderQ(quizData) {
  var questionNO = document.getElementById("QuestionNo");
  var optionsNo = document.getElementById("optionsNo");
  var questionCount = document.getElementById("questionCount");
  var nextQu = document.getElementById("nextQ");
  
    if(questionIndex < quizData.length){
      quizData.push(quizData)
      questionNO.innerHTML = quizData[questionIndex].question;
      questionCount.innerHTML = `current question : ${questionIndex + 1}/ ${quizData.length}`;
       optionsNo.innerHTML = '';
       nextQu.innerHTML = "Next"
       for(var i=0;i<quizData[questionIndex].options.length; i++){
        optionsNo.innerHTML += `<button>${quizData.id[questionIndex].options[i]}asdfg</button>` 
       }
        // for (var i = 0; i < quizData[questionIndex].options.length; i++) {
        //   optionsNo.innerHTML += `<button class="btn btn-dark mx-5 my-4 d-flex text-center text-center px-5"
        //    onclick="chekingAns('${quizData[questionIndex].options[i]}',
        //    '${quizData[questionIndex].Answer}')">
        //     ${quizData[questionIndex].options[i]}</button>`;
      // }
    } 
    console.log(quizData.options)
  }
// //     var quiz = {
// //         questions:question.value,
// //         options: [option1.value,
// //             option2.value,
// //             option3.value,
// //             option4.value
// //         ],
// //         Answer:answer.value
// //     }
//     if (questionIndex < ${'Quiz Data'}.length) {
//         question.innerHTML = quiz[questionIndex].question;
//         questionCount.innerHTML = `current question : ${questionIndex + 1}/ ${quiz.length}`;
//         options.innerHTML = '';
//         nextQu.innerHTML = "Next"
//         for (var i = 0; i < quiz[questionIndex].options.length; i++) {
//             options.innerHTML += `<button class="btn btn-dark mx-5 my-4 d-flex text-center text-center px-5"
//              onclick="chekingAns('${quiz[questionIndex].options[i]}',
//              '${quiz[questionIndex].Answer}')">
//               ${quiz[questionIndex].options[i]}</button>`;
//         }

//     else{
//         endOfQuiz()
//     }
// }
// 

function endOfQuiz(){
    question.innerHTML = "QUIZ COMPLETED";
    var percentage = (score / (quiz.length * 5)) * 100;
    questionCount.textContent = `Your percentage is ${percentage}%`;
    options.innerHTML = "";
    scoreValue.textContent = score;

    var restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    options.appendChild(restartButton);
    restartButton.className ='btn btn-outline-dark' 
    nextQu.style.display = "none"
  countdown.className = "none"
}

window.nextQ = function(){
    questionIndex++;
    renderQ()
}

function chekingAns(userAns,Ans){
    if(userAns === Ans){
        score = score + 5
    }else{
        console.log("wrong")
    }
    nextQ();
    console.log("SCORE ====>",score);
}

// function restartQuiz() {
//     questionIndex = 0;
//     score = 0;
//     renderQ();
//     startCountdown();
//     nextQu.style.display = "block";
// }
// restartQuiz()

// var timer;
// var totalTime = 15 * 60; 

// function startCountdown() {
//     timer = setInterval(function () {
//         if (totalTime <= 0 || questionIndex >= quiz.length) {
//             clearInterval(timer);
//             endOfQuiz();
//         } else {
//             var minutes = Math.floor(totalTime / 60);
//             var seconds = totalTime % 60;
//             countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//             totalTime--;
//         }
//     }, 1000); 
// }

// startCountdown();

// var email = getElementById("email");
// var pass  = getElementById("password");
// window.submitD = function(){
    
// }
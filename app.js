 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
 import { getDatabase, ref, set, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

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
 var auth = getAuth(app);
 var DATABASE = getDatabase(app);


 
 

 function render(){
    var SignIn = document.getElementById("Sign-in");
    var inp = document.getElementById('inp');
    SignIn.className = 'd-none';
    inp.innerHTML = `
    <div class="row">
        <div class="col-md-6 align-self-center d-flex justify-content-around  flex-column">
            <h1 class=" mb-5">QUIZ DATA</h1>
            
   
   <div class="input-group input-group-lg mb-5">
    <span class="input-group-text" id="inputGroup-sizing-lg">QUESTION:</span>
    <input id="question" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
   </div>
   <div class="input-group input-group-lg  mb-3">
    <span class="input-group-text" id="inputGroup-sizing-lg">OPTIONS1</span>
    <input id="option1" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
   </div>
   <div class="input-group input-group-lg mb-3">
    <span class="input-group-text" id="inputGroup-sizing-lg">OPTIONS2</span>
    <input id="option2" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
   </div>
   <div class="input-group input-group-lg mb-3">
    <span class="input-group-text" id="inputGroup-sizing-lg">OPTIONS3</span>
    <input id="option3" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
   </div>
   <div class="input-group input-group-lg mb-5">
    <span class="input-group-text" id="inputGroup-sizing-lg">OPTIONS4</span>
    <input id="option4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
   </div>
   
   <div class="input-group input-group-lg mb-5">
    <span class="input-group-text" id="inputGroup-sizing-lg">ANSWER</span>
    <input id="answer" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
   </div>
   <button class="btn btn-danger" onclick="quizQuestions()">ADD</button>
        </div>
    </div>
   `
 }


window.quizQuestions = function(){

    var question = document.getElementById('question');
    var option1 = document.getElementById('option1');
    var option2= document.getElementById('option2');
    var option3 = document.getElementById('option3');
    var option4 = document.getElementById('option4');
    var answer = document.getElementById('answer');


    var objData =
         {
            questions:question.value,
            options: [option1.value,
                option2.value,
                option3.value,
                option4.value
            ],
            Answer:answer.value
        }
    
    
    var refekey = ref(DATABASE);
    var rendomId = push(refekey).key;
    objData.id = rendomId;
    var reference = ref(DATABASE,`Quiz Data/${objData.id}`)
    set(reference,objData);
    // console.log(objData)


}


window.signin = function(){
    var user = {
         email : document.getElementById('email'),
     password : document.getElementById('password')
    }
    createUserWithEmailAndPassword(auth, user.email.value, user.password.value)
    .then(function(succ){
        console.log(succ)
    //     SignIn.className = 'd-none'
    //     render()
    // //    if(email === 'a@gmail.com'){

        render()
   
    }).catch(function(err){
     console.log(err)
    })
}


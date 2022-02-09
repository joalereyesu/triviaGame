var db = require('./db.json');
var allQuestions = db.Questions;
var allChoices = db.Choices;

function loadQuestions(){
    var fiveQsIndex = [];
    for (let i = 0; i<5; i++) {
        fiveQsIndex[i] = Math.floor(Math.random() * 20);
    }
    var fiveQs = [];
    var fiveCs = [];
    for (let i = 0; i < 5; i++){
        fiveQs[i] = allQuestions[fiveQsIndex[i]];
        fiveCs[i] = allChoices[fiveQsIndex[i]];
    }
    let questions = document.getElementById('question');
    let choices = document.getElementById('choices');
    fiveQs.forEach(element => {
        let p = document.createElement("p");
        p.innerHTML = element;
        questions.appendChild(p);
        fiveCs.forEach(key, values => {
            let li = document.createElement("li");
            li.innerHTML = key;
            choices.appendChild(li);
            console.log(key);
        });
    });
}

loadQuestions()






db = {
    Questions: [
        "Who killed Thanos?",
        "During which war did Captain America get his superhuman abilities?",
        "What is the name of Peter Quill’s home planet?",
        "Which of the following characters did not disappear during the 'blip'?",
        "Where was Natasha Romanoff born?",
        "In which of the following movies does the character Taserface appear?",
        "How did Steve Rogers and Sam Wilson meet for the first time?",
        "What was Steven Strange’s career before he learned to use magic?",
        "What type of radiation gave Bruce Banner the ability to turn into the Hulk?",
        "What is the name of the planet that the Soul Stone can be found on?",
        "What are the leaders of the TVA in the Loki Series called?",
        "What does Thanos want to bring to the universe?",
        "The Flerkens are a race of extremely dangerous aliens that resembles what?",
        "Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
        "What is the alien race Loki sends to invade Earth in The Avengers?",
        "Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
        "About which city do Hawkeye and Black Widow often reminisce?",
        "Who does Thanos sacrifice to acquire the Soul Stone?",
        "Where do Lady Sif and Volstagg keep the Reality Stone after the Dark Elves tried to steal it?",
        "What is Captain America’s shield made of?"
    ],
    Choices :[
        {
            "Iron Man" : true,
            "Thor" : false,
            "Gamora": false,
            "Wanda" : false
        },
        {
            "Civil War":false,
            "World War I":false,
            "Worlds War II":true,
            "The Cold War":false
        },
        {
            "Mordor":false,
            "Goddricks Hollow":false,
            "Earth":true,
            "Morag":false
        },
        {
            "Spiderman":false,
            "Black Panther":false,
            "Doctor Strange":false,
            "Rocket":true
        },
        {
            "Germany":false,
            "Russia":true,
            "United States of America": false,
            "Wakanda":false
        },
        {
            "Blade":false,
            "X-Men":false,
            "Guardians of the Galaxy Vol 2":true,
            "Deadpool":false
        },
        {
            "While running":true,
            "At a bar":false,
            "In the army":false,
            "At a museum":false
        },
        {
            "An Accountant":false,
            "A Lawyer":false,
            "A Neurosurgeon":true,
            "An Astronaut":false
        },
        {
            "Gamma":true,
            "Infrared":false,
            "Ultraviolet":false,
            "Microwave":false
        },
        {
            "Titan":false,
            "Vormir":true,
            "Morag": false,
            "Xandar":false
        },
        {
            "Peacekeepers":false,
            "Gatekeepers":false,
            "Stonekeepers":false,
            "Timekeepers":true
        },
        {
            "Hope":false,
            "Balance":true,
            "Peace":false,
            "Destruction":false
        },
        {
            "Cats":true,
            "Ducks":false,
            "Reptiles":false,
            "Raccoons":false
        },
        {
            "H.O.M.E.R.":false,
            "J.A.R.V.I.S.":true,
            "A.L.F.R.E.D.":false,
            "M.A.R.V.I.N.":false
        },
        {
            "The Chitauri":true,
            "The Skrulls":false, 
            "The Kree":false,
            "The Flerkens":false
        },
        {
            "Thor":false,
            "Loki":true,
            "The Collector":false, 
            "Tony Stark":false
        },
        {
            "Budapest":true,
            "Prague":false,
            "Istanbul":false,
            "Sokovia":false
        },
        {
            "Nebula":false,
            "Ebony Maw":false,
            "Cull Obsidian":false,
            "Gamora":true
        },
        {
            "On Vormir":false,
            "In a vault on Asgard":false,
            "Inside Sif’s sword":false,
            "To the Collector":true
        },
        {
            "Adamantium":false,
            "Vibranium":true,
            "Promethium":false,
            "Carbonadium":false
        }
        
    ]
}

function loadQuestions(){
    var fiveQs = [];
    var fiveCs = [];
    for (let i = 0; i < 5; i++){
        let randNum = Math.floor(Math.random() * 20);
        fiveQs.push(db.Questions[randNum]);
        fiveCs.push(db.Choices[randNum]);
    }
    for (let i = 0; i < 5; i++){
        let option = document.getElementById('option');
        let p = document.createElement("p");
        p.innerHTML = (i+1)+". "+fiveQs[i];
        p.classList.add('question')
        option.appendChild(p);
        let op = fiveCs[i];;
        let options = Object.keys(op);
        let correct = Object.values(op)
        let div = document.createElement("div");
        div.classList.add('choices_container');
        for (let j = 0; j < options.length; j++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            option.appendChild(div);
            input.setAttribute("type", "radio");
            input.setAttribute("name", "option"+i);
            input.setAttribute("id", correct[j]);
            input.setAttribute("value", correct[j]);
            label.setAttribute("for", options[j]);
            label.innerHTML = options[j];
            div.appendChild(input);
            div.appendChild(label);
        }
        option.appendChild(div);
    }
}

function checkAnswers(){
    let score = 0;
    for (let i = 0; i < 5; i++){
        let choice = document.getElementsByName("option"+i);
        console.log(choice[i].checked);
        // for (let j = 0; j <= 4; j++){
        //     if (choice[j].checked){
        //         console.log(choice[j].value)
        //         if (choice[j].value == 'true'){
        //             score = score + 20;
        //             console.log(score);
        //         }
                // console.log(answer);
                // for (let y = 0; y <= db.Choices.length; y++){
                //     let choices = Object.keys(db.Choices[y]);
                //     console.log(choices);
                //     let correct = Object.values(db.Choices[y]);
                //     for (let k = 0; k<= choices.length; k++){
                //         if (answer == choices[k])
                //         {
                //             if(correct[k] === true){
                //                 score = score + 20;
                //             }
                //         }
                //     }
                // }
            
        
    }
}



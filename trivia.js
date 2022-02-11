db = {
    "Questions": [
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
    "Choices" :[
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
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerHTML = (i+1)+". "+fiveQs[i];
        p.classList.add('question')
        option.appendChild(p);
        let op = fiveCs[i];;
        let options = Object.keys(op);
        console.log(options);
        for (let i = 0; i < options.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = options[i];
            option.appendChild(li);
        }
    }
}

//let questions, choices = loadQuestions();

// function getTriviaInfo(qs, cs) {
//     let questions = document.getElementById('question');
//     let choices = document.getElementById('choices');
//     for (let i = 0; i < 5; i++){
//         let p = document.createElement("p");
//         p.innerHTML = qs[i];
//         questions.appendChild(p);
//         let options = Object.keys(cs[i]);
//         for (let i = 0; i < options.length; i++) {
//             let li = document.createElement("li");
//             li.innerHTML = options[i];
//             choices.appendChild(li);
//         }
        
//     }
// }


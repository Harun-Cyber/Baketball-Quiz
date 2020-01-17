const allQuestions = document.getElementById("questions")
const buttonStart = document.getElementById("button-start")
const buttonNext = document.getElementById("button-volgende")
const questionHTML = document.getElementById("question")
const answerButton = document.getElementById("buttons")
const sendButton = document.getElementById("button-verzenden")

buttonStart.addEventListener("click", quizStart)

sendButton.addEventListener("click", showingPlayer)

buttonNext.addEventListener("click", nextQuestion) 

let questionCurrent

let questionArray

var player = {
    Isaiah_Thomas: 0,           //175 cm    //187sw
    JJ_Barea: 0,                //178 cm    //180sw
    Kemba_Walker: 0,            //183 cm    //192sw
    Trae_Young: 0,              //188 cm    //188sw
    Damian_Lillard: 0,          //188 cm    //203sw
    Steph_Curry: 0,             //191 cm    //192sw
    JJ_Reddick: 0,              //193 cm    //191sw
    James_Harden: 0,            //196 cm    //210sw
    Kawhi_Leanard: 0,           //201 cm    //221sw
    Luka_Doncic: 0,             //201 cm    //210sw
    Paul_George: 0,             //206 cm    //211sw
    Pascal_Siakam: 0,           //206 cm    //222sw
    Bojan_Bogdanovic: 0,        //208 cm    //211sw
    Davis_Bertans: 0,           //208 cm    //213sw
    Danilo_Galinari: 0,         //208 cm    //218sw
    Karl_Anthony_Towns: 0,      //213 cm    //222sw
    Jaren_Jackson_Jr: 0,        //211 cm    //224sw
    Kristaps_Porzingis: 0       //229 cm    //229sw
};

function quizStart(){
    //Zorgt ervoor dat de Startknop verdwijnt na het klikken en dat de vragen tevoorschijn komen...
    buttonStart.classList.add("hide")
    questionArray = questions.sort(() => Math.random() - .5)
    questionCurrent = 0
    allQuestions.classList.remove("hide")
    nextQuestion()
}

function nextQuestion(){
    quizResetter()
    questionShower(questionArray[questionCurrent])
}

function questionShower(question){
    questionHTML.innerHTML = question.question
    var idCounter = 1;
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button") 
        button.setAttribute("id",idCounter)
        button.addEventListener("click", resultShower)
        answerButton.appendChild(button)
        idCounter++;
    });
    idCounter = 0;
}



function showingPlayer(){
    if(player.Isaiah_Thomas > player.Kawhi_Leanard){
        window.location = "https://www.google.nl/"
    }
}



function quizResetter(){
    buttonNext.classList.add("hide")
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function questionFour(){
    var PressedButton = event.target
    if(PressedButton.id == 1){
        questions[3].answers.a = true
        if(questions[3].answers.a){
            player.Bojan_Bogdanovic++
        }
    }
    if(PressedButton.id == 2){
        questions[3].answers.b = true
        if(questions[3].answers.b){
        }
    }
    if(PressedButton.id == 3){
        questions[3].answers.c = true
        if(questions[3].answers.c){
        }
    }
}

function questionThree(){
    var PressedButton = event.target
    if(PressedButton.id == 1){
        questions[2].answers.a = true
        if(questions[2].answers.a){
            player.Karl_Anthony_Towns++
            player.Kristaps_Porzingis++
        }
    }
    if(PressedButton.id == 2){
        questions[2].answers.b = true
        if(questions[2].answers.b){
            player.Danilo_Galinari++
            player.Bojan_Bogdanovic++
            player.Steph_Curry++
            player.Luka_Doncic++
        }
    }
    if(PressedButton.id == 3){
        questions[2].answers.c = true
        if(questions[2].answers.c){
            player.JJ_Barea++
            player.Davis_Bertans++
            player.Trae_Young++
            player.Isaiah_Thomas++
            player.Jaren_Jackson_Jr++
            player.Pascal_Siakam++
            player.James_Harden++
        }
    }
    if(PressedButton.id == 4){
        questions[2].answers.d = true
        if(questions[2].answers.d){
            player.Damian_Lillard++
            player.Paul_George++
            player.Kawhi_Leanard++
            player.JJ_Reddick++
            player.Kemba_Walker++
        }
    }
}

function questionTwo(){
    var PressedButton = event.target
    if(PressedButton.id == 1){
        questions[1].answers.a = true
        if(questions[1].answers.a){
            player.JJ_Barea++
        }
    }
    if(PressedButton.id == 2){
        questions[1].answers.b = true
        if(questions[1].answers.b){
            player.Isaiah_Thomas++
            player.Kemba_Walker++
            player.Trae_Young++
            player.Steph_Curry++
            player.JJ_Barea++
        }
    } 
    if(PressedButton.id == 3){
        questions[1].answers.c = true
        if(questions[1].answers.c){
            player.Damian_Lillard++
        }
    }
    if(PressedButton.id == 4){
        questions[1].answers.d = true
        if(questions[1].answers.d){
            player.James_Harden++
            player.Luka_Doncic++
            player.Paul_George++
            player.Bojan_Bogdanovic++
        }
    }
    if(PressedButton.id == 5){
        questions[1].answers.e = true
        if(questions[1].answers.e){
            player.Davis_Bertans++
        }
    }
    if(PressedButton.id == 6){
        questions[1].answers.f = true
        if(questions[1].answers.f){
            player.Kawhi_Leanard++
            player.Pascal_Siakam++
            player.Danilo_Galinari++
            player.Karl_Anthony_Towns++
        }
    }
    if(PressedButton.id == 7){
        questions[1].answers.f = true
        if(questions[1].answers.f){
            player.Jaren_Jackson_Jr++
            player.Kristaps_Porzingis++
        }
    }
}

function questionOne(){
    var PressedButton = event.target  
    if(PressedButton.id == 1){
        questions[0].answers.a = true
        if(questions[0].answers.a){
            player.Isaiah_Thomas++
            player.JJ_Barea++
        }
    }
    if(PressedButton.id == 2){
        questions[0].answers.b = true
        if(questions[0].answers.b){
            player.JJ_Barea++
            player.Kemba_Walker++
        }
    }
    if(PressedButton.id == 3){
        questions[0].answers.c = true
        if(questions[0].answers.c){
            player.Trae_Young++
            player.Damian_Lillard++
            player.Steph_Curry++
            player.JJ_Reddick++
        }
    }
    if(PressedButton.id == 4){
        questions[0].answers.d = true
        if(questions[0].answers.d){
            player.JJ_Reddick++
            player.James_Harden++
        }
    }
    if(PressedButton.id == 5){
        questions[0].answers.e = true
        if(questions[0].answers.e){
            player.James_Harden++
            player.Luka_Doncic++
            player.Kawhi_Leanard++
        }
    }
    if(PressedButton.id == 6){
        questions[0].answers.f = true
        if(questions[0].answers.f){
            player.Pascal_Siakam++
            player.Paul_George++
            player.Bojan_Bogdanovic++
            player.Danilo_Galinari++
            player.Davis_Bertans++
        }
    }
    if(PressedButton.id == 7){
        questions[0].answers.g = true
        if(questions[0].answers.g){
            player.Bojan_Bogdanovic++
            player.Danilo_Galinari++
            player.Davis_Bertans++
            player.Karl_Anthony_Towns++
            player.Jaren_Jackson_Jr++
            player.Kristaps_Porzingis++
        }
    }
}
function resultShower(){
    questionOne()
    questionTwo()
    if(questionArray.length > questionCurrent + 1){
        buttonNext.classList.remove("hide")
        questionCurrent++
    }
    else{
        sendButton.classList.remove("hide")    
    }
}

    const questions = [
        {
            question: "Welke van de onderstaande lichaamslengtes is het dichtst bij die van jou?",
            answers: [
                {text: "175cm", a: false},
                {text: "180cm", b: false},
                {text: "190cm", c: false},
                {text: "195cm", d: false},
                {text: "200cm", e: false},
                {text: "205cm", f: false},
                {text: "210cm", g: false}
            ]
        },
        {
            question: "Welke van de onderstaande spanwijdtes is het dichtst bij die van jou?",
            answers: [
                {text:"180cm", a: false},
                {text:"190cm", b: false},
                {text:"200cm", c: false},
                {text:"210cm", d: false},
                {text:"215cm", e: false},
                {text:"220cm", f: false},
                {text:"225cm", g: false}
            ]
        },
        {
            question:  "Hoe hoog spring je als je de bal schiet?",
            answers: [
                {text:"Ik spring niet", a: false},
                {text:"Ik spring laag", b: false},
                {text:"Ik spring normaal", c: false},
                {text:"Ik spring hoog", d: false}
            ]
        },
        {
            question: "Schiet je de bal door met je pols de bal te duwen of door met je arm de bal te duwen?",
            answers: [
                {text: "Meer mijn pols dan mijn arm", a: false},
                {text: "Meer mijn arm dan mijn pols", b: false},
                {text: "Mijn arm en pols werken allebei evenveel mee om de bal te schieten", c: false}
            ]
        },
        {
            question: "Hoe staat je elleboog van de arm waarmee je schiet als je de bal probeert te schieten?",
            answers: [
                {text: "Mijn elleboog staat recht onder de bal als ik de bal schiet", a: false},
                {text: "Mijn elleboog staat aan de buitenkant van de bal", b: false},
                {text: "Mijn elleboog staat meer naar mijn lichaam toe", c: false}
            ]
        },
        {
            question: "Als je de bal schiet, is de bal dan gelijk aan je hoofd, boven je hoofd of onder je hoofd?",
            answers: [
                {text: "De bal is gelijk aan mijn hoofd", a: false},
                {text: "De bal is boven mijn hoofd", b: false},
                {text: "De bal is onder mijn hoofd", c: false}
            ]
        }
    ]


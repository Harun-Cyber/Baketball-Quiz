const allQuestions = document.getElementById("questions")
const buttonStart = document.getElementById("button-start")
const buttonNext = document.getElementById("button-volgende")
const questionHTML = document.getElementById("question")
const answerButton = document.getElementById("buttons")
const sendButton = document.getElementById("button-verzenden")

buttonStart.addEventListener("click", quizStart)

buttonNext.addEventListener("click", nextQuestion) 

let questionCurrent

let questionArray

var player = {
    Isaiah_Thomas: 0,           //175 cm
    JJ_Barea: 0,                //178 cm
    Kemba_Walker: 0,            //183 cm
    Trae_Young: 0,              //188 cm    
    Damian_Lillard: 0,          //188 cm
    Steph_Curry: 0,             //191 cm 
    JJ_Reddick: 0,              //193 cm
    James_Harden: 0,            //196 cm 
    Kawhi_Leanard: 0,           //201 cm
    Luka_Doncic: 0,             //201 cm
    Paul_George: 0,             //206 cm
    Pascal_Siakam: 0,           //206 cm
    Bojan_Bogdanovic: 0,        //208 cm
    Davis_Bertans: 0,           //208 cm
    Danilo_Galinari: 0,         //208 cm
    Karl_Anthony_Towns: 0,      //213 cm
    Jaren_Jackson_Jr: 0,        //211 cm
    Kristaps_Porzingis: 0       //229 cm
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
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button")
        button.addEventListener("click", resultShower)
        answerButton.appendChild(button)
    });
}

function resultShower(){
    if(questionArray.length > questionCurrent + 1){
        buttonNext.classList.remove("hide")
        questionCurrent++
    }
    else{
        sendButton.classList.remove("hide")
    }
}

function quizResetter(){
    buttonNext.classList.add("hide")
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
const questions = [
    {
        question: "Welke van de onderstaande lichaamslengtes is het dichtst bij die van jou?",
        answers: [
            {text: "175cm", a: true},
            {text: "180cm", b: true},
            {text: "190cm", c: true},
            {text: "195cm", d: true},
            {text: "200cm", e: true},
            {text: "205cm", f: true},
            {text: "210cm", g: true}
        ]
    },
    {
        question: "Welke van de onderstaande spanwijdtes is het dichtst bij die van jou?",
        answers: [
            {text:"180cm", a: true},
            {text:"185cm", b: true},
            {text:"190cm", c: true},
            {text:"200cm", d: true},
            {text:"205cm", e: true},
            {text:"210cm", f: true},
            {text:"215cm", g: true}
        ]
    }
]
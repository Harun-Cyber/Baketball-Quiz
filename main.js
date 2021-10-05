const allQuestions = document.getElementById("questions")
const buttonStart = document.getElementById("button-start")
const buttonNext = document.getElementById("button-volgende")
const questionHTML = document.getElementById("question")
const answerButton = document.getElementById("buttons")
const sendButton = document.getElementById("button-verzenden")

buttonStart.addEventListener("click", quizStart)

sendButton.addEventListener("click", showingPlayer)

buttonNext.addEventListener("click", nextQuestion) 

let test = "Github Desktop"

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
    if(player.Isaiah_Thomas >= player.Kawhi_Leanard && player.Isaiah_Thomas >= player.Damian_Lillard && player.Isaiah_Thomas >= player.Bojan_Bogdanovic && player.Isaiah_Thomas >= player.Danilo_Galinari && player.Isaiah_Thomas >= player.Davis_Bertans && player.Isaiah_Thomas >= player.JJ_Barea && player.Isaiah_Thomas >= player.JJ_Reddick && player.Isaiah_Thomas >= player.James_Harden && player.Isaiah_Thomas >= player.Jaren_Jackson_Jr && player.Isaiah_Thomas >= player.Karl_Anthony_Towns && player.Isaiah_Thomas >= player.Kemba_Walker && player.Isaiah_Thomas >= player.Kristaps_Porzingis && player.Isaiah_Thomas >= player.Luka_Doncic && player.Isaiah_Thomas >= player.Pascal_Siakam && player.Isaiah_Thomas >= player.Paul_George && player.Isaiah_Thomas >= player.Steph_Curry && player.Isaiah_Thomas >= player.Trae_Young){
        window.location = "isaiah.html"
    }
    if(player.JJ_Barea >= player.Kawhi_Leanard && player.JJ_Barea >= player.Damian_Lillard && player.JJ_Barea >= player.Bojan_Bogdanovic && player.JJ_Barea >= player.Danilo_Galinari && player.JJ_Barea >= player.Davis_Bertans && player.JJ_Barea >= player.Isaiah_Thomas && player.JJ_Barea >= player.JJ_Reddick && player.JJ_Barea >= player.James_Harden && player.JJ_Barea >= player.Jaren_Jackson_Jr && player.JJ_Barea >= player.Karl_Anthony_Towns && player.JJ_Barea >= player.Kemba_Walker && player.JJ_Barea >= player.Kristaps_Porzingis && player.JJ_Barea >= player.Luka_Doncic && player.JJ_Barea >= player.Pascal_Siakam && player.JJ_Barea >= player.Paul_George && player.JJ_Barea >= player.Steph_Curry && player.JJ_Barea >= player.Trae_Young){
        window.location = "barea.html"
    }
    if(player.Bojan_Bogdanovic >= player.Kawhi_Leanard && player.Bojan_Bogdanovic >= player.Damian_Lillard && player.Bojan_Bogdanovic >= player.JJ_Barea && player.Bojan_Bogdanovic >= player.Danilo_Galinari && player.Bojan_Bogdanovic >= player.Davis_Bertans && player.Bojan_Bogdanovic >= player.Isaiah_Thomas && player.Bojan_Bogdanovic >= player.JJ_Reddick && player.Bojan_Bogdanovic >= player.James_Harden && player.Bojan_Bogdanovic >= player.Jaren_Jackson_Jr && player.Bojan_Bogdanovic >= player.Karl_Anthony_Towns && player.Bojan_Bogdanovic >= player.Kemba_Walker && player.Bojan_Bogdanovic >= player.Kristaps_Porzingis && player.Bojan_Bogdanovic >= player.Luka_Doncic && player.Bojan_Bogdanovic >= player.Pascal_Siakam && player.Bojan_Bogdanovic >= player.Paul_George && player.Bojan_Bogdanovic >= player.Steph_Curry && player.Bojan_Bogdanovic >= player.Trae_Young){
        window.location = "bojan.html"
    }
    if(player.Kemba_Walker >= player.Kawhi_Leanard && player.Kemba_Walker >= player.Damian_Lillard && player.Kemba_Walker >= player.JJ_Barea && player.Kemba_Walker >= player.Danilo_Galinari && player.Kemba_Walker >= player.Davis_Bertans && player.Kemba_Walker >= player.Isaiah_Thomas && player.Kemba_Walker >= player.JJ_Reddick && player.Kemba_Walker >= player.James_Harden && player.Kemba_Walker >= player.Jaren_Jackson_Jr && player.Kemba_Walker >= player.Karl_Anthony_Towns && player.Kemba_Walker >= player.Bojan_Bogdanovic && player.Kemba_Walker >= player.Kristaps_Porzingis && player.Kemba_Walker >= player.Luka_Doncic && player.Kemba_Walker >= player.Pascal_Siakam && player.Kemba_Walker >= player.Paul_George && player.Kemba_Walker >= player.Steph_Curry && player.Kemba_Walker >= player.Trae_Young){
        window.location = "kemba.html"
    }
    if(player.Steph_Curry >= player.Kawhi_Leanard && player.Steph_Curry >= player.Damian_Lillard && player.Steph_Curry >= player.JJ_Barea && player.Steph_Curry >= player.Danilo_Galinari && player.Steph_Curry >= player.Davis_Bertans && player.Steph_Curry >= player.Isaiah_Thomas && player.Steph_Curry >= player.JJ_Reddick && player.Steph_Curry >= player.James_Harden && player.Steph_Curry >= player.Jaren_Jackson_Jr && player.Steph_Curry >= player.Karl_Anthony_Towns && player.Steph_Curry >= player.Bojan_Bogdanovic && player.Steph_Curry >= player.Kristaps_Porzingis && player.Steph_Curry >= player.Luka_Doncic && player.Steph_Curry >= player.Pascal_Siakam && player.Steph_Curry >= player.Paul_George && player.Steph_Curry >= player.Kemba_Walker && player.Steph_Curry >= player.Trae_Young){
        window.location = "curry.html"
    }
    if(player.Damian_Lillard >= player.Kawhi_Leanard && player.Damian_Lillard >= player.Steph_Curry && player.Damian_Lillard >= player.JJ_Barea && player.Damian_Lillard >= player.Danilo_Galinari && player.Damian_Lillard >= player.Davis_Bertans && player.Damian_Lillard >= player.Isaiah_Thomas && player.Damian_Lillard >= player.JJ_Reddick && player.Damian_Lillard >= player.James_Harden && player.Damian_Lillard >= player.Jaren_Jackson_Jr && player.Damian_Lillard >= player.Karl_Anthony_Towns && player.Damian_Lillard >= player.Bojan_Bogdanovic && player.Damian_Lillard >= player.Kristaps_Porzingis && player.Damian_Lillard >= player.Luka_Doncic && player.Damian_Lillard >= player.Pascal_Siakam && player.Damian_Lillard >= player.Paul_George && player.Damian_Lillard >= player.Kemba_Walker && player.Damian_Lillard >= player.Trae_Young){
        window.location = "damian.html"
    }
    if(player.Danilo_Galinari >= player.Kawhi_Leanard && player.Danilo_Galinari >= player.Steph_Curry && player.Danilo_Galinari >= player.JJ_Barea && player.Danilo_Galinari >= player.Damian_Lillard && player.Danilo_Galinari >= player.Davis_Bertans && player.Danilo_Galinari >= player.Isaiah_Thomas && player.Danilo_Galinari >= player.JJ_Reddick && player.Danilo_Galinari >= player.James_Harden && player.Danilo_Galinari >= player.Jaren_Jackson_Jr && player.Danilo_Galinari >= player.Karl_Anthony_Towns && player.Danilo_Galinari >= player.Bojan_Bogdanovic && player.Danilo_Galinari >= player.Kristaps_Porzingis && player.Danilo_Galinari >= player.Luka_Doncic && player.Danilo_Galinari >= player.Pascal_Siakam && player.Danilo_Galinari >= player.Paul_George && player.Danilo_Galinari >= player.Kemba_Walker && player.Danilo_Galinari >= player.Trae_Young){
        window.location = "danilo.html"
    }
    if(player.Davis_Bertans >= player.Kawhi_Leanard && player.Davis_Bertans >= player.Steph_Curry && player.Davis_Bertans >= player.JJ_Barea && player.Davis_Bertans >= player.Damian_Lillard && player.Davis_Bertans >= player.Danilo_Galinari && player.Davis_Bertans >= player.Isaiah_Thomas && player.Davis_Bertans >= player.JJ_Reddick && player.Davis_Bertans >= player.James_Harden && player.Davis_Bertans >= player.Jaren_Jackson_Jr && player.Davis_Bertans >= player.Karl_Anthony_Towns && player.Davis_Bertans >= player.Bojan_Bogdanovic && player.Davis_Bertans >= player.Kristaps_Porzingis && player.Davis_Bertans >= player.Luka_Doncic && player.Davis_Bertans >= player.Pascal_Siakam && player.Davis_Bertans >= player.Paul_George && player.Davis_Bertans >= player.Kemba_Walker && player.Davis_Bertans >= player.Trae_Young){
        window.location = "davis.html"
    }
    if(player.Paul_George >= player.Kawhi_Leanard && player.Paul_George >= player.Steph_Curry && player.Paul_George >= player.JJ_Barea && player.Paul_George >= player.Damian_Lillard && player.Paul_George >= player.Danilo_Galinari && player.Paul_George >= player.Isaiah_Thomas && player.Paul_George >= player.JJ_Reddick && player.Paul_George >= player.James_Harden && player.Paul_George >= player.Jaren_Jackson_Jr && player.Paul_George >= player.Karl_Anthony_Towns && player.Paul_George >= player.Bojan_Bogdanovic && player.Paul_George >= player.Kristaps_Porzingis && player.Paul_George >= player.Luka_Doncic && player.Paul_George >= player.Pascal_Siakam && player.Paul_George >= player.Davis_Bertans && player.Paul_George >= player.Kemba_Walker && player.Paul_George >= player.Trae_Young){
        window.location = "george.html"
    }
    if(player.James_Harden >= player.Kawhi_Leanard && player.James_Harden >= player.Steph_Curry && player.James_Harden >= player.JJ_Barea && player.James_Harden >= player.Damian_Lillard && player.James_Harden >= player.Danilo_Galinari && player.James_Harden >= player.Isaiah_Thomas && player.James_Harden >= player.JJ_Reddick && player.James_Harden >= player.Paul_George && player.James_Harden >= player.Jaren_Jackson_Jr && player.James_Harden >= player.Karl_Anthony_Towns && player.James_Harden >= player.Bojan_Bogdanovic && player.James_Harden >= player.Kristaps_Porzingis && player.James_Harden >= player.Luka_Doncic && player.James_Harden >= player.Pascal_Siakam && player.James_Harden >= player.Davis_Bertans && player.James_Harden >= player.Kemba_Walker && player.James_Harden >= player.Trae_Young){
        window.location = "harden.html"
    }
    if(player.Jaren_Jackson_Jr >= player.Kawhi_Leanard && player.Jaren_Jackson_Jr >= player.Steph_Curry && player.Jaren_Jackson_Jr >= player.JJ_Barea && player.Jaren_Jackson_Jr >= player.Damian_Lillard && player.Jaren_Jackson_Jr >= player.Danilo_Galinari && player.Jaren_Jackson_Jr >= player.Isaiah_Thomas && player.Jaren_Jackson_Jr >= player.JJ_Reddick && player.Jaren_Jackson_Jr >= player.Paul_George && player.Jaren_Jackson_Jr >= player.James_Harden && player.Jaren_Jackson_Jr >= player.Karl_Anthony_Towns && player.Jaren_Jackson_Jr >= player.Bojan_Bogdanovic && player.Jaren_Jackson_Jr >= player.Kristaps_Porzingis && player.Jaren_Jackson_Jr >= player.Luka_Doncic && player.Jaren_Jackson_Jr >= player.Pascal_Siakam && player.Jaren_Jackson_Jr >= player.Davis_Bertans && player.Jaren_Jackson_Jr >= player.Kemba_Walker && player.Jaren_Jackson_Jr >= player.Trae_Young){
        window.location = "jjj.html"
    }
    if(player.Karl_Anthony_Towns >= player.Kawhi_Leanard && player.Karl_Anthony_Towns >= player.Steph_Curry && player.Karl_Anthony_Towns >= player.JJ_Barea && player.Karl_Anthony_Towns >= player.Damian_Lillard && player.Karl_Anthony_Towns >= player.Danilo_Galinari && player.Karl_Anthony_Towns >= player.Isaiah_Thomas && player.Karl_Anthony_Towns >= player.JJ_Reddick && player.Karl_Anthony_Towns >= player.Paul_George && player.Karl_Anthony_Towns >= player.James_Harden && player.Karl_Anthony_Towns >= player.Jaren_Jackson_Jr && player.Karl_Anthony_Towns >= player.Bojan_Bogdanovic && player.Karl_Anthony_Towns >= player.Kristaps_Porzingis && player.Karl_Anthony_Towns >= player.Luka_Doncic && player.Karl_Anthony_Towns >= player.Pascal_Siakam && player.Karl_Anthony_Towns >= player.Davis_Bertans && player.Karl_Anthony_Towns >= player.Kemba_Walker && player.Karl_Anthony_Towns >= player.Trae_Young){
        window.location = "kat.html"
    }
    if(player.Kawhi_Leanard >= player.Karl_Anthony_Towns && player.Kawhi_Leanard >= player.Steph_Curry && player.Kawhi_Leanard >= player.JJ_Barea && player.Kawhi_Leanard >= player.Damian_Lillard && player.Kawhi_Leanard >= player.Danilo_Galinari && player.Kawhi_Leanard >= player.Isaiah_Thomas && player.Kawhi_Leanard >= player.JJ_Reddick && player.Kawhi_Leanard >= player.Paul_George && player.Kawhi_Leanard >= player.James_Harden && player.Kawhi_Leanard >= player.Jaren_Jackson_Jr && player.Kawhi_Leanard >= player.Bojan_Bogdanovic && player.Kawhi_Leanard >= player.Kristaps_Porzingis && player.Kawhi_Leanard >= player.Luka_Doncic && player.Kawhi_Leanard >= player.Pascal_Siakam && player.Kawhi_Leanard >= player.Davis_Bertans && player.Kawhi_Leanard >= player.Kemba_Walker && player.Kawhi_Leanard >= player.Trae_Young){
        window.location = "kawhi.html"
    }
    if(player.Kristaps_Porzingis >= player.Karl_Anthony_Towns && player.Kristaps_Porzingis >= player.Steph_Curry && player.Kristaps_Porzingis >= player.JJ_Barea && player.Kristaps_Porzingis >= player.Damian_Lillard && player.Kristaps_Porzingis >= player.Danilo_Galinari && player.Kristaps_Porzingis >= player.Isaiah_Thomas && player.Kristaps_Porzingis >= player.JJ_Reddick && player.Kristaps_Porzingis >= player.Paul_George && player.Kristaps_Porzingis >= player.James_Harden && player.Kristaps_Porzingis >= player.Jaren_Jackson_Jr && player.Kristaps_Porzingis >= player.Bojan_Bogdanovic && player.Kristaps_Porzingis >= player.Kawhi_Leanard && player.Kristaps_Porzingis >= player.Luka_Doncic && player.Kristaps_Porzingis >= player.Pascal_Siakam && player.Kristaps_Porzingis >= player.Davis_Bertans && player.Kristaps_Porzingis >= player.Kemba_Walker && player.Kristaps_Porzingis >= player.Trae_Young){
        window.location = "kristaps.html"
    }
    if(player.Luka_Doncic >= player.Karl_Anthony_Towns && player.Luka_Doncic >= player.Steph_Curry && player.Luka_Doncic >= player.JJ_Barea && player.Luka_Doncic >= player.Damian_Lillard && player.Luka_Doncic >= player.Danilo_Galinari && player.Luka_Doncic >= player.Isaiah_Thomas && player.Luka_Doncic >= player.JJ_Reddick && player.Luka_Doncic >= player.Paul_George && player.Luka_Doncic >= player.James_Harden && player.Luka_Doncic >= player.Jaren_Jackson_Jr && player.Luka_Doncic >= player.Bojan_Bogdanovic && player.Luka_Doncic >= player.Kawhi_Leanard && player.Luka_Doncic >= player.Kristaps_Porzingis && player.Luka_Doncic >= player.Pascal_Siakam && player.Luka_Doncic >= player.Davis_Bertans && player.Luka_Doncic >= player.Kemba_Walker && player.Luka_Doncic >= player.Trae_Young){
        window.location = "luka.html"
    }
    if(player.Pascal_Siakam >= player.Karl_Anthony_Towns && player.Pascal_Siakam >= player.Steph_Curry && player.Pascal_Siakam >= player.JJ_Barea && player.Pascal_Siakam >= player.Damian_Lillard && player.Pascal_Siakam >= player.Danilo_Galinari && player.Pascal_Siakam >= player.Isaiah_Thomas && player.Pascal_Siakam >= player.JJ_Reddick && player.Pascal_Siakam >= player.Paul_George && player.Pascal_Siakam >= player.James_Harden && player.Pascal_Siakam >= player.Jaren_Jackson_Jr && player.Pascal_Siakam >= player.Bojan_Bogdanovic && player.Pascal_Siakam >= player.Kawhi_Leanard && player.Pascal_Siakam >= player.Kristaps_Porzingis && player.Pascal_Siakam >= player.Luka_Doncic && player.Pascal_Siakam >= player.Davis_Bertans && player.Pascal_Siakam >= player.Kemba_Walker && player.Pascal_Siakam >= player.Trae_Young){
        window.location = "pascal.html"
    }
    if(player.JJ_Reddick >= player.Karl_Anthony_Towns && player.JJ_Reddick >= player.Steph_Curry && player.JJ_Reddick >= player.JJ_Barea && player.JJ_Reddick >= player.Damian_Lillard && player.JJ_Reddick >= player.Danilo_Galinari && player.JJ_Reddick >= player.Isaiah_Thomas && player.JJ_Reddick >= player.Pascal_Siakam && player.JJ_Reddick >= player.Paul_George && player.JJ_Reddick >= player.James_Harden && player.JJ_Reddick >= player.Jaren_Jackson_Jr && player.JJ_Reddick >= player.Bojan_Bogdanovic && player.JJ_Reddick >= player.Kawhi_Leanard && player.JJ_Reddick >= player.Kristaps_Porzingis && player.JJ_Reddick >= player.Luka_Doncic && player.JJ_Reddick >= player.Davis_Bertans && player.JJ_Reddick >= player.Kemba_Walker && player.JJ_Reddick >= player.Trae_Young){
        window.location = "reddick.html"
    }
    if(player.Trae_Young >= player.Karl_Anthony_Towns && player.Trae_Young >= player.Steph_Curry && player.Trae_Young >= player.JJ_Barea && player.Trae_Young >= player.Damian_Lillard && player.Trae_Young >= player.Danilo_Galinari && player.Trae_Young >= player.Isaiah_Thomas && player.Trae_Young >= player.Pascal_Siakam && player.Trae_Young >= player.Paul_George && player.Trae_Young >= player.James_Harden && player.Trae_Young >= player.Jaren_Jackson_Jr && player.Trae_Young >= player.Bojan_Bogdanovic && player.Trae_Young >= player.Kawhi_Leanard && player.Trae_Young >= player.Kristaps_Porzingis && player.Trae_Young >= player.Luka_Doncic && player.Trae_Young >= player.Davis_Bertans && player.Trae_Young >= player.Kemba_Walker && player.Trae_Young >= player.JJ_Reddick){
        window.location = "young.html"
    }
}

function quizResetter(){
    buttonNext.classList.add("hide")
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function questionSix(){
    var PressedButton = event.target
    if(PressedButton.id == 1){
        questions[5].answers.a = true
        if(questions[5].answers.a){
            player.Kawhi_Leanard++
            player.Luka_Doncic++
            player.Kemba_Walker++
            player.Isaiah_Thomas++
            player.Jaren_Jackson_Jr++
            player.Damian_Lillard++
            player.Davis_Bertans++
        }
    }
    if(PressedButton.id == 2){
        questions[5].answers.b = true
        if(questions[5].answers.b){
            player.Paul_George++
            player.James_Harden++
            player.JJ_Reddick++
            player.JJ_Barea++
            player.Danilo_Galinari++
        }
    }
    if(PressedButton.id == 3){
        questions[5].answers.c = true
        if(questions[5].answers.c){
            player.Karl_Anthony_Towns++
            player.Kristaps_Porzingis++
            player.Steph_Curry++
            player.Pascal_Siakam++
            player.Trae_Young++
            player.Bojan_Bogdanovic++
        }
    }
}

function questionFive(){
    var PressedButton = event.target
    if(PressedButton.id == 1){
        questions[4].answers.a = true
        if(questions[4].answers.a){
            player.Isaiah_Thomas++
            player.Steph_Curry++
            player.James_Harden++
            player.Damian_Lillard++
            player.Kemba_Walker++
            player.Danilo_Galinari++
            player.Luka_Doncic++
        }
    }
    if(PressedButton.id == 2){
        questions[4].answers.b = true
        if(questions[4].answers.b){
            player.Kristaps_Porzingis++
            player.Jaren_Jackson_Jr++
            player.JJ_Reddick++
            player.Trae_Young++
            player.Pascal_Siakam++
            player.Kawhi_Leanard++
            player.Davis_Bertans++
        }
    }
    if(PressedButton.id == 3){
        questions[4].answers.c = true
        if(questions[4].answers.c){
            player.Karl_Anthony_Towns++
            player.JJ_Barea++
            player.Bojan_Bogdanovic++
            player.Paul_George++
        }
    }
}

function questionFour(){
    var PressedButton = event.target
    if(PressedButton.id == 1){
        questions[3].answers.a = true
        if(questions[3].answers.a){
            player.Bojan_Bogdanovic++
            player.Damian_Lillard++
            player.Isaiah_Thomas++
            player.JJ_Barea++
            player.Karl_Anthony_Towns++
            player.James_Harden++
            player.Davis_Bertans++
        }
    }
    if(PressedButton.id == 2){
        questions[3].answers.b = true
        if(questions[3].answers.b){
            player.Kawhi_Leanard++
            player.Danilo_Galinari++
            player.JJ_Reddick++
            player.Kristaps_Porzingis++
            player.Paul_George++
        }
    }
    if(PressedButton.id == 3){
        questions[3].answers.c = true
        if(questions[3].answers.c){
            player.Steph_Curry++
            player.Trae_Young++
            player.Kemba_Walker++
            player.Jaren_Jackson_Jr++
            player.Luka_Doncic++
            player.Pascal_Siakam++
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
    questionThree()
    questionFour()
    questionFive()
    questionSix()
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
            question: "Als je de bal schiet, spring je dan naar achter of naar voren?",
            answers: [
                {text: "Ik spring naar achteren", a: false},
                {text: "Ik spring naar voren", b: false},
                {text: "Ik spring recht zonder naar voren of achter te gaan", c: false}
            ]
        }
    ]

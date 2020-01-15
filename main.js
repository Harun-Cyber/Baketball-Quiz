const containQuiz = document.getElementById("basketball-quiz");
const containResults = document.getElementById("results");
const submitButton = document.getElementById("submit");
var player = {
    Isaiah_Thomas: 0,   //175 cm    // < 6.0
    JJ_Barea: 0,        //178 cm
    Kemba_Walker: 0,    //183 cm
    Trae_Young: 0,      //188 cm    // > 6.0 - < 6.4
    Damian_Lillard: 0,  //188 cm
    Steph_Curry: 0,     //191 cm 
    JJ_Reddick: 0,      //193 cm
    James_Harden: 0,    //196 cm    // > 6.4 - < 6.8
    Kawhi_Leanard: 0,   //201 cm
    Luka_Doncic: 0,     //201 cm
    Paul_George: 0,     //206 cm
    Pascal_Siakam: 0,   //206 cm
    Bojan_Bogdanovic: 0,//208 cm   // > 6.8 - < 6.10
    Davis_Bertans: 0,   //208 cm
    Danilo_Galinari: 0, //208 cm
    Karl_Anthony_Towns: 0,  //213 cm  // > 6.10
    Jaren_Jackson_Jr: 0,    //211 cm
    Kristaps_Porzingis: 0  //229 cm
};

function quizBuilder(){
    //Eerst maak ik een output variabele die alle HTML-uitvoer bevat, inclusief vragen en antwoordkeuzes.
    const output = [];
 
    //Vervolgens kan ik beginnen met het bouwen van de HTML voor elke vraag. Daarbij moet ik elke vraag als volgt doorlopen:
    //Een for each loop voor elke vraag.
    Questions.forEach((currenQuestion, questionNumber) => {
        //De lijst met antwoordkeuzes word opgeslagen...
        const answers = [];

        //Voor elk antwoord...
        for(letter in currenQuestion.answers){
            
            //Voeg een button toe...
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                    ${letter} :
                    ${currenQuestion.answers[letter]}
                </label>`
            );
        }
        //Voeg de antwoorden en vragen naar de output...
        output.push(
        `<div class="question">${currenQuestion.question}</div>
        <div class="answers">${answers.join('')}</div>`
        );
    }
    );
    //Hier combineer ik de outputlijst in één HTML-reeks en plaats ik het op een pagina...
    containQuiz.innerHTML = output.join('');
}
function resultShower(){
    //Verzameld alle answer containers van mijn quiz
    const containsAnswer = containQuiz.querySelectorAll(".answers")

    //De aantal vragen die de gebruiker heeft ingevuld
    var userAnswers = 0;

    //Een foreach loop voor elke vraag...
    Questions.forEach((currenQuestion, questionNumber) => {
        
        //De geselecteerde antwoord vinden
        const 
    })

}
const Questions = [
    {
        question: "Welke van de onderstaande lichaamslengtes is het dichtst bij die van jou?",
        answers: {
            a: "175cm",
            b: "180cm",
            c: "190cm",
            d: "195cm",
            e: "200cm",
            f: "205cm",
            g: "210cm"
        },
    },
    {
        question: "Welke van de onderstaande spanwijdtes is het dichtst bij die van jou?",
        answers: {
            a: "180cm",
            b: "185cm",
            c: "190cm",
            d: "200cm",
            e: "205cm",
            f: "210cm",
            g: "215cm"
        },
    },
    {
        question: "Hoe spring je als je de bal schiet?",
        answers: {
            a: "Ik spring niet",
            b: "Ik spring laag",
            c: "Ik spring normaal",
            d: "Ik spring hoog",
        },
    },
    {
        question: "Schiet je de bal door met je pols de bal te duwen of door met je arm de bal te duwen?",
        answers: {
            a: "Meer mijn pols dan mijn arm",
            b: "Meer mijn arm dan mijn pols",
            c: "Mijn arm en pols werken allebei evenveel mee om de bal te schieten",
        },
    },
    {
        question: "Hoe staat je elleboog van de arm waarmee je schiet als je de bal probeert te schieten?",
        answers: {
            a: "Mijn elleboog staat recht onder de bal als ik de bal schiet",
            b: "Mijn elleboog staat aan de buitenkant van de bal",
            c: "Mijn elleboog staat meer naar mijn lichaam toe",
        },
    },
    {
        question: "Als je de bal schiet, is de bal dan gelijk aan je hoofd, boven je hoofd of onder je hoofd?",
        answers: {
            a: "De bal is gelijk aan mijn hoofd",
            b: "De bal is boven mijn hoofd",
            c: "De bal is onder mijn hoofd",
        },
    }
];
quizBuilder();

submitButton.addEventListener("click", resultShower);

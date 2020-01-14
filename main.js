const containQuiz = document.getElementById("basketball-quiz");
const containResults = document.getElementById("results");
const submitButton = document.getElementById("submit");

function quizBuilder(){
    //HTML-uitvoer opslaan...
    const output = [];

    //Een for each loop voor elke vraag...
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

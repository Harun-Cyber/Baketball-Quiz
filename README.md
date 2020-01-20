# Baketball-Quiz
<p>Ik wil mensen die basketball spelen maar nog geen eigen jumpshot hebben helpen d.m.v. van een
    website met een online quiz die, op basis van de antwoorden die je geeft aan de vragen, je een speler aanraadt van wie de
    jumpshot het meest op die van jou lijkt.</p>
<p>De vragen zijn wel vragen die niet veel mensen kunnen beantwoorden en de doelgroep is daarom ook vooral
    basketballspelers. Ook als je wilt beginnen aan basketball is de quiz goed omdat je dan een basis kan krijgen voor
    je jumpshot.</p>
<p>De stattistieken van de speler zullen ook beschikbaar voor de gebruiker. Hierbij kan je de perscentages van hoe goed
    deze speler schiet. Daarbij kan je kijken of deze persoon wel een goede jumpshot heeft en wat je eventueel kan
    aanpassen aan aanpassen.</p>

<h1>Wat heb ik gedaan</h1>
<p>Ik heb eerst onderzoek gedaan naar wat een jumpshot kan beïnvloeden en hoe verschillende spelers schieten. Hierbij heb ik gekeken naar alle verschillende aspecten van een jumpshot. Hiervan heb ik 6 vragen kunnen maken met verschillende antwoorden die relevant zijn voor basktebal spelers.</p>
<p>Ik heb een function gemaakt: quizStart waarin ik de vragen sorteer.</p>
<p>De vragen heb ik in een array gegooird en de antwoorden heb ik ook in een array gegooid binnen de vragen. De vragen zijn allemaal random gemaakt d.m.v. questions.sort(() => Math.random() - 5). Vervolgens roep ik een andere functie genaamd nextQuestion.</p>
<p>In nextQuestion roep ik 2 functies op: quizResetter en questionShower. In quizResetter doe ik de button voor de volgende vraag verstoppen en de andere buttons die te zien zijn in mijn HTML bestand ook verstoppen.</p>
<p>In questionShower pak ik mijn vragen en antwoorden van mijn array en zit ik ze in mijn HTML. Hierin maak ik de verschillende buttons aan voor de aantal antwoorden per vraag d.m.v. document.createElement("button"). Hierin heb ik ook een button aangemaakt waarin weer een andere functie zit genaamd resultShower.</p>
<p>In resultShower kijkt de code of de quiz bij de laatse vraag is. Zo niet dan gaat de quiz door naar de volgende vraag. Zo wel dan berekent dan verschijnt de "Verzend" knop en kan je zien welke jumpshot van welke speler het best bij die van jou past.</p>
<p>In de functies questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix en showingPlayer zitten de algoritmes van hoe de scores berekent worden. De algoritme bestaat vooral uit if-statements.</p>

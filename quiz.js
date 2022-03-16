const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const choiceA = document.getElementById('choiceA');
const choiceB = document.getElementById('choiceB');
const choiceC = document.getElementById('choiceC');
const choiceD = document.getElementById('choiceD');
const compteur = document.getElementById('compteur');
const compteurBarreColor = document.getElementById('compteurBarreColor');
const progress = document.getElementById('progression');
const compteurBarreButton = document.getElementById('compteurBarreButton');
const scoreId = document.getElementById('scoreId');
const liens = document.getElementById('liens');
const lien = document.getElementById('lien');
const niveau = document.getElementById('niveau');
const nQuestion = document.getElementById('nQuestion');
const reponse = document.getElementById('reponse');

const temps = 10;
const largueurCompteur = 50;
const largueurParSeconde = largueurCompteur / temps;

let nbrNiveau = 6;
let  nivActuel = 0;
let nbrSeconde = 0;
let TIMER;
let questionNumber = 0;

let questions = [
    [
    {
        question: "Quelle est la capitale du Qatar ?",
        choiceA :" Abu Dhabi ",
        choiceB :" Amman",
        choiceC :"Dubaï ",
        choiceD :"Doha ",
        correct: 'C'
    },

    {
        question: "Un œil presbyte :",
        choiceA :"voit mal de loin ",
        choiceB :"voit mal de près ",
        choiceC :"doit toujours être corrigé",
        choiceD :"ne doit être corrigé que pour la vision proche",
        correct: 'B'
    },

    {
        question: "Ébullition et évaporation sont synonymes.",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"Ni vrai ni faux",
        choiceD :"Faux, sont antonymes",
        correct: 'B'
        
    },

    {
        question: "Lequel de ces États ne fait pas partie de l’Union européenne ? ",
        choiceA :"Croatie ",
        choiceB :"Lituanie",
        choiceC :"Malte",
        choiceD :"Norvège",
        correct: 'D'
    },

    {
        question: "Parmi ces quatre pièces de théâtre, laquelle n’a pas été écrite par Molière ?",
        choiceA :"Le Jeu de l’amour et du hasard",
        choiceB :" Le Malade imaginaire",
        choiceC :"Le Tartuffe ",
        choiceD :"Les Femmes savantes",
        correct: 'A'
    }
    ],
    [
    {
        question: "Parmi ces quatre pièces de théâtre, laquelle n’a pas été écrite par Molière ?",
        choiceA :"Le Jeu de l’amour et du hasard",
        choiceB :"Le Malade imaginaire",
        choiceC :"Le Tartuffe ",
        choiceD :"Les Femmes savantes",
        correct: 'A'
    },

    {
        question: "À 80° C, les molécules d’eau sont animées de mouvements très désordonnés. Si on crée une dépression sur cette eau, elle peut s’évaporer.",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"Ni faux ni vrai",
        choiceD :"Faux, elle va se dissoudre",
        correct: 'B'
    },

    {
        question: " Qu’est-ce qu’un ostéopathe ?",
        choiceA :"un insecte ",
        choiceB :"un coquillage ",
        choiceC :"un vêtement ancien",
        choiceD :"une personne qui soigne par manipulation des os",
        correct: 'D'
    },

    {
        question: "La sublimation correspond au passage de l’état solide à l’état gazeux. ",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"Ni vrai ni faux",
        choiceD :"Je ne sais pas",
        correct: 'A'
    },

    {
        question: ". Les centrales nucléaires ont, par rapport aux autres centrales thermiques, l’avantage de ne pas épuiser les réserves naturelles, mais comme inconvénient de produire des déchets de grande toxicité et de longue durée.",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"Ni vrai ni faux",
        choiceD :"Je ne sais pas",
        correct: 'B'
       
    }

   ],

   [
    {
        question: "Le Soleil se lève à la même heure pour tous les points situés sur un même méridien. ",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"Ni vrai ni faux",
        choiceD :"Je ne sais pas",
        correct: 'B'
    },

    {
        question: "Que désigne le terme « thaumaturge » ? ",
        choiceA :"Une personne qui accomplit ou prétend accomplir des miracles",
        choiceB :"Un expert en développement des tomates",
        choiceC :"Un spécialiste du théâtre antique W",
        choiceD :"spécialiste des tôles",
        correct: 'A'
    },

    {
        question: "Que signifie le verbe « vilipender » ? ",
        choiceA :"Disputer sévèrement un enfant",
        choiceB :"Dénigrer, traiter avec mépris ",
        choiceC :". Ne rien faire, se laisser aller à la paresse",
        choiceD :"Visiter des VIP",
        correct: 'B'
    },

    {
        question: "Quelle était à l’origine la fonction de Facebook ?",
        choiceA :" un site de rencontres ",
        choiceB :"un réseau social pour cuisinier ",
        choiceC :" un album photo en ligne ",
        choiceD :"un réseau social estudiantin  ",
        correct: 'D'
    },

    {
        question: "Laquelle de ces disciplines n’est pas au programme des jeux Olympiques de 2016 ? ",
        choiceA :"la natation en eau libre",
        choiceB :"le karaté",
        choiceC :"le football ",
        choiceD :"le golf ",
        correct: 'B'
    }
   ],
    [
    {
        question: "Combien de temps faut-il à la Terre pour faire le tour du Soleil ?",
        choiceA :"une journée",
        choiceB :"28 jours",
        choiceC :" un an ",
        choiceD :"dix ans ",
        correct: 'C'
    },

    {
        question: "Figure emblématique de la philosophie des Lumières, François-Marie Arouet est également appelé :",
        choiceA :"Diderot",
        choiceB :" Voltaire",
        choiceC :"Montesquieu",
        choiceD :"Rousseau",
        correct: 'B'
    },

    {
        question: "Quelle est la capitale du Brésil ?",
        choiceA :"Brasilia",
        choiceB :"Rio de Janeiro",
        choiceC :"Salvador de Ba ",
        choiceD :"Porto-Novo",
        correct: 'A'
    },

    {
        question: " À 80° C, les molécules d’eau sont animées de mouvements très désordonnés. Si on crée une dépression sur cette eau, elle peut s’évaporer.",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"Ni vrai ni faux ",
        choiceD :"Je ne sais pas",
        correct: 'B'
    },

    {
        question: "Une année-lumière n’est pas un temps mais une distance d’environ 10 millions de millions de km.",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"Ni vrai ni faux ",
        choiceD :"Je ne sais pas",
        correct: 'A'
    }

   ],

   [
    {
        question: "Dans la série américaine « 24 heures chrono », quel est le nom du personnage principal ?",
        choiceA :"Jack Bauer ",
        choiceB :"Jack Ryan",
        choiceC :"Jack Sparrow",
        choiceD :"Jack Reachel",
        correct: 'A'
    },

    {
        question: "Lorsque, le 21 juillet 1969, Armstrong a marché pour la première fois sur la Lune, il a été filmé. Tous les Terriens pouvaient le voir en direct, c’est-à-dire « en temps réel ».",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"ni faux ni Vrai",
        choiceD :"Je ne sais pas",
        correct: 'A'
      
    },

    {
        question: "Que signifie le fait d’être « pusillanime » ? ",
        choiceA :"Faire preuve de clémence, de générosité, d’indulgence",
        choiceB :"Affirmer clairement et fermement ses idées ",
        choiceC :"Manquer d’audace, de courage, être timoré",
        choiceD :"Je ne sais pas",
        correct: 'C'
        
    },

    {
        question: " Une constellation est un groupe d’étoiles très proches les unes des autres.",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"ni faux ni Vrai",
        choiceD :"Je ne sais pas",
        correct: 'B'
        
    },

    {
        question: "L’expression « Quelle chaleur dans cette cuisine ! Il fait au moins une température de 28° C » est incorrecte du point de vue de la physique.",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"ni faux ni Vrai",
        choiceD :"Je ne sais pas" ,
        correct: 'A'          
    }
   ],
   [   
    {
        question: "En respirant, nous contribuons à l’effet de serre.",
        choiceA :"Vrai",
        choiceB :"Faux",
        choiceC :"ni faux ni Vrai",
        choiceD :"Je ne sais pas ",
        correct: 'A'
        
    },

    {
        question: "Quel président américain a démissionné après le scandale du Watergate en 1974 ?",
        choiceA :"Dwight D. Eisenhower ",
        choiceB :"George H. W. Bush ",
        choiceC :"Gerald Ford",
        choiceD :"Richard Nixone    ",
        correct: 'D'
        
    },

    {
        question: "Laquelle des inventions suivantes doit-on à Alfred Nobel ? ",
        choiceA :"la dynamite ",
        choiceB :" la machine à vapeur ",
        choiceC :" l’électricité",
        choiceD :"le téléphone",
        correct: 'A'
        
    },

    {
        question: "Que signifie « nyctalope » ? ",
        choiceA :"C’est une insulte en argot ",
        choiceB :"C’est quelqu’un qui a la capacité de voir dans le noir ",
        choiceC :"C’est une difficulté à voir de près ou de loin",
        choiceD :"Je ne sais pas",
        correct: 'B'
        
    },

    {
        question: "Mars est également appelée la « planète rouge » en raison : ",
        choiceA :"d’une illusion d’optique due à la chaleur du sol. ",
        choiceB :"de la présence d’oxyde de fer dans le sol. ",
        choiceC :"de la présence de diazote dans son atmosphère.",
        choiceD :"de la lave en fusion présente à la surface",
        correct: 'B'
        
    }
   ]
];

function afficheurQuestions() {
    let q = questions[nivActuel][questionNumber];
    question.innerHTML = "<p>" +q.question+ "</p>";
    choiceA.innerHTML = "<p>" +q.choiceA+ "</p>";
    choiceB.innerHTML = "<p>" +q.choiceB+ "</p>";
    choiceC.innerHTML = "<p>" +q.choiceC+ "</p>";
    choiceD.innerHTML = "<p>" +q.choiceD+ "</p>";  

    let questionAff = questionNumber + 1;
    nQuestion.innerHTML = "<h4>Question "+ questionAff +"  sur " + questions[nivActuel].length + "</h4>";
}  


function compteurTemps() {
    if(nbrSeconde <= temps){

        compteurBarreColor.style.width = largueurParSeconde*nbrSeconde + "%";
        compteurBarreButton.style.marginLeft  = 24 +largueurParSeconde*nbrSeconde + "%";
        compteur.innerHTML = nbrSeconde;
        nbrSeconde++;
        
    }else{
        answerIsWrong();
        if(questionNumber < questions[nivActuel].length-1) {
           questionNumber++;
           afficheurQuestions();
           nbrSeconde = 0;
        }else{
            afficheurScore(questions[nivActuel].length);
            clearInterval(TIMER);
        }
    }
}

function answerIsCorrect() {
        document.getElementById(questionNumber).style.background = "forestgreen";
}

function answerIsWrong() {
    i = questions[nivActuel][questionNumber].correct;
    document.getElementById(questionNumber).style.background = "red";
   
}

afficheurQuestions();
progression();
compteurTemps();
setInterval(compteurTemps, 1000);

function progression() {
    for(let i = 0; i < questions[nivActuel].length; i++){
           progress.innerHTML += "<div class = 'progressRound' id =" + i + "></div>";
  }
} 

let score = 0;
function verifieReponse(answer){    

    if(answer == questions[nivActuel][questionNumber].correct){
        score++;
        if(questionNumber < questions[nivActuel].length-1){
          answerIsCorrect();
          
          questionNumber++;
          nbrSeconde  = 0;  
          afficheurQuestions();
        }

        else if(questionNumber >= questions[nivActuel].length-1){
            afficheurScore(questions[nivActuel].length);
            clearInterval(TIMER);
        }
    }

    else{
        if(questionNumber < questions[nivActuel].length-1){
            answerIsWrong();
            
            nbrSeconde = 0;
            questionNumber++;
            afficheurQuestions();
        }

        else if(questionNumber >= questions[nivActuel].length-1){
            afficheurScore(questions[nivActuel].length);
            clearInterval(TIMER);
        }
    }
    
}

function afficheurScore(nbr){
    quiz.style.display = "none";
    scoreId.style.display = "block";
    liens.style.display = "block";
    
    let pourcentage = score/nbr*100;

    let img = (pourcentage >= 75)? "./medias/nature.jpg":
    (pourcentage >= 50)? "./medias/road.jpg":
    (pourcentage >= 25)? "./medias/forêt_rouge.jpg":
    (pourcentage >= 0)? "./medias/leaf.jpg": "./medias/escaliers.jpg";

    let motsFelicitation = (pourcentage >= 75)? "Bravo! Vous êtes un génie en culture":
    (pourcentage >= 50)? "Féliciations! Vous pouvez mieux faire.":
    (pourcentage >= 25)? "Bien! Travaille un peu plus et aie confiance en toi.":
    (pourcentage >= 0)? "Pas bien! Revenez nous en pleine forme": "Salut";

    let citation = (pourcentage >= 75)? " L'ouvrage a toujours l'air facile quand le travail est un plaisir' <br>  <strong> CARDINAL DE BERNIS </strong> ":
    (pourcentage >= 50)? "'Si tu ne sais pas user de la minuite, tu perdras l'heure, le jour et toute ta vie' <br>  <strong> ALEXANDRE SOLJENITSYNE </strong>":
    (pourcentage >= 25)? "'Je ne perds jamais. Soit je gagne, soit j'apprends'. <br>  <strong> NELSON MANDELA </strong>":
    (pourcentage >= 0)? "'Quand on a plus honte de sa laideur et qu'on assume avec fierté, on devient beau'. <br>  <strong> HENRI LOPES </strong>" : "Salut";

    scoreId.innerHTML = "<img class='baliseScore' src = " + img+ " >" ;
    scoreId.innerHTML += "<h1> (" + score +"/" + nbr +") " +pourcentage+ "%</h1>";

    scoreId.innerHTML += "<h3 class='baliseScore' >" +motsFelicitation + "</h3>";

    scoreId.innerHTML += "<blockquote class='baliseScore'>" + citation + "</blockquote>";
}

let round = document.getElementsByClassName('progressRound');
function levelSuivant(){
    if(nivActuel < nbrNiveau-1){
        nbrSeconde = 0;
        questionNumber=0;
        quiz.style.display = "block";
        scoreId.style.display = "none";
        liens.style.display = "none";  
        score =0;
        nivActuel++;
        afficheurQuestions();

    }else{
        quiz.style.display = "none";
        scoreId.style.display = "block";
        lien.style.display = "block";
    }

    for(let i = 0 ; i<questions[nivActuel].length ; i++){
        round[i].style.background = "white";
    }
    let nivAff = nivActuel + 1;
    niveau.innerHTML = "<h1><span>Q</span>UIZ("+ nivAff +")</h1>";
}
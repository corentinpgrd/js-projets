// ------------------------------
// Projet  2 le jan-ken -pon
// ------------------------------


// querySelector/All()
// forEach()
// e.target.id ou value
// Math
// inertext / textContent

const choixJoueurId = document.querySelector("#joueur-choix");
const choixPcId = document.querySelector("#ordi-choix");
const resultat = document.querySelector("#resultat");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");
const choixBtn = document.querySelectorAll(".btn");
let choixPc;
let choixJoueur;

choixBtn.forEach(choix => choix.addEventListener("click", (e) => {
    choixJoueur = e.target.value;
    choixJoueurId.textContent = choixJoueur;
    choixOrdi();
    getResult();
    
}));

function choixOrdi(){
    const random = Math.ceil(Math.random() * choixBtn.length);

    if(random === 1){
        choixPc = "Pierre";
    }
    if(random === 2){
        choixPc = "Feuille";
    }
    if(random === 3){
        choixPc = "Ciseaux";
    }
choixPcId.textContent = choixPc;

}


function getResult(){
    
    
    
    switch (true) {

        case choixPc === choixJoueur :
                resultat.textContent = "Draw";
                resultat.setAttribute("style", "color:orange"); 
                draw.textContent ++;
            break;

        case (choixJoueur === "Pierre" && choixPc === "Feuille") ||  (choixJoueur === "Ciseaux" && choixPc === "Pierre")  ||  (choixJoueur === "Feuille" && choixPc === "Ciseaux" ) :
                resultat.textContent = "Vous avez perdu";
                resultat.setAttribute("style", "color:red"); 
                lose.textContent ++;
                
            break;
    
        case (choixJoueur === "Pierre" && choixPc === "Ciseaux" ) ||  (choixJoueur === "Ciseaux" && choixPc === "Feuille")  ||  (choixJoueur === "Feuille" && choixPc === "Pierre") :
                resultat.textContent = "Vous avez gagné";
                resultat.setAttribute("style", "color:green"); 
                win.textContent ++;
            break;
    }

    
}



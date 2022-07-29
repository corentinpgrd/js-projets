//-----------------------------
// Projet 1 - Générateur de citation
//-----------------------------

// Ce projet necéssite des connaissances sur : 
// queryselector()
// addEventListener
// l'objet Math
// innerText - textContent

//-------------------------
// ##############
//-------------------------


const btn = document.querySelector("#new-citation");
const auteur =  document.querySelector(".auteur");
const citation =  document.querySelector(".citation");
const body = document.body.style.background;

const citations = [
    {
        citation: `"Dans une certaine mesure, si vous avez vu un bidonville, vous les avez tous vus."`,
        auteur:  `Spiro Theodore Agnew`,
        img: `https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`

    },  {
        citation: `"L'expérience qui rend le plus heureux est celle qui a rendu le plus de gens heureux."`,
        auteur:  `Karl Marx`,
        img: `https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2fr-fr/photo/lampadaire-allume-pres-du-canape-dans-une-salle-de-bibliotheque-1907784/`
        


    },  {
        citation: `"Les dîners de famille sont le plus souvent une épreuve d'indigestion nerveuse, précédée d'un ressentiment et d'un ennui cachés et accompagnée de tremblements psychosomatiques."`,
        auteur:  `M. F. K. Fisher`,
        img: `https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`


    },  {
        citation: `"Nous voterions tous pour le meilleur homme, mais il n'est jamais candidat."`,
        auteur:  `Will Rogers`,
        img: `https://images.pexels.com/photos/220326/pexels-photo-220326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`


    },  {
        citation: `"La seule chose qui cloche avec l'immortalité, c'est qu'elle a tendance à s'éterniser."`,
        auteur:  `Herb Caen`,
        img: `https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`


    },  {
        citation: `"Tout le monde ne fait pas confiance aux peintures, mais les gens croient aux photographies."`,
        auteur:  `Ansel Adams`,
        img: `https://images.pexels.com/photos/261821/pexels-photo-261821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`


    },  {
        citation: `"Apprendre, c'est découvrir ce que vous savez déjà. Faire, c'est démontrer que vous le savez. Enseigner, c'est rappeler aux autres qu'ils le savent tout aussi bien que vous. Vous êtes tous des apprenants, des exécutants et des enseignants."`,
        auteur:  `Richard David Bach`,
        img: `https://images.pexels.com/photos/47805/library-book-reading-computers-47805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`


    },  {
        citation: `"J'aime mieux être exposé aux inconvénients d'une trop grande liberté qu'à ceux d'un trop petit degré de liberté."`,
        auteur:  `Thomas Jefferson`,
        img: `https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`

    },  {
        citation: `"Une hirondelle ne fait pas un été, mais un écheveau d'oies, fendant le brouillard du dégel de mars, c'est le printemps."`,
        auteur:  `Aldo Leopold`,
        img: `https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?cs=srgb&dl=pexels-ivo-rainha-1290141.jpg&fm=jpg`


    },  {
        citation: `"Lorsque je vais dans mon jardin avec une bêche et que je creuse un lit, je ressens une telle exaltation et une telle santé que je découvre que je me suis trompé pendant tout ce temps en laissant les autres faire pour moi ce que j'aurais dû faire de mes propres mains."`,
        auteur:  `Ralph Waldo Emerson`,
        img: "https://images.pexels.com/photos/1448709/pexels-photo-1448709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


    }
];

console.log(citations[3].img) ;
btn.addEventListener("click", () =>{

    let random = Math.floor(Math.random() * citations.length);

    citation.innerText = citations[random].citation;
    auteur.innerText = citations[random].auteur;
    document.body.style.background = `url(${citations[random].img}) no-repeat center /cover` ;
})

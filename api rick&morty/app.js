// variables

const characters = document.querySelector("#characters");
const circle = document.querySelector(".circle");
let urlAPI = (`https://rickandmortyapi.com/api/character`)
let url = document.location.href

if(url !== "http://127.0.0.1:5500/javascript/cours/projet-5/index.html" ){
    urlAPI = "https://rickandmortyapi.com/api/character?page=2";
}

const API = fetch(urlAPI)
.then( response => response.json())
.then( data => {
    data.results.map(perso =>{

        let article = document.createElement("article");
        let img = document.createElement("img");
        let h3 =  document.createElement("h3");
        let status = document.createElement("div");
        let location = document.createElement("div");
        let span = document.createElement("span");

        status.setAttribute("id","status");
        location.setAttribute("id","location");
        article.classList.add("single-character");
        img.setAttribute("src",`${perso.image}`);
       

        characters.append(article);
        article.append(img);
        article.append(h3);
        article.append(status);
        article.append(location);
        

        h3.textContent = `${perso.name}`
        status.textContent = `Statut : ${perso.status} - ${perso.species} `;
        location.textContent = `Localisation : ${perso.location.name}`;
        
        status.append(span);
        span.classList.add("circle");

        if(perso.status === "Alive"){
            span.style.background = "green";
        }
        if(perso.status === "Dead"){
            span.style.background = "red";
        }
        

    })})

.catch(err => console.log(error) );


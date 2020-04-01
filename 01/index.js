const listFilm = document.querySelector("#listFilm");
const inpNyfilm = document.querySelector("#inpNyfilm");
const btn = document.querySelector("#btn");

let filmer = [];


function visFilm() {

    listFilm.innerHTML = "";

    for(const film of filmer) {
        listFilm.innerHTML += `<li>${film}</li>`;
    }
    
    inpNyfilm.value = "";
    inpNyfilm.focus();
    
}

function leggTilfilm() {
    filmer = [inpNyfilm.value, ...filmer];
    visFilm();
}

btn.onclick = leggTilfilm;
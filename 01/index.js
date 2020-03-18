const listVarer = document.querySelector("#listFilm");
const inpNyVare = document.querySelector("#inpNyfilm");
const btn = document.querySelector("#btn");

let varer = [];


function visFilm() {

    listVarer.innerHTML = "";

    for(const vare of varer) {
        listVarer.innerHTML += `<li>${vare}</li>`;
    }
    
    inpNyVare.value = "";
    inpNyVare.focus();
    
}




function leggTilVare() {
    varer = [inpNyVare.value, ...varer];
    visFilm();
}

btn.onclick = leggTilVare;
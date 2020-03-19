const inpNavn = document.querySelector("#inpNavn");
const inpAlder = document.querySelector("#inpAlder");
const btn = document.querySelector("#btn");

let venneliste = document.querySelector("#venneliste");

let venner = [
    { navn: "Linda", alder: 20 },
    { navn: "Gunnar", alder: 50 },
    { navn: "Silje", alder: 26 }
];


function visVenner() {
    venneliste.innerHTML = "<div>Navn</div><div>Alder</div>";

    for(const venn of venner) {
        venneliste.innerHTML += `
            <div>${venn.navn}</div>
            <div>${venn.alder}</div>
        `
    }
}

visVenner()


function leggTilVenn() {
    const nyVenn = { navn: inpNavn.value, alder: inpAlder.value }
    venner = [nyVenn, ...venner]
    
    visVenner();
}

btn.onclick = leggTilVenn;

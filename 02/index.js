const inpNyVenn = document.querySelector ("#inpNyVenn")
const nyVenn =document.querySelector ("#nyVenn");
const alder = document.querySelector ("#alder")
const btn = document.querySelector ("#btn")

let Venn = [
    { navn: "", alder: 20 },
    { navn: "", alder: 19 },
    { navn: "", alder: 25 }
  ]

  function visVenn (){
      inpNyVenn.innerhtml += "";
  
      nyVenn.value="";
      alder.value="";
  }

  btn.onclick = visVenn;
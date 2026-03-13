const teams = [
"Team A","Team B",
"Team C","Team D",
"Team E","Team F",
"Team G","Team H"
]

function generateBracket(){

let container = document.getElementById("bracket")

for(let i=0;i<teams.length;i+=2){

container.innerHTML += `
<div class="match">
${teams[i]}
<span>VS</span>
${teams[i+1]}
</div>
`

}

}

generateBracket()
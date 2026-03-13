function generateBracket(players){

let bracket = []

for(let i=0;i<players.length;i+=2){

bracket.push({
team1: players[i],
team2: players[i+1]
})

}

return bracket

}

let teams = [
"Team A",
"Team B",
"Team C",
"Team D"
]

let bracket = generateBracket(teams)

let container = document.getElementById("bracket")

bracket.forEach(match=>{
container.innerHTML += `
<div class="match">
${match.team1} vs ${match.team2}
</div>
`
})
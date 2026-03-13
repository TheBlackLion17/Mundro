let data = JSON.parse(localStorage.getItem("liveScore"))

let box = document.getElementById("liveMatch")

if(data){

box.innerHTML = `

<div class="live-card">

<div class="team">

<img src="${data.logo1}">
<h3>${data.team1}</h3>

</div>

<div class="score">

${data.score1} - ${data.score2}

</div>

<div class="team">

<img src="${data.logo2}">
<h3>${data.team2}</h3>

</div>

</div>

`

}
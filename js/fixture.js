function loadFixtures(){

let fixtures = JSON.parse(localStorage.getItem("fixtures")) || []

let box = document.getElementById("fixtureList")

if(!box) return

box.innerHTML = ""

if(fixtures.length === 0){

box.innerHTML = "<p>No Upcoming Matches</p>"
return

}

fixtures.forEach(match=>{

box.innerHTML += `

<div class="fixture-card">

<div class="team">

<img src="${match.logo1}">
<p>${match.team1}</p>

</div>

<div class="vs">

VS

<span>${match.date}</span>

<span>${match.time}</span>

</div>

<div class="team">

<img src="${match.logo2}">
<p>${match.team2}</p>

</div>

</div>

`

})

}

loadFixtures()
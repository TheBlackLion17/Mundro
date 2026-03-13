/* ===============================
   GET ELEMENTS
================================ */

let ptableTeam = document.getElementById("ptableTeam")
let played = document.getElementById("played")
let win = document.getElementById("win")
let draw = document.getElementById("draw")
let lose = document.getElementById("lose")
let goal = document.getElementById("goal")
let points = document.getElementById("points")
let rank = document.getElementById("rank")

let fixtureTeam1 = document.getElementById("fixtureTeam1")
let fixtureTeam2 = document.getElementById("fixtureTeam2")

let liveTeam1 = document.getElementById("liveTeam1")
let liveTeam2 = document.getElementById("liveTeam2")


/* ===============================
   LOAD TEAM SELECT DROPDOWNS
================================ */

function loadTeams(){

teams.forEach((team,index)=>{

if(ptableTeam)
ptableTeam.innerHTML += `<option value="${index}">${team.name}</option>`

if(fixtureTeam1)
fixtureTeam1.innerHTML += `<option value="${index}">${team.name}</option>`

if(fixtureTeam2)
fixtureTeam2.innerHTML += `<option value="${index}">${team.name}</option>`

if(liveTeam1)
liveTeam1.innerHTML += `<option value="${index}">${team.name}</option>`

if(liveTeam2)
liveTeam2.innerHTML += `<option value="${index}">${team.name}</option>`

})

}



/* ===============================
   FIXTURE SYSTEM
================================ */

/* ADD FIXTURE */

function addFixture(){

let fixtures = JSON.parse(localStorage.getItem("fixtures")) || []

let t1 = teams[fixtureTeam1.value]
let t2 = teams[fixtureTeam2.value]

let match = {

team1: t1.name,
logo1: t1.logo,

team2: t2.name,
logo2: t2.logo,

date: document.getElementById("matchDate").value,
time: document.getElementById("matchTime").value

}

fixtures.push(match)

localStorage.setItem("fixtures", JSON.stringify(fixtures))

loadFixtures()

}



/* LOAD FIXTURES IN ADMIN */

function loadFixtures(){

let fixtures = JSON.parse(localStorage.getItem("fixtures")) || []

let box = document.getElementById("fixtureList")

if(!box) return

box.innerHTML=""

fixtures.forEach((match,index)=>{

box.innerHTML += `

<div class="admin-fixture">

<img src="${match.logo1}">
${match.team1}

vs

${match.team2}
<img src="${match.logo2}">

<br>

${match.date} - ${match.time}

<button onclick="deleteFixture(${index})">Delete</button>

</div>

`

})

}



/* DELETE FIXTURE */

function deleteFixture(index){

let fixtures = JSON.parse(localStorage.getItem("fixtures")) || []

fixtures.splice(index,1)

localStorage.setItem("fixtures", JSON.stringify(fixtures))

loadFixtures()

}



/* ===============================
   LIVE SCORE UPDATE
================================ */

function updateLiveScore(){

let t1 = teams[liveTeam1.value]
let t2 = teams[liveTeam2.value]

let liveMatch = {

team1: t1.name,
logo1: t1.logo,
score1: document.getElementById("score1").value,

team2: t2.name,
logo2: t2.logo,
score2: document.getElementById("score2").value

}

localStorage.setItem("liveScore", JSON.stringify(liveMatch))

alert("Live Score Updated")

}



/* ===============================
   ADD / UPDATE POINT TABLE
================================ */

function addRow(){

let table = JSON.parse(localStorage.getItem("points")) || []

let teamName = teams[ptableTeam.value].name

let newData = {

team: teamName,
played: played.value,
win: win.value,
draw: draw.value,
lose: lose.value,
goal: goal.value,
points: points.value,
rank: Number(rank.value)

}


/* CHECK DUPLICATE TEAM */

let index = table.findIndex(t => t.team === teamName)

if(index !== -1){

table[index] = newData

}else{

table.push(newData)

}


/* SORT BY POSITION */

table.sort((a,b)=> a.rank - b.rank)

localStorage.setItem("points", JSON.stringify(table))

loadTable()

}



/* ===============================
   LOAD POINTS TABLE
================================ */

function loadTable(){

let table = JSON.parse(localStorage.getItem("points")) || []

let box = document.getElementById("tableList")

if(!box) return

box.innerHTML=""

if(table.length === 0){

box.innerHTML="<p>No Teams Added</p>"
return

}

box.innerHTML = `

<table class="points-table">

<tr>

<th>Pos</th>
<th>Team</th>
<th>P</th>
<th>W</th>
<th>D</th>
<th>L</th>
<th>GS</th>
<th>Pts</th>

</tr>

`

table.forEach(t=>{

box.innerHTML += `

<tr>

<td>${t.rank}</td>
<td>${t.team}</td>
<td>${t.played}</td>
<td>${t.win}</td>
<td>${t.draw}</td>
<td>${t.lose}</td>
<td>${t.goal}</td>
<td>${t.points}</td>

</tr>

`

})

box.innerHTML += "</table>"

}



/* ===============================
   RESET POINT TABLE
================================ */

function resetTable(){

let confirmReset = confirm("Delete all points table data?")

if(confirmReset){

localStorage.removeItem("points")

loadTable()

alert("Points Table Reset Successfully")

}

}



/* ===============================
   PAGE LOAD
================================ */

window.onload = function(){

loadTeams()
loadTable()

}
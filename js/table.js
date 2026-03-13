let table=JSON.parse(localStorage.getItem("points"))||[]

let box=document.getElementById("tableData")

table.forEach(t=>{

box.innerHTML+=`

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
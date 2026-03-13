import { db } from "./firebase.js"
import { ref, push } from "firebase/database"

document.getElementById("registerForm").addEventListener("submit",function(e){

e.preventDefault()

let team = document.getElementById("team").value
let p1 = document.getElementById("player1").value
let p2 = document.getElementById("player2").value

push(ref(db,"teams"),{
team:team,
player1:p1,
player2:p2
})

alert("Team Registered!")

})
import { db } from "./firebase.js"
import { ref, set, onValue } from "firebase/database"

const scoreRef = ref(db,"score")

function goal(team){

onValue(scoreRef,(data)=>{

let score = data.val()

if(team === "A"){
score.a++
}else{
score.b++
}

set(scoreRef,score)

})

}

onValue(scoreRef,(data)=>{

let score = data.val()

document.getElementById("scoreA").innerText = score.a
document.getElementById("scoreB").innerText = score.b

})

window.goal = goal
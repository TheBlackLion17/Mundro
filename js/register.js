const TOKEN = "8788345094:AAGOxd3V-80F5Th992cF69HNWUjMPg4OLa4";
const CHAT_ID = "7705748477";

const WHATSAPP_GROUP = "https://chat.whatsapp.com/FhLWWkQgmlXLK5Y5GstoeA?mode=gi_t";
const DISCORD_SERVER = "https://discord.gg/229XR2wY";

document.getElementById("registerForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let team = document.getElementById("team").value;
let username = document.getElementById("username").value;
let phone = document.getElementById("phone").value;

let message =
"🏆 MUNDRO PES CHAMPIONSHIP REGISTRATION\n\n"+
"👤 Player: "+name+"\n"+
"🛡 Team: "+team+"\n"+
"🎮 PES Username: "+username+"\n"+
"📱 Contact: "+phone;

// Send to Telegram
fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
chat_id:CHAT_ID,
text:message
})
});

// Open WhatsApp group
alert("✅ Registration Successful! Join WhatsApp & Discord.");

// Open WhatsApp
window.open(WHATSAPP_GROUP,"_blank");

// Open Discord
window.open(DISCORD_SERVER,"_blank");

}catch(error){

alert("❌ Error sending registration. Try again.");


});

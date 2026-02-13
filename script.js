// === Tahun Footer ===
document.getElementById("tahun").textContent = new Date().getFullYear();

// === Sosial Media ===
function openApp(app){
  let url="";
  switch(app){
    case "instagram": url="https://www.instagram.com/rizzxx2305/"; break;
    case "tiktok": url="https://www.tiktok.com/@rizzxx_2305"; break;
    case "discord": url="https://discord.com/login"; break;
    case "gmail": url="mailto:ramadhanrizky2305@gmail.com"; break;
    case "whatsapp": url="https://wa.me/628888032039"; break;
    case "github": url="https://github.com/ahmad-rizky23"; break;
  }
  window.open(url,"_blank");
}

// === Music Player ===
const player=document.getElementById("player");
const icon=document.getElementById("musicIcon");
window.addEventListener("load",()=>{
  player.loop=true;
  icon.textContent="▶";
});
document.querySelector(".spotify-btn").addEventListener("click", ()=>{
  if(player.paused){ player.play(); icon.textContent="⏸"; }
  else{ player.pause(); icon.textContent="▶"; }
});

// === Daun Gugur ===
const leafEmojis=["🍂","🍁"]; 
const leafCount=25; 
const bodyEl=document.body;
for(let i=0;i<leafCount;i++){
  let leaf=document.createElement("div");
  leaf.className="leaf"; 
  leaf.textContent=leafEmojis[Math.floor(Math.random()*leafEmojis.length)];
  leaf.style.left=Math.random()*100+"vw"; 
  leaf.style.fontSize=15+Math.random()*30+"px"; 
  bodyEl.appendChild(leaf); 
  animateLeaf(leaf);
}
function animateLeaf(leaf){
  let startY=-50,endY=window.innerHeight+50,speed=1+Math.random(),sway=Math.random()*100,
      swaySpeed=0.005+Math.random()*0.01,angle=Math.random()*360,angleSpeed=0.5+Math.random()*1;
  function fall(){
    startY+=speed; 
    let x=parseFloat(leaf.style.left)+Math.sin(startY*swaySpeed)*sway;
    leaf.style.top=startY+"px"; 
    leaf.style.left=x+"px"; 
    leaf.style.transform="rotate("+angle+"deg)";
    angle+=angleSpeed;
    if(startY>endY){
      startY=-50; 
      leaf.style.left=Math.random()*100+"vw"; 
      leaf.style.fontSize=15+Math.random()*30+"px"; 
      speed=1+Math.random();
      sway=Math.random()*100; 
      swaySpeed=0.005+Math.random()*0.01; 
      angleSpeed=0.5+Math.random()*2;
    }
    requestAnimationFrame(fall);
  } 
  fall();
}

// === Toggle Card Collapsible ===
function toggleCard(header) {
  const body = header.nextElementSibling; 
  const toggle = header.querySelector(".card-toggle");

  if(body.style.maxHeight && body.style.maxHeight !== "0px"){
    body.style.maxHeight="0";
    body.style.paddingTop="0";
    body.style.paddingBottom="0";
    toggle.textContent="+";
  } else {
    body.style.maxHeight=body.scrollHeight+"px";
    body.style.paddingTop="15px";
    body.style.paddingBottom="15px";
    toggle.textContent="−";
  }
}

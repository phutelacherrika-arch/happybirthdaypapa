/* SHOW SECTION */

function showSection(id){

document.getElementById(id)
.style.display = "block";

window.scrollTo({

top:
document.getElementById(id)
.offsetTop,

behavior:"smooth"

});

}

/* SECRET LETTER */

function openLetter(){

let code = prompt(
"Enter happybirthday ❤️"
);

if(code === "happybirthday"){

document.getElementById(
"letter"
).style.display = "block";

createEmojis();

createConfetti();

window.scrollTo({

top:
document.getElementById(
"letter"
).offsetTop,

behavior:"smooth"

});

}

else{

alert("tch. I said enter happybirthday");

}

}

/* EMOJI RAIN */

function createEmojis(){

for(let i=0;i<30;i++){

let emoji =
document.createElement("div");

emoji.innerHTML = "❤️";

emoji.classList.add("emoji");

emoji.style.position = "fixed";

emoji.style.left =
Math.random()*100 + "vw";

emoji.style.top = "-20px";

emoji.style.fontSize =
Math.random()*30 + 20 + "px";

emoji.style.animation =
"emojiFall 6s linear";

document.body.appendChild(
emoji
);

setTimeout(()=>{

emoji.remove();

},6000);

}

}

/* CONFETTI */

function createConfetti(){

for(let i=0;i<100;i++){

let confetti =
document.createElement("div");

confetti.innerHTML = "🎉";

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top =
"-20px";

confetti.style.fontSize =
Math.random()*30 + 20 + "px";

confetti.style.animation =
"emojiFall 4s linear";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},4000);

}

}

/* MUSIC */

document.body.addEventListener(

"click",

function(){

document.getElementById(
"bgMusic"
).play();

},

{once:true}

);

/* REAL SCRATCH EFFECT */

document.addEventListener(
"DOMContentLoaded",

()=>{

const canvas =
document.getElementById(
"scratchCanvas"
);

if(!canvas) return;

const ctx =
canvas.getContext("2d");

/* DRAW SILVER LAYER */

ctx.fillStyle = "#c0c0c0";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

/* TEXT */

ctx.fillStyle = "black";

ctx.font = "28px Arial";

ctx.fillText(
"Scratch Here ✨",
45,
100
);

/* SCRATCHING */

let isDrawing = false;

function scratch(x,y){

ctx.globalCompositeOperation =
"destination-out";

ctx.beginPath();

ctx.arc(
x,
y,
25,
0,
Math.PI*2
);

ctx.fill();

}

/* MOUSE */

canvas.addEventListener(
"mousedown",
()=>{

isDrawing = true;

});

canvas.addEventListener(
"mouseup",
()=>{

isDrawing = false;

createConfetti();

});

canvas.addEventListener(
"mousemove",

(e)=>{

if(!isDrawing) return;

const rect =
canvas.getBoundingClientRect();

scratch(
e.clientX - rect.left,
e.clientY - rect.top
);

});

/* TOUCH */

canvas.addEventListener(
"touchstart",
()=>{

isDrawing = true;

});

canvas.addEventListener(
"touchend",
()=>{

isDrawing = false;

createConfetti();

});

canvas.addEventListener(
"touchmove",

(e)=>{

if(!isDrawing) return;

e.preventDefault();

const rect =
canvas.getBoundingClientRect();

const touch =
e.touches[0];

scratch(
touch.clientX - rect.left,
touch.clientY - rect.top
);

});

});
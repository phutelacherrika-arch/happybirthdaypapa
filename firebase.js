// FIREBASE IMPORTS

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getFirestore,
collection,
addDoc,
getDocs

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* FIREBASE CONFIG */

const firebaseConfig = {

apiKey: "AIzaSyDmjERa24m9TObtCFdNQ3QfiNUTYuNqROc",

authDomain: "dadbirthdaywebsite.firebaseapp.com",

projectId: "dadbirthdaywebsite",

storageBucket: "dadbirthdaywebsite.firebasestorage.app",

messagingSenderId: "1081943222746",

appId: "1:1081943222746:web:7297fe8ec550991640b8e3",

measurementId: "G-WB07GH8RC1"

};

/* INITIALIZE FIREBASE */

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

/* SEND WISH */

window.addWish = async function(){

const input =
document.getElementById(
"wishInput"
);

const text =
input.value.trim();

if(text === ""){

alert("Please write a wish ❤️");

return;

}

/* SAVE TO FIREBASE */

await addDoc(

collection(db,"wishes"),

{
wish:text
}

);

/* CLEAR INPUT */

input.value = "";

/* RELOAD WISHES */

loadWishes();

};

/* LOAD ALL WISHES */

async function loadWishes(){

const container =
document.getElementById(
"wishContainer"
);

container.innerHTML = "";

/* GET DATA */

const querySnapshot =
await getDocs(
collection(db,"wishes")
);

/* SHOW DATA */

querySnapshot.forEach((doc)=>{

const div =
document.createElement("div");

div.classList.add("wish");

div.innerText =
doc.data().wish;

container.appendChild(div);

});

}

/* START LOADING */

loadWishes();
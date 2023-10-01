let about=document.getElementById("about-you");
let preference=document.getElementById("preferences");
let create=document.getElementById("createp");
about.style.display="flex";
let right1b=document.getElementById("right1");
let left2b=document.getElementById("left2");
let right2b=document.getElementById("right2");
let left3b=document.getElementById("left3");

let subButton=document.getElementById("submit-button");

right1b.addEventListener("click",()=>{
    about.style.display="none";
    preference.style.display="flex";
    create.style.display="none";
})
left2b.addEventListener("click",()=>{
    about.style.display="flex";
    preference.style.display="none";
    create.style.display="none";
})
right2b.addEventListener("click",()=>{
    about.style.display="none";
    preference.style.display="none";
    create.style.display="flex";
})
left3b.addEventListener("click",()=>{
    about.style.display="none";
    preference.style.display="flex";
    create.style.display="none";
})

subButton.addEventListener("click", ()=>{
    
})
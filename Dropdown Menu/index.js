const toggle=document.querySelector("#toggle");
const red=document.querySelector("#red");
const blue=document.querySelector("#blue");
const green=document.querySelector("#green");
const container=document.querySelector("#container")

toggle.addEventListener("mouseover",()=>{
    console.log("hello");
    red.classList.remove("hidden");
    green.classList.remove("hidden");
    blue.classList.remove("hidden");
})

container.addEventListener("mouseout",()=>{
    console.log("bye");
    if (!container.contains(event.relatedTarget)) {
        console.log("bye");
        red.classList.add("hidden");
        green.classList.add("hidden");
        blue.classList.add("hidden");
    }
})

red.addEventListener("click",()=>{
    document.body.style.backgroundColor="red";
})

blue.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
})

green.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
})
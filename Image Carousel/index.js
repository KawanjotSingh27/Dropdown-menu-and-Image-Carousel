const frame=document.querySelector("#frame");
const images=document.querySelector("#images");
const left=document.querySelector("#left");
const right=document.querySelector('#right');
const circle_one=document.querySelector("#circle_one");
const circle_two=document.querySelector("#circle_two");
const circle_three=document.querySelector("#circle_three");
const circles=document.querySelectorAll('.circle');

circle_one.style.backgroundColor="white";

right.addEventListener("click",()=>{
    rightMove();
})

setInterval(rightMove,5000);

left.addEventListener("click",()=>{
    leftMove();
})

circle_one.addEventListener("click",()=>{
    images.style.marginLeft="0px";
    fillCircle()
})

circle_two.addEventListener("click",()=>{
    images.style.marginLeft="-450px";
    fillCircle()
})

circle_three.addEventListener("click",()=>{
    images.style.marginLeft="-900px";
    fillCircle()
})

function rightMove(){
    let currentMargin = parseInt(window.getComputedStyle(images).marginLeft);
    console.log(currentMargin);
    if(currentMargin==-900){
        images.style.marginLeft="0px"
    }
    else{
        images.style.marginLeft=`${currentMargin-450}px`;
    }
    fillCircle()
}

function leftMove(){
    let currentMargin = parseInt(window.getComputedStyle(images).marginLeft);
    if(currentMargin==0){
        images.style.marginLeft="-900px"
    }
    else{
        images.style.marginLeft=`${currentMargin+450}px`;
    }
    fillCircle()
}

function fillCircle(){
    let currentMargin = parseInt(window.getComputedStyle(images).marginLeft);

    circles.forEach((circle)=>{
        circle.style.backgroundColor="transparent";
    })

    if(currentMargin==0){
        circle_one.style.backgroundColor="white";
    }
    else if(currentMargin==-450){
        circle_two.style.backgroundColor="white";
    }
    else if(currentMargin==-900){
        circle_three.style.backgroundColor="white";
    }
}
let pattern = [];
let random = 0;

const interval = 0;
const patternDisplay = document.querySelector('.pattern');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function next(){
        interval = setInterval(color, 1000);
        // setTimeout(color, 1000);
    // clearInterval(interval);
    }
function color(){
    let i = 0;
    random = randomIntFromInterval(1,4)
    if(random == 1){
        patternDisplay.style.backgroundColor = "red";
    }
    if(random == 2){
        patternDisplay.style.backgroundColor = "brown";
    }
    if(random == 3){
        patternDisplay.style.backgroundColor = "blue";
    }
    if(random == 4){
        patternDisplay.style.backgroundColor = "green";
    }
    i++
    if (i >= 4){
        clearInterval(interval);
        patternDisplay.style.backgroundColor = "white";
    }
}
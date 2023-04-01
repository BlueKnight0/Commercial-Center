let element = document.getElementsByClassName("slide");
let left = document.getElementsByClassName("left");
let right = document.getElementsByClassName("right");
//element[0].style.display = "none";
for(i of element){
    i.style.display = "none";
}

element[0].style.display = "block";

let count = 0;
function display(){
    if(count < 3){
        count = count + 1;
    } else{
        count = 0;
    }
    for(i = 0; i < 4; i++){
        if(count === i){
          element[count].style.display = "block";  
        } else {
            element[i].style.display = "none";
        }
    }
}

setInterval(display, 2000);
/*
function decrease(){
    count = count - 1;
    i = i - 1;
}

function increment(){
    alert("Hello")
}
*/

function decrement(){
    if(count > 0){
        count = count - 1;
    } else{
        count = 3;
    }
    for(i = 0; i < 4; i++){
        if(count === i){
            element[i].style.display = "block";
        } else{
            element[i].style.display = "none";
        }
    }
}

function increment(){
    if(count < 3){
        count = count + 1;
    } else{
        count = 0;
    }
    for(i = 0; i < 4; i++){
        if(count === i){
            element[i].style.display = "block";
        } else{
            element[i].style.display = "none";
        }
    }
}

for (i of left) {
    i.addEventListener('click', decrement);
}

for (i of right) {
    i.addEventListener('click', increment);
}

//sql commands
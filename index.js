//A Counter program
const DecreaseBtn =document.getElementById("DecreaseBtn");
const ResetBtn =document.getElementById("ResetBtn");
const IncreaseBtn =document.getElementById("IncreaseBtn");
const countlable =document.getElementById("countlable");

let count = 0;

IncreaseBtn.onclick = function(){
    count++;
    countlable.textContent=count;
}

DecreaseBtn.onclick = function(){
    count--;
    countlable.textContent=count;
}

ResetBtn.onclick = function(){
    count=0;
    countlable.textContent=count;
}
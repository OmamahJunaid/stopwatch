
var min = 0
var sec = 0
var milisec = 0
var milisecheading= document.getElementById("milisec")
var secheading= document.getElementById("sec")
var minheading= document.getElementById("min")
var interval ;
function time(){
    milisec++
    milisecheading.innerHTML=milisec
    if(milisec>=100) {
        sec++
        secheading.innerHTML=sec
        milisec = 0
    } 
    else if(sec>=60){
        min++
        minheading.innerHTML=min;
        sec=0;

    }
}
function str(){
interval= setInterval(time,10)
document.getElementById("button").disabled = true;
}
function stop(){
    clearInterval(interval)
    document.getElementById("button").disabled = false;
}
function reset(){
    
var min = 0
var sec = 0
var milisec = 0
milisecheading.innerHTML=milisec
secheading.innerHTML=sec
minheading.innerHTML=min

stop()
}

var hour = 0
var min = 0
var sec = 0
var secheading= document.getElementById("sec")
var minheading= document.getElementById("min")
var hourheading= document.getElementById("hours")
var interval ;
function time(){
    sec++
    secheading.innerHTML=sec
    if(sec>=60) {
        min++
        minheading.innerHTML=min
        sec = 0
    } 
}
function str(){
interval= setInterval(time,1000)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    var hour = 0
var min = 0
var sec = 0
secheading.innerHTML=sec
minheading.innerHTML=min
hourheading.innerHTML=hour
stop()
}
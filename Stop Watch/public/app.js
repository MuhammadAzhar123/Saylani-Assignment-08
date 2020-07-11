var interval;
var min = 0;
var sec = 0;
var msec = 0;
count = 0;
var hist = [];

//Binding html elements to variables
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var miliSeconds = document.getElementById("msec");

function timer(){
    msec++;
    miliSeconds.innerHTML = msec;
    if(msec >= 100){
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    }
    if(sec == 60){
        min++;
        minutes.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer,10);
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStart").style.opacity = "0.5";
    document.getElementById("btnStart").style.cursor = "default";


    document.getElementById("btnHistory").disabled = false;
    document.getElementById("btnHistory").style.opacity = "1";
    document.getElementById("btnHistory").style.cursor = "pointer";
}

function stop(){
    clearInterval(interval);
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStart").style.opacity = "1";
    document.getElementById("btnStart").style.cursor = "pointer";
    for(var i=0; i<=hist.length; i++){
        hist[i] = + document.getElementById("min").innerHTML +" : "
                  + document.getElementById("sec").innerHTML +" : "
                  + document.getElementById("msec").innerHTML;
        break;
    }
    

}

function reset(){
    clearInterval(interval);
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStart").style.opacity = "1";
    document.getElementById("btnStart").style.cursor = "pointer";
    min = 0;
    sec = 0;
    msec = 0;
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    miliSeconds.innerHTML = "00";
}

function history(){
    for(var i=0; i<=hist.length; i++){
        document.getElementById("history").innerHTML += hist[i]+"</br>";
        break;
    }
    document.getElementById("btnHistory").disabled = true;
    document.getElementById("btnHistory").style.opacity = "0.5";
    document.getElementById("btnHistory").style.cursor = "default";   
}
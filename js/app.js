
window.onload = start;
const btnPlay = document.getElementById("chronometer");

function time(){
    seg++;
    if (seg > 59){
        min++;
        seg = 0;
    }else if (min > 59) {
        hrs++;
        min = 0;
    }else if (hrs > 24) {
        hrs = 0;
    }   
    let hrsShow = ("0" + hrs).slice(-2); 
    let minShow = ("0" + min).slice(-2); 
    let segShow = ("0" + seg).slice(-2); 
    btnPlay.innerHTML = hrsShow + " : " + minShow + " : " + segShow; 
}
function count(){
    time();
    timer = setInterval(time,1000);
    document.querySelector("#btn-play").removeEventListener("click",count);
}

function stopCounter(){
    clearInterval(timer);
    document.querySelector("#btn-play").addEventListener("click",count);
}

function restartCounter(){
    hrs=0;
    min=0;
    seg=0;
    clearInterval(timer);
    btnPlay.innerHTML="00 : 00 : 00";
    document.querySelector("#btn-play").addEventListener("click",count);
}

function start(){
    hrs = 0;
    min = 0;
    seg = 0;
    document.querySelector("#btn-play").addEventListener("click",count);
    document.querySelector("#btn-pause").addEventListener("click",stopCounter);
    document.querySelector("#btn-restart").addEventListener("click",restartCounter); 
    btnPlay.innerHTML="00  :  00  :  00";
}






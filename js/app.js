
window.onload = start;
let play = document.getElementById("chronometer");
function start(){
    document.querySelector("#btn-play").addEventListener("click",cronometrar);
    document.querySelector("#btn-pause").addEventListener("click",parar);
    document.querySelector("#btn-restart").addEventListener("click",reiniciar);
    let h = 0;
    let m = 0;
    let s = 0;
    play.innerHTML="00 : 00 : 00";
}

function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.querySelector("#btn-play").removeEventListener("click",cronometrar);
}

function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){
        m++;
        s=0;
    }else if (m>59) {
        h++;
        m=0;
    }else if (h>24) {
        h=0;
    }   
    if (s<10) {
        sAux="0"+s;
    } else {
        sAux=s;
    }
    if (m<10) {
        mAux="0"+m;
    } else {
        mAux=m;
    }
    if (h<10) {
        hAux="0"+h;
    } else {
        hAux=h;
    }

    document.getElementById("chronometer").innerHTML = hAux + " : " + mAux + " : " + sAux; 
}

function parar(){
    clearInterval(id);
    document.querySelector("#btn-play").addEventListener("click",cronometrar);

}

function reiniciar(){
    clearInterval(id);
    document.getElementById("chronometer").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector("#btn-play").addEventListener("click",cronometrar);
}
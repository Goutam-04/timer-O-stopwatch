let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let stop__sound = document.getElementById('stop-sound');

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let startTimer = null;
let audio = document.getElementById("audio");

stop__sound.addEventListener('click',function(){
    audio.pause();
    audio.currentTime = 0;
});

start.addEventListener('click', function(){
    if(startTimer === null && (hour.value > 0 || minute.value > 0 || second.value > 0)){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
        hour.disabled = true;
        minute.disabled = true;
        second.disabled = true;
    }
});
stop.addEventListener('click',function(){
    clearInterval(startTimer);
    startTimer = null;
    hour.disabled = true;
    minute.disabled = true;
    second.disabled = true;

    
});

reset.addEventListener('click', function(){
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    stopInterval();
    hour.disabled = false;
    minute.disabled = false;
    second.disabled = false;

   
});

function timer(){
    if(hour.value == 0 && minute.value == 0 && second.value == 0){
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
        stopInterval();
        playAudio();
    } else if(second.value != 0){
        second.value--;
    } else if(minute.value != 0 && second.value == 0){
        second.value = 59;
        minute.value--;
    } else if(hour.value != 0 && minute.value == 0){
        minute.value = 60;
        hour.value--;
    }
}

function stopInterval() {
    clearInterval(startTimer);
    startTimer = null;
    hour.disabled = false;
    minute.disabled = false;
    second.disabled = false;
}

function playAudio(){
        audio.play();
}
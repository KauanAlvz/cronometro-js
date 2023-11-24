let sec=0;
let min=0;
let hrs=0;

var interval

function digits(digit){
    if(digit<10){
        return('0'+digit)
    }
    else{
        return(digit)
    }
}

function start(){
    watch()
    interval = setInterval(watch, 1000);
}
function pause(){
    clearInterval(interval);
}
function cancel(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('watch').innerText='00:00:00';
}
function watch(){
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
        if(min=60){
            min=0;
            sec=0;
            hrs++;
        }
    }
    document.getElementById('watch').innerText=digits(hrs)+':'+digits(min)+':'+digits(sec);
}
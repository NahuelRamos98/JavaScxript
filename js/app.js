//POMO//
function conjuntoDeVariables() {
     workTime = workTimerInput.value; 
     breakTime = breakTimerInput.value;
     restTime = restTimeInput.value; 
     cyclesGoal = cyclesInput.value;
     timesCompleted = 0;
     cyclesCompleted = 0;
   
};

/* Conexion Front */

let clock = document.getElementById("reloj");
let cyclesInput = document.getElementById("ciclos-input");
let startButton = document.getElementById("start-button");
let workTimerInput = document.getElementById("work-time");
let breakTimerInput = document.getElementById ("break-time");
let restTimeInput = document.getElementById("rest-time");

function isResetTime(){
    return timesCompleted == 7;
}

function goalReached() {
    return cyclesGoal == cyclesCompleted;
}

function startTime() {
    console.log("Started");
    pomodoroController();
}

startButton.onclick = () => {
    conjuntoDeVariables();
    startTime();
};

// TIMER //
let currentTime = 1;
let seconds = 0;

function timer() {
    if(currentTime > 0 || seconds > 0){
    if(seconds == 0){
        seconds = 59;
        currentTime--;
    } else{
        seconds--;
    }
    console.log(currentTime, seconds);
    interval = setTimeout(timer, 1000);
} else {
        pomodoroController();
    }
};

function pomodoroController() {
    if (isResetTime()) {
        cyclesCompleted++;
        if (!goalReached()) {
            currentTime = restTime; 
            timer();
            timesCompleted = 0;
        } else {
            console.log("LLegaste")
        }
        return;
    }
    if (timesCompleted % 2 ==0){
        currentTime = workTime;
        timesCompleted++;
        timer();
        console.log("Tiempo de trabajar TC : " + timesCompleted + " Ciclos: " + cyclesCompleted);
    } else {
        currentTime = breakTime;
        timesCompleted++;
        timer();
        console.log("Tiempo de descanso TC : " + timesCompleted + " Ciclos: " + cyclesCompleted);
    }
}

let marcas = {
    diasEstudiados: 2,
    recordDeDiasSeguidos: 4,
    diasPactados: ['Lunes','Miercoles','Sabados'],
    diasDeDescanso: ['Martes','Jueves']
};

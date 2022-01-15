const btn = document.getElementById("btn")
const pause = document.getElementById("pause-btn")
const reset = document.getElementById("reset-btn")
const play = document.getElementById("play-btn")

let displayMinutes = document.getElementById("display-minutes")
let displaySeconds = document.getElementById("display-seconds")

let minutes = 14
let seconds = 59
let affirmation = document.getElementById("affirmation")
let timeout;



function start(){
   
    
    btn.style.display = "none"
     pause.style.display = "inline-block"
     reset.style.display = "inline-block"
    
   timeout= setInterval(timer,1000)
}
function timer(){
    seconds--
    if(seconds === 0){
        minutes-- 
       
      
    } else if(seconds<= 0){
        seconds = 59
    } 
    
    
    if(seconds < 10){
        displaySeconds.textContent = `0${seconds}`
    } else{
          displaySeconds.textContent =seconds
    }
    
    if(minutes< 10){
        displayMinutes.textContent = `0${minutes}`
    } else{
           displayMinutes.textContent= minutes
    }
    
    if(minutes<= 0){
        clearInterval(timeout)
    }
 
  
}

function pauseTime(){
    
     clearInterval(timeout)
     pause.style.display="none"
      pause.style.display="none"
       play.style.display="inline-block"
     
     
}
function resetTime(){
    clearInterval(timeout)
    seconds=59
    minutes=14
    displayMinutes.textContent ="15"
    displaySeconds.textContent = "00"
    christmasAudio.currentTime = 0
      pause.style.display="none"
       play.style.display="inline-block"
   
}



btn.addEventListener("click",start)
pause.addEventListener("click",pauseTime)

play.addEventListener("click",()=>{
    play.style.display="none"
    start()
})
reset.addEventListener("click",resetTime)






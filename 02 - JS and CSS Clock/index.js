
let secondHand=document.querySelector('.second-hand')
let minHand=document.querySelector('.min-hand')
let hourHand=document.querySelector('.hour-hand')


function setTime(){
let time = new Date()
let seconds = time.getSeconds()
let minutes = time.getMinutes()
let hours = time.getHours()
let secondsAngle = (seconds*360/60) + 90
let minutesAngle = (minutes*360/60) + secondsAngle/60 + 90
let hoursAngle = (hours*360/12) + minutesAngle/12 + 90


secondHand.style.transform = `rotate(${secondsAngle}deg)`
minHand.style.transform = `rotate(${minutesAngle}deg)`
hourHand.style.transform = `rotate(${hoursAngle}deg)`

}

setInterval(setTime,1000)


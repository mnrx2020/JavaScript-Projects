const x = document.getElementById("days-s");
const y = document.getElementById("hours-s");
const z = document.getElementById("minutes-s");
const w = document.getElementById("seconds-s");
const newYearTime = "1 May 2025";
function myFunction(){
    const timeToNewYear = new Date(newYearTime);
    const currentDate = new Date();
    const totalSeconds = (timeToNewYear - currentDate)/1000;
    const daysToNewYear = Math.floor(totalSeconds/3600/24)
    const hoursToNewYear = Math.floor(totalSeconds/3600)%24
    const minutesToNewYear = Math.floor(totalSeconds/60)%60
    const secondsToNewYear = Math.floor(totalSeconds)%60

    x.innerHTML = daysToNewYear;
    y.innerHTML = hoursToNewYear;
    z.innerHTML = minutesToNewYear;
    w.innerHTML = secondsToNewYear;
    //console.log(secondsToNewYear)
    //document.getElementById("display").innerHTML = currentDate
}
myFunction()
setInterval(myFunction, 1000)

let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secHand = document.querySelector(".second-hand");

function setTime() {
    let now = new Date();

    let hours = now.getHours();
    let hourDeg = (hours/12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    let minutes = now.getMinutes();
    let minDeg = (minutes/60) * 360 + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    let seconds = now.getSeconds();
    let secondDeg = (seconds/60) * 360 + 90;
    secHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(setTime, 1000);
setTime();
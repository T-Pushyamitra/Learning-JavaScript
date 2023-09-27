
// Get the hour boxes
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");

// get the minutes boxes
let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");

// get the seconds boxes
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");


function setTime() {
    let now = new Date();
    const time = {
        hour: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds() 
    };

    console.log(time.seconds);
    h1.innerHTML = parseInt(time.hour / 10 % 10);
    h2.innerHTML = time.hour % 10;

    m1.innerHTML = parseInt(time.minutes / 10 % 10);
    m2.innerHTML = time.minutes % 10;

    s1.innerHTML = parseInt(time.seconds / 10 % 10);
    s2.innerHTML = time.seconds % 10;
};

setTime();
const currentTime = setInterval(setTime, 1000) // each second













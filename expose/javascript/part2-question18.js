function displayTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

intervalID = setInterval(displayTime, 1000);
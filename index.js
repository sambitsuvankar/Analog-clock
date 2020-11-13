setInterval(() => {
    d = new Date();
    hd = d.getHours();
    md = d.getMinutes();
    sd = d.getSeconds();
    
    hourHand = 30*hd + md/2;
    minuteHand = 6*md;
    secondHand = 6*sd;

    hour.style.transform = `rotate(${hourHand}deg)`;
    minute.style.transform = `rotate(${minuteHand}deg)`;
    second.style.transform = `rotate(${secondHand}deg)`;
}, 1000);

/*  12 hours = 360 deg
    1 hour =   360/12 = 30 deg of hourHand rotation.

    60 minutes = 360 deg
    1 minute = 360/60 = 6 deg of minuteHand rotation
    
    1 hour = 60 minutes
    360 deg of minuteHand = 30 deg of hourHand  
    1 deg of minuteHand  =  30/360 deg of hourHand
=>  1 deg of minuteHand  =  1/12 deg of hourHand
=>  6 deg of minuteHand = 1 minute = 6/12 = 1/2 deg of hourHand
    So hourHand = 30 deg of hourHand + 1/2 deg of hourHand rotation

    60 second = 360 deg of secondHand
    1 second = 6 deg of secondhhand rotation

    */
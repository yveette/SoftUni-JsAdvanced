function radar(speed, area) {
    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    let difference = 0;
    let speedZone = 0;
    let overLimit = '';

    switch (area) {
        case "motorway":
            speedZone = motorwaySpeed;
            break;
        case "interstate":
            speedZone = interstateSpeed;
            break;
        case "city":
            speedZone = citySpeed;
            break;
        case "residential":
            speedZone = residentialSpeed;
            break;
    }

    if (speed > speedZone) {
        difference = speed - speedZone;
    }

    if (difference != 0) {
        if (difference <= 20) {
            overLimit = "speeding";
        } else if (difference <= 40) {
            overLimit = "excessive speeding";
        } else {
            overLimit = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - ${overLimit}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
    }
}

radar(40, 'city');
// Driving 40 km/h in a 50 zone

radar(21, 'residential');
// The speed is 1 km/h faster than the allowed speed of 20 - speeding

radar(120, 'interstate');
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding

radar(200, 'motorway');
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving

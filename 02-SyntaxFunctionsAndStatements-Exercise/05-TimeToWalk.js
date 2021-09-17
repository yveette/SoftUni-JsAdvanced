function timeWalk(steps, footMeters, kmHourSpeed) {
    steps = Number(steps);
    footMeters = Number(footMeters);
    kmHourSpeed = Number(kmHourSpeed);

    let distanceMeters = steps * footMeters;
    let mSecSpeed = kmHourSpeed / 3.6;
    let time = distanceMeters / mSecSpeed;
    let rest = Math.floor(distanceMeters / 500);

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.ceil(time -(minutes * 60));

    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + rest < 10 ? "0" : "") + (minutes + rest) + ":" + (seconds < 10 ? "0" : "") + seconds);
}

timeWalk(4000, 0.60, 5);
// 00:32:48

timeWalk(2564, 0.70, 5.5);
// 00:22:35
var stepsNumber = $('#steps-number');



function onMotionEvent(event) {
    console.log(event.acceleration.x + ' m/s2');
}

window.addEventListener("devicemotion", onMotionEvent, true);
var steps = {
    currentSteps: 0
};
var stepsNumber = $('#steps-number');
var resetButton = $('#reset');
var startButton = $('#start');
var trackInfo = $('#track-info');

stepsNumber.html(steps.currentSteps);
trackInfo.html("Pasii nu sunt numarati");

resetButton.click(function() {
    steps.currentSteps = 0;
    stepsNumber.html(steps.currentSteps);
});

startButton.click(function (event) {
    var state = $(this).attr('data-state');

    if (state === 'start') {
        console.log("started");
        window.addEventListener("devicemotion", onMotionEvent, false);
        trackInfo.html("Pasii sunt numarati");
        $(this).attr('data-state', 'stop');
        $(this).html("Stop")
    } else {
        console.log("stopped");
        window.removeEventListener("devicemotion", onMotionEvent, false);
        $(this).attr('data-state', 'start');
        trackInfo.html("Pasii nu sunt numarati");
        $(this).html("Start")
    }
});

function onMotionEvent(event) {
    if (event.accelerationIncludingGravity.z > 0.7 && event.accelerationIncludingGravity.z < 2) {
        steps.currentSteps = steps.currentSteps + 1;
        stepsNumber.html(steps.currentSteps);
    }
}


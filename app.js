var steps = {
    currentSteps: 0
};
var stepsNumber = $('#steps-number');
var resetButton = $('#reset');
var startButton = $('#start');
var trackInfo = $('#track-info');

stepsNumber.html(steps.currentSteps);
trackInfo.html("Pasi nu sunt numarati");

resetButton.click(function() {
    steps.currentSteps = 0;
});

startButton.click(function (event) {
    var state = $(this).attr('data-state');

    if (state === 'start') {
        console.log("started");
        window.addEventListener("devicemotion", onMotionEvent, true);
        trackInfo.html("Pasi sunt numarati");
        $(this).attr('data-state', 'stop');
        $(this).html("Stop")
    } else {
        console.log("stopped");
        window.removeEventListener("devicemotion", function(){console.log("removed event")}, true)
        $(this).attr('data-state', 'start');
        trackInfo.html("Pasi nu sunt numarati");
        $(this).html("Start")
    }
});

function onMotionEvent(event) {
    steps.currentSteps = steps.currentSteps + 1;
}


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
    var state = $(this).attr('state');

    if (state === 'start') {
        window.addEventListener("devicemotion", onMotionEvent, true);
        trackInfo.html("Pasi sunt numarati");
        $(this).attr('state', 'stop');
    } else {
        window.removeEventListener("devicemotion", function(){console.log("removed event")}, true)
        $(this).attr('state', 'start');
        trackInfo.html("Pasi nu sunt numarati");
    }
});

function onMotionEvent(event) {
    steps.currentSteps = steps.currentSteps + 1;
}


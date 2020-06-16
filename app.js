var steps = {
    currentSteps: 0
};
var stepsNumber = $('#steps-number');
var resetButton = $('#reset');
var startButton = $('#start');

stepsNumber.html(steps.currentSteps);

resetButton.click(function() {
    steps.currentSteps = 0;
});

startButton.click(function (event) {
    var state = $(this).attr('state');

    if (state === 'start') {
        window.addEventListener("devicemotion", onMotionEvent, true);
        $(this).attr('state', 'stop');
    } else {
        $(this).attr('state', 'start');
        window.removeEventListener("devicemotion", function(){console.log("removed event")}, true)
    }
});

function onMotionEvent(event) {
    steps.currentSteps = steps.currentSteps + 1;
}


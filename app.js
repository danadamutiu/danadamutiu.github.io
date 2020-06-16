var steps = {
    currentSteps: 0
};

// salvam referinte la element Html cu Jquery (echivalentul lui document.getElementById)
var stepsNumber = $('#steps-number');
var resetButton = $('#reset');
var startButton = $('#start');
var trackInfo = $('#track-info');

stepsNumber.html(steps.currentSteps);
trackInfo.html("Pasii nu sunt numarati");

// eveniment atasat la butonul Reset (cand se da click)
resetButton.click(function() {
    steps.currentSteps = 0;
    stepsNumber.html(steps.currentSteps);
});

// eveniment atasat la butonul Start/Stop (cand se da click)
startButton.click(function (event) {
    var state = $(this).attr('data-state');

    if (state === 'start') {
        console.log("started");
        // atasare eveniment
        window.addEventListener("devicemotion", onMotionEvent, false);
        trackInfo.html("Pasii sunt numarati");
        $(this).attr('data-state', 'stop');
        $(this).html("Stop")
    } else {
        console.log("stopped");
        // deatasare eveniment
        window.removeEventListener("devicemotion", onMotionEvent, false);
        $(this).attr('data-state', 'start');
        trackInfo.html("Pasii nu sunt numarati");
        $(this).html("Start")
    }
});

// functie de tip callback pentru evenimentul "devicemotion"
function onMotionEvent(event) {
    // o implementare simpla - se poate calcula cu o anumita formula
    if (event.accelerationIncludingGravity.z > 0.7 && event.accelerationIncludingGravity.z < 2) {
        steps.currentSteps = steps.currentSteps + 1;
        stepsNumber.html(steps.currentSteps);
    }
}


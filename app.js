var steps = {
    currentSteps: 0 // obiectul model de stepts salvat in variabila
};

// salvam referinte la element Html cu Jquery (echivalentul lui document.getElementById)
var stepsNumber = $('#steps-number');
var resetButton = $('#reset');
var startButton = $('#start');
var trackInfo = $('#track-info'); // mesaju cu pasii sunt sau nu numarati

stepsNumber.html(steps.currentSteps); // initializezi elementu are arata numaru cu valoarea 0
trackInfo.html("Pasii nu sunt numarati"); // initializaeaza textu cu valoarea initiala "pasii nu sunt num"

// eveniment atasat la butonul Reset (cand se da click)
resetButton.click(function() {
    steps.currentSteps = 0;
    stepsNumber.html(steps.currentSteps); // si il seteaza si la html ca sa apara si p telefon
});

// eveniment atasat la butonul Start/Stop (cand se da click)
startButton.click(function (event) {
    var state = $(this).attr('data-state');

    if (state === 'start') {
        console.log("started");
        // atasare eveniment
        window.addEventListener("devicemotion", onMotionEvent, false); // si aici asculta eventlistener functia onMtionEvent pasata ca parametru la eventListener
        trackInfo.html("Pasii sunt numarati");
        $(this).attr('data-state', 'stop'); // seteaza internal state pt butonu de stop
        $(this).html("Stop")
    } else { // pana aici pt start si de aici in jos pt stop
        console.log("stopped");
        // deatasare eveniment
        window.removeEventListener("devicemotion", onMotionEvent, false); // nu mai asculta evnetlisteneru
        $(this).attr('data-state', 'start');  // seteaza internal state pt butonu de stop
        trackInfo.html("Pasii nu sunt numarati");
        $(this).html("Start")
    }
});

// functie de tip callback pentru evenimentul "devicemotion"
function onMotionEvent(event) {
    // o implementare simpla - se poate calcula cu o anumita formula
    if (event.accelerationIncludingGravity.z > 0.7 && event.accelerationIncludingGravity.z < 2) { // 0.7 si 2 is m/s
        steps.currentSteps = steps.currentSteps + 1;
        stepsNumber.html(steps.currentSteps);
    }
}


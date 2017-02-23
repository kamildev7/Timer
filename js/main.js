var time = document.getElementById('time');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new alarm(time);

function start() {
    watch.start();
    toggleBtn.textContent = 'Stop';
}

function stop() {
    watch.stop();
    toggleBtn.textContent = 'Start';
}

toggleBtn.addEventListener('click', function() {
    (watch.isOn) ? stop() : start();
});

resetBtn.addEventListener('click', function() {
        watch.reset ();
});

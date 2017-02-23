function alarm(elem) {
    var time = 0;
    var interval;
    var offset;

    function update() {
        if (this.isOn) {
            var timePassed = delta();
            time += timePassed;
        }

        var formattedTime = timeFormatter(time);
        elem.textContent = formattedTime;
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(timeInMilliseconds) {
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
        if(minutes == 30 && seconds < 3) {
			playSound();
        }
        if(minutes == 35) {
			setTimeout(function() {
				playSound();
				
				setTimeout(function() {
					resetBtn.click();
				}, 4000);
			}, 500);
            //playSound();
            //resetBtn.click();
        }
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }

        return minutes + ' : ' + seconds;
    }

    this.isOn = false;

    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update.bind(this), 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function() {
        time = 0;
        update();
    };

    function playSound() {
        var sound = document.getElementById("audio");
        sound.play();
    }
}

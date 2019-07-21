function getTimeRemaining(endtime) {
    let ms = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / 1000 / 60) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));

    return {
        'total': ms,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function startClock(endtime) {

    let DOMStrings = {
        days: '#banner__days',
        hours: '#banner__hours',
        minutes: '#banner__minutes',
        seconds: '#banner__seconds',
    }

    let days = document.querySelector(DOMStrings.days);
    let hours = document.querySelector(DOMStrings.hours);
    let minutes = document.querySelector(DOMStrings.minutes);
    let seconds = document.querySelector(DOMStrings.seconds);

    function updateClock() {
        let time = getTimeRemaining(endtime);
        days.innerHTML = time.days;
        hours.innerHTML = ('0' + time.hours).slice(-2);
        minutes.innerHTML = ('0' + time.minutes).slice(-2);
        seconds.innerHTML = ('0' + time.seconds).slice(-2);

        if (time.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2019-12-31';
startClock(deadline);
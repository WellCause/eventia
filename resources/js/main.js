// TABS CHANGER

function changeDay(event, dayNumber) {

    let tabcontent = document.getElementsByClassName("agenda__schedule");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    
    let tablinks = document.querySelectorAll(".agenda__select");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('agenda__select--selected');
    }
    
    document.getElementById(dayNumber).style.display = "grid";
    event.currentTarget.classList.add('agenda__select--selected');
}


// TIMER

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


// STICKY HEADER

function applyStickyNavigation() {
    let waypoint = new Waypoint({
        element: $('.explore'),
        handler: function(direction) {
            if (direction === 'down') {
                $('.header').addClass('header--sticky');
                console.log('123');
            } else {
                $('.header').removeClass('header--sticky');
            }
        }
      })
}

// START

$(document).ready(function() {
    document.getElementById("default").click(); // Select default tab

    // Set deadline and start timer
    const deadline = '2019-12-31';
    startClock(deadline);

    applyStickyNavigation();
})

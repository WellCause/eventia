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

window.onload = function() {
    document.getElementById("default").click();
}

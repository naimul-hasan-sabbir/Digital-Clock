function clock(){
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "october", "November", "December"]
    var dayNames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    var todayDate = new Date();

    document.getElementById('date').innerHTML = (dayNames[todayDate.getDay()]+ " " + todayDate.getDate() + " " + monthNames[todayDate.getMonth()] + " " + todayDate.getFullYear())

    var hours = todayDate.getHours()
    var minutes = todayDate.getMinutes()
    var seconds = todayDate.getSeconds()

    var day = hours < 11 ? "AM" : "PM"

    hours = hours < 10 ? '0' + hours: hours
    minutes = minutes < 10 ? '0' + minutes: minutes
    seconds = seconds < 10 ? '0' + seconds: seconds

    document.getElementById('hours').innerHTML = hours
    document.getElementById('min').innerHTML = minutes
    document.getElementById('sec').innerHTML = seconds

}
var inter = setInterval(clock, 400)


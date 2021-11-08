function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600;
}
function getMinutesSinceStartOfDay() {
    return new Date().getMinutes() * 60
}
function getHoursSinceStartOfDay() {
    return new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
}, 1000);

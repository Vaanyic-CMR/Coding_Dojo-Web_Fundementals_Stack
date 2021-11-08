function loadCity() {
    alert("Loading weather report...")
}

function acceptCookies() {
    let cookie_window = document.querySelector("#cookie_prompt");
    cookie_window.style.display = "none";
}

var cValues = [24, 18, 27, 19, 21, 16, 26, 21]
var fValues = [75, 65, 80, 66, 69, 61, 78, 70]
function changeMeasureType(element) {
    // console.log(element.value)
    if (element.value.slice(-1) == "C"){
        for (let i = 0; i < 8; i++){
            document.querySelector("#temp_" + i).innerHTML = cValues[i]+"<span>&#176;</span>"
        }
    }else if (element.value.slice(-1) == "F"){
        for (let i = 0; i < 8; i++){
            document.querySelector("#temp_" + i).innerHTML = fValues[i]+"<span>&#176;</span>"
        }
    }
}
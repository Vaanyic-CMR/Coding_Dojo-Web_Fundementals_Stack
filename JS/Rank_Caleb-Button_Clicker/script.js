function clickLoginLogout(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    }else {
        element.innerText = "Login";
    }
}

function addDefinition(element) {
    element.remove();
}

function clickLike(element) {
    alert("Ninja was liked!")
}
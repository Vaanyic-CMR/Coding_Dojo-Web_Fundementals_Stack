var displayDiv = document.querySelector("#display");
var val_1 = "0";
var val_2 = "0";
var val = 1;
var OP = "";
var OP_set = false;
var calc = false;

function clr() {
    displayDiv.innerText = "0";
    val_1 = "0";
    val_2 = "0";
    val = 1;
    OP = "";
}

function press(num) {
    if (val == 1) {
        if (displayDiv.innerText == 0 || calc == true) {
            displayDiv.innerText = num;
            val_1 = `${num}`;
            calc = false;
        }
        else if (displayDiv.innerHTML.length < 10) {
            displayDiv.innerText += num;
            val_1 += `${num}`;
        }
        else if (displayDiv.innerText.includes('...')) {
            val_1 += `${num}`;
        }
        else {
            displayDiv.innerText = val_1 + '...';
            val_1 += `${num}`;
        }
    }
    if (val == 2) {
        if (displayDiv.innerText == 0 || OP_set == true) {
            displayDiv.innerText = num;
            val_2 = `${num}`;
            calc = false;
            OP_set = false;
        }
        else if (displayDiv.innerHTML.length < 10) {
            displayDiv.innerText += num;
            val_2 += `${num}`;
        }
        else if (displayDiv.innerText.includes('...')) {
            val_2 += `${num}`;
        }
        else {
            displayDiv.innerText = val_2 + '...';
            val_2 += `${num}`;
        }
    }
}

function setOP(op) {
    OP = op;
    OP_set = true;
    val = 2;
}

function calculate() {
    if (OP == "/") {
        displayDiv.innerText = val_1 / val_2;
    }
    else if (OP == "*") {
        displayDiv.innerText = val_1 * val_2;
    }
    else if (OP == "-") {
        displayDiv.innerText = val_1 - val_2;
    }
    else if (OP == "+") {
        displayDiv.innerText = Number(val_1) + Number(val_2);
    }
    calc = true;
    OP_set = false;
    val = 1;
}
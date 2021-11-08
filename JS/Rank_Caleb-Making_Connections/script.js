var total_req = 2
var total_connect = 418

function acceptRequest(req_num) {
    let request = document.querySelector("#req_" + req_num);
    let request_num = document.querySelector("#req_num");
    let connect_num = document.querySelector("#connect_num");
    total_req--;
    total_connect++;
    request_num.innerText = "" + total_req;
    connect_num.innerText = "" + total_connect;
    request.remove();
}

function denyRequest(req_num) {
    let request = document.querySelector("#req_" + req_num);
    let request_num = document.querySelector("#req_num");
    total_req--;
    request_num.innerText = "" + total_req;
    request.remove()
}

function editProfile() {
    let request = document.querySelector("#user_name");
    request.innerText = "Caleb Rank";
}
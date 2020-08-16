var result = false;
var usernameOp = "";
var emailOp = "";
var passOp = "";

function validation() {
    let usernameVal = usernameValidate();
    let emailVal = emailvalidate();
    let passVal = passValidate();
    console.log(usernameVal);
    console.log(emailVal);
    console.log(passVal);
    result = emailVal * passVal * usernameVal;
    if (result == true) {
        let output = document.querySelector('#op-con');
        output.children[1].children[1].innerHTML = usernameOp;
        output.children[2].children[1].innerHTML = emailOp;
        output.children[3].children[1].innerHTML = passOp;
        output.style.visibility = "visible";
        document.querySelector('#userName').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#pass').value = "";
        let msg = document.querySelector('#userMsg');
        msg.innerHTML = "No capital Letters";
        msg.style.color = "black";
        let msg1 = document.querySelector('#emailMsg');
        msg1.innerHTML = "We will not share any private data";
        msg1.style.color = "black";
        let msg2 = document.querySelector('#passMsg');
        msg2.innerHTML = "Password Length 8 - 32 characters";
        msg2.style.color = "black";



    }
    else {
        let output = document.querySelector('#op-con');
        output.style.visibility = "hidden";
        comsole.log("Invalid Parameters");

    }
}

function usernameValidate() {
    let userName = document.querySelector('#userName').value;
    let regex = /^([a-z0-9@_]+)$/
    if (userName == "") {
        alert("Username cannot be blank");
    }
    if (regex.test(userName)) {

        usernameOp = userName;
        return true;
    }
    else {
        let msg = document.querySelector('#userMsg');
        msg.innerHTML = "No capital Letters";
        msg.style.color = "red";
        console.log("Username Invalid");
    }
}


function emailvalidate() {
    let userMail = document.querySelector('#email').value;
    let regex = /^([a-zA_Z0-9\.@_]+)@([a-zA_Z0-9\.-_]{2,20}).([a-z]{2,3})(\.[a-z]{2,10})$/
    if (regex.test(userMail)) {
        emailOp = userMail;
        return true;
    }
    else {

        let msg = document.querySelector('#emailMsg');
        msg.innerHTML = "Invalid Email Pattern, Try Again";
        msg.style.color = "red";
    }
}


function passValidate() {
    let userPass = document.querySelector('#pass').value;
    if (userPass == "") {
        alert("Password Cannot be Null !!");
        let msg = document.querySelector('#passMsg');
        msg.innerHTML = "Password cannot be blank";
        msg.style.color = "red";
        return false;
    }
    else {
        passOp = userPass;
        return true;
    }
}
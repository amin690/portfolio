function validateEmail() {
    let email = document.getElementById("emailInput").value;
    let emailError = document.getElementById("emailError");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        emailError.textContent = "Please enter a valid email address";
        return false;  
    } 
    else {
        emailError.textContent = "";
        return true;
    }
}

//////////////////////////////

function showMessageSent() {
    if(confirm("are you sure you want to send the message?")){
        alert("Message Sent!");}  
    else {

    }     
}

/////////////////////

document.querySelector('form').addEventListener('submit', function (e) {
    if (!validateEmail()) {
        e.preventDefault();  
    }else {
        showMessageSent();
    }
});








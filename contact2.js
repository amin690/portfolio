document.querySelector('.contact form').addEventListener('submit', function (e) {
    e.preventDefault();

    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('emailInput').value;
    const mobile = document.getElementById('phoneNumber').value;

    
    const nameRegex = /^[a-zA-Z]+$/;

    
    if (firstName.length < 3 || lastName.length < 3 || !email || !mobile) {
        alert('Please fill in all fields and ensure that first name and last name have at least 3 letters.');
    } else {
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            alert('First name and last name should contain only letters.');
        } else {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
            } else {
                if (!/^\d{8}$/.test(mobile)) {
                    alert('Please enter a valid 8-digit mobile number.');
                } else {
                    
                    const confirmation = confirm('Are you sure you want to send the message?');
                    if (confirmation) {
                        this.submit();
                        alert('Message Sent!');
                    } else {
                        alert('Message not sent.');
                    }
                }
            }
        }
    }
});


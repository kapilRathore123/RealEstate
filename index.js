document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    // Validate form fields (you can add more validation if needed)
    if (firstName && lastName && email && mobile) {
        // Do something with the form data, like sending it to a server
        console.log('Form submitted successfully!');
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Mobile:', mobile);
    } else {
        alert('Please fill in all mandatory fields.');
    }
});

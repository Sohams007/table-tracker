// JavaScript file for login page

// Function to validate the login form
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password match the expected values
    if (username.trim() !== 'moonlight' || password.trim() !== 'MOON1234') {
        alert('Invalid username or password');
        return false; // Prevent form submission
    }

    // If the username and password are correct, allow form submission
    return true;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    if (validateForm()) {
        // If the form is valid, submit it
        document.getElementById('loginForm').submit();
    }
}

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', handleSubmit);





function registerUser() {
    var password = document.getElementById("rpassword").value;
    var confirmPassword = document.getElementById("rconfirm-password").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }
    // Proceed with form submission or other actions
    return true;
}




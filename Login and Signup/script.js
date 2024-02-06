let isLoginForm = true;

function toggleForm() {
    isLoginForm = !isLoginForm;

    const formTitle = document.getElementById('formTitle');
    const submitButton = document.getElementById('submitButton');
    const toggleFormText = document.getElementById('toggleFormText');
    const confirmPasswordLabel = document.getElementById('confirmPasswordLabel');
    const confirmPassword = document.getElementById('confirmPassword');

    if (isLoginForm) {
        formTitle.innerText = 'Login';
        submitButton.innerText = 'Login';
        toggleFormText.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleForm()">Register here</a>';
        confirmPasswordLabel.style.display = 'none';
        confirmPassword.style.display = 'none';
    } else {
        formTitle.innerText = 'Register';
        submitButton.innerText = 'Register';
        toggleFormText.innerHTML = 'Already have an account? <a href="#" onclick="toggleForm()">Login here</a>';
        confirmPasswordLabel.style.display = 'block';
        confirmPassword.style.display = 'block';
    }
}

async function authenticateUser(username, password, action) {
    // Update API endpoint URL
    const apiUrl = 'http://localhost:3000/auth/' + action;

    // Make request to server
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    // Handle response
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}

async function submitForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!isLoginForm && password !== confirmPassword) {
        alert('Passwords do not match. Please check and try again.');
        return;
    }

    const action = isLoginForm ? 'login' : 'register';

    try {
        // Call server-side authentication function
        const response = await authenticateUser(username, password, action);

        // Handle server response
        if (response.success) {
            alert(`${action.charAt(0).toUpperCase() + action.slice(1)} successful!`);
        } else {
            alert(`${action.charAt(0).toUpperCase() + action.slice(1)} failed. Please check your credentials.`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}
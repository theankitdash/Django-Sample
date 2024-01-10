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

function submitForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!isLoginForm && password !== confirmPassword) {
        alert('Passwords do not match. Please check and try again.');
        return;
    }

    const action = isLoginForm ? 'login' : 'register';

    authenticateUser(username, password, action);
}

function authenticateUser(username, password, action) {
    fetch(`/${action}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`${action.charAt(0).toUpperCase() + action.slice(1)} successful!`);
        } else {
            alert(`${action.charAt(0).toUpperCase() + action.slice(1)} failed. Please check your credentials.`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

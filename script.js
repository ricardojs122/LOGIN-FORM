// Form submission event listener
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Perform form validation
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;
  
    if (validateForm(username, password)) {
      // Successful login
      displayMessage('success', 'Login successful! Redirecting to the dashboard...');
      setTimeout(function () {
        window.location.href = 'dashboard.html'; // Redirect to the dashboard page
      }, 2000);
    } else {
      // Failed login
      displayMessage('error', 'Invalid username or password.');
    }
  });
  
  // Function to validate the form inputs
  function validateForm(username, password) {
    // Perform your validation logic here
    // Return true if the inputs are valid, false otherwise
    return username === 'yourusername' && password === 'yourpassword';
  }
  
  // Function to display success or error messages
  function displayMessage(type, message) {
    var messageContainer = document.getElementById('message-container');
    messageContainer.textContent = message;
  
    if (type === 'success') {
      messageContainer.classList.remove('error');
      messageContainer.classList.add('success');
    } else {
      messageContainer.classList.remove('success');
      messageContainer.classList.add('error');
    }
  }
  
  // Clear the message container when the input fields gain focus
  var inputFields = document.querySelectorAll('input');
  inputFields.forEach(function (input) {
    input.addEventListener('focus', function () {
      document.getElementById('message-container').textContent = '';
    });
  });
  
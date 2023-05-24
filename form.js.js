// Form submission event listener
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

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

// Clear the message container when the input fields gain focus
var inputFields = document.querySelectorAll('input');
inputFields.forEach(function (input) {
  input.addEventListener('focus', function () {
    document.getElementById('message-container').textContent = '';
  });
});

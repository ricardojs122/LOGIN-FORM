// Function to validate the form inputs
function validateForm(username, password) {
    // Check if the username and password meet the required criteria
    if (!validateUsername(username) || !validatePassword(password)) {
      return false; // Validation failed
    }
  
    return true; // Validation successful
  }
  
  // Function to validate the username
  function validateUsername(username) {
    // Check if the username is empty
    if (username.trim() === '') {
      return false; // Validation failed
    }
  
    // Add more username validation rules if needed
  
    return true; // Validation successful
  }
  
  // Function to validate the password
  function validatePassword(password) {
    // Check if the password is empty
    if (password.trim() === '') {
      return false; // Validation failed
    }
  
    // Check if the password meets the minimum length requirement
    if (password.length < 8) {
      return false; // Validation failed
    }
  
    // Add more password validation rules if neededs bro
  
    return true; // Validation successful
  }
  
  // love u guys
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
  
// Login Page
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === 'valentine14@gmail.com' && password === 'Valentine@2025') {
      window.location.href = 'post-login.html';
    } else {
      alert('Invalid login. Please try again!');
    }
  });
  
  // Post-login page 
  document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
  
    if (noButton && yesButton) {  // Only run this part on the post-login page
      let noClickCount = 0;
  
      noButton.addEventListener('click', function() {
        noClickCount++;
        if (noClickCount < 3) {
          alert('Are you sure? 💔');
        } else {
          yesButton.style.transform = `scale(${1 + noClickCount * 0.2})`;
          yesButton.style.transition = 'transform 0.3s ease';
        }
      });
  
      yesButton.addEventListener('click', function() {
        alert('Yay! ❤️ Can’t wait to celebrate together!');
        window.location.href = 'acceptance.html';
      });
    }
  });
  
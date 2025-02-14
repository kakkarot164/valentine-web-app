document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noBtn');
    const yesButton = document.getElementById('yesBtn');
    
    let noClickCount = 0;
  
    noButton.addEventListener('click', function() {
      noClickCount++;
      if (noClickCount < 3) {
        noButton.textContent = 'Are you sure? 💔';
      } else {
        noButton.textContent = 'Really sure? 😢';
        yesButton.style.transform = `scale(${1 + noClickCount * 0.2})`;
        yesButton.style.transition = 'transform 0.3s ease';
      }
    });
  
    yesButton.addEventListener('click', function() {
      alert('Yay! ❤️ Can’t wait to celebrate together!');
      window.location.href = 'acceptance.html'; // Redirect after clicking YES
    });
  });
  
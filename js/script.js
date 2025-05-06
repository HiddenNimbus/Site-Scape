
document.addEventListener('DOMContentLoaded', () => {
  let guestBar = document.getElementById('guest-bar');
  let qrCodeContainer = document.getElementById('qr-code-container');

  guestBar.addEventListener('click', function() {
      if (qrCodeContainer.style.display === 'none' || qrCodeContainer.style.display === '') {
          qrCodeContainer.style.display = 'block';  
      } else {
          qrCodeContainer.style.display = 'none';   
      }
  });

  let audio = document.getElementById('bg-audio');
  let playbutton = document.getElementById('play-audio-button');
  if (audio && playbutton) {
      playbutton.addEventListener('click', () => {
          audio.play().catch(error => {
              console.error('Failed to start audio playback', error);
          });
      });
  }
});

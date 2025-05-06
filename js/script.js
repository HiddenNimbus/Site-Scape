
document.addEventListener('DOMContentLoaded', () => {
  const guestBar = document.getElementById('guest-bar');
  const qrCodeContainer = document.getElementById('qr-code-container');

  guestBar.addEventListener('click', function() {
      if (qrCodeContainer.style.display === 'none' || qrCodeContainer.style.display === '') {
          qrCodeContainer.style.display = 'block';  
      } else {
          qrCodeContainer.style.display = 'none';   
      }
  });

  const audio = document.getElementById('bg-audio');
  const playbutton = document.getElementById('play-audio-button');
  if (audio && playbutton) {
      playbutton.addEventListener('click', () => {
          audio.play().catch(error => {
              console.error('Failed to start audio playback', error);
          });
      });
  }
});

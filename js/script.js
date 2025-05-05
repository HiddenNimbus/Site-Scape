
const guestBar = document.getElementById('guest-bar');
const qrCodeContainer = document.getElementById('qr-code-container');


guestBar.addEventListener('click', function() {

    if (qrCodeContainer.style.display === 'none' || qrCodeContainer.style.display === '') {
        qrCodeContainer.style.display = 'block';  
    } else {
        qrCodeContainer.style.display = 'none';   
    }
});
 
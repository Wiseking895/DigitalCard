// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Sounds
const hoverSound = new Audio('assets/hover-sound.mp3');
const clickSound = new Audio('assets/click-sound.mp3');

// Background hover sound
const card = document.getElementById('card');
card.addEventListener('mouseenter', () => {
  hoverSound.currentTime = 0;
  hoverSound.play();
});

// Click sound for buttons and links
document.querySelectorAll('.click-btn, .social-link, a').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// Hamburger menu toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// ✅ Download the card as JPG (without including the button)
document.getElementById('download-btn').addEventListener('click', () => {
  // Play click sound
  clickSound.currentTime = 0;
  clickSound.play();

  const cardElement = document.getElementById('card');
  const downloadBtn = document.getElementById('download-btn');

  // Temporarily hide the download button before capturing
  downloadBtn.style.visibility = 'hidden';

  html2canvas(cardElement, {
    scale: 2,
    backgroundColor: null,
    useCORS: true
  }).then(canvas => {
    // Restore button after capture
    downloadBtn.style.visibility = 'visible';

    // Convert to JPG and download
    const image = canvas.toDataURL('image/jpeg', 1.0);
    const link = document.createElement('a');
    link.href = image;
    link.download = 'My_Digital_Card.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }).catch(err => {
    // Restore button on error
    downloadBtn.style.visibility = 'visible';
    console.error('Error capturing card:', err);
  });
});

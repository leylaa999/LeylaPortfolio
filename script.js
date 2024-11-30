// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Modal popup for project previews
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.project-card img').forEach(img => {
  img.addEventListener('click', function () {
    modal.style.display = 'block';
    modalContent.innerHTML = `<img src="${this.src}" style="width:100%;">`;
  });
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

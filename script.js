
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.target); 
        if (entry.isIntersecting) {
            console.log('Element is in view:', entry.target); 
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 }); 

const fadeSlideUpElements = document.querySelectorAll('.fade-in, .slide-up');


fadeSlideUpElements.forEach(element => {
    observer.observe(element);
});
const projectContainer = document.querySelector('.project-container');

let isDragging = false;
let startX;
let scrollLeft;


projectContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    projectContainer.classList.add('dragging');
    startX = e.pageX - projectContainer.offsetLeft;
    scrollLeft = projectContainer.scrollLeft;
});

// Mouse Leave Event
projectContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    projectContainer.classList.remove('dragging');
});


projectContainer.addEventListener('mouseup', () => {
    isDragging = false;
    projectContainer.classList.remove('dragging');
});


projectContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - projectContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    projectContainer.scrollLeft = scrollLeft - walk;
});
const leftButton = document.querySelector('.scroll-btn.left');
const rightButton = document.querySelector('.scroll-btn.right');

leftButton.addEventListener('click', () => {
    projectContainer.scrollLeft -= 300; // Scroll left by 300px
});

rightButton.addEventListener('click', () => {
    projectContainer.scrollLeft += 300; // Scroll right by 300px
});

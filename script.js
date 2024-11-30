// Function to add 'visible' class when the element is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.target); // Log each observed element to see if it's detected
        if (entry.isIntersecting) {
            console.log('Element is in view:', entry.target); // Debug: Element is in view
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's in view
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Select the elements you want to animate (fade-in and slide-up)
const fadeSlideUpElements = document.querySelectorAll('.fade-in, .slide-up');

// Observe each element
fadeSlideUpElements.forEach(element => {
    observer.observe(element);
});
const projectContainer = document.querySelector('.project-container');

let isDragging = false;
let startX;
let scrollLeft;

// Mouse Down Event
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

// Mouse Up Event
projectContainer.addEventListener('mouseup', () => {
    isDragging = false;
    projectContainer.classList.remove('dragging');
});

// Mouse Move Event
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

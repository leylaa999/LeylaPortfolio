// Function to add 'visible' class when the element is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once the element is in view
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Select elements to animate (fade-in and slide-up)
const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-up');

// Observe each element
elementsToAnimate.forEach(element => {
    observer.observe(element);
});

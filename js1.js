
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 }); 


const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-up');


elementsToAnimate.forEach(element => {
    observer.observe(element);
});

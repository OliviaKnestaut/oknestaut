// Get the button element
const goTopButton = document.querySelector('.go-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        // Fade the button in by changing the opacity
        goTopButton.style.opacity = '1';
        goTopButton.style.transition = 'opacity 0.3s ease-in';
        goTopButton.style.pointerEvents = 'auto'; // Enable click events
    } else {
        // Fade the button out by changing the opacity
        goTopButton.style.opacity = '0';
        goTopButton.style.transition = 'opacity 0.3s ease-out';
        goTopButton.style.pointerEvents = 'none'; // Disable click events when invisible
    }
});

// Scroll to the top smoothly when the button is clicked
goTopButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scroll to the top
    });
});

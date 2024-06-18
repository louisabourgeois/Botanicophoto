// code.js

// Smooth scrolling for navbar links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // You can add your form submission logic here
    // For example, send the form data to a server using fetch or XMLHttpRequest
    // Then show a success message or handle any errors
    alert('Form submitted!');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission handling
document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out!");
    this.reset();
});

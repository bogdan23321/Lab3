function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    
    // Use toggle to add or remove 'show' class based on scroll position
    scrollButton.classList.toggle('show', window.scrollY > 300);
});

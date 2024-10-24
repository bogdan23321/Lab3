function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-to-top');
    // Toggle the 'show' class based on scroll position
    scrollButton.classList.toggle('show', window.scrollY > 300);
});

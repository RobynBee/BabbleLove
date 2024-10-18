function checkPassword() {
    const password = document.getElementById('password').value;

    if (password === '21/10/2020') {
        window.location.href = 'babiMan.html';
    } else {
        alert('Are you certain you are the Babi Man?');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        observer.observe(element);
    });
});
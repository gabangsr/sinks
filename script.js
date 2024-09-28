document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementById('closeModal');

    openModal.onclick = function () {
        modal.style.display = "block";
    }

    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); 
        }
    });
}


const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1  
});


const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    observer.observe(item);
});



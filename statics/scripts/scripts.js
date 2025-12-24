// Mobile Nav Toggle
function myFunction() {
    var x = document.getElementById("MyNav");
    var body = document.body;
    if (x.className === "Nav") {
        x.className += " responsive";
        body.classList.add("no-scroll");
    } else {
        x.className = "Nav";
        body.classList.remove("no-scroll");
    }
}

// Modal Management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.classList.add("no-scroll");
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}

// Ensure all close buttons work
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('close-modal') || event.target.getAttribute('data-close')) {
        const modalId = event.target.getAttribute('data-close');
        if (modalId) {
            closeModal(modalId);
        } else {
            // Fallback for older close buttons
            const modal = event.target.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        }
    }
});
// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change Navigation Bar on Scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#ff6699';
    } else {
        nav.style.backgroundColor = '#ff99cc';
    }
});


// Select all navigation links
let navLinks = document.querySelectorAll("nav ul li a");

// Function to remove jump class after animation ends
function removeJumpClass(event) {
    event.target.classList.remove("clicked");
}

// Function to handle navigation link click
function handleNavLinkClick(event) {
    // Prevent default behavior
    event.preventDefault();

    // Get the target section's ID from the link's href
    let targetId = event.target.getAttribute("href").substring(1);

    // Get the corresponding section
    let targetSection = document.getElementById(targetId);

    // Add jump animation to the link and section
    event.target.classList.add("clicked");
    targetSection.classList.add("jump-section");

    // Scroll to the section smoothly
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Remove jump class after animation ends
    event.target.addEventListener("animationend", removeJumpClass);
    targetSection.addEventListener("animationend", () => {
        targetSection.classList.remove("jump-section");
    });
}

// Attach click event to each navigation link
navLinks.forEach(link => {
    link.addEventListener("click", handleNavLinkClick);
});


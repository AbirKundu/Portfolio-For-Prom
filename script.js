// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change Navigation Bar on Scrol
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

const texts = [
    "an ENGINEER.",
    "a CODER.",
    "a PROGRAMMER.",
    "a DEVELOPER.",
    "a DESIGNER.",
    "a YOUTUBER."
    //"ARCHITECT",
    //"FULL-STACK DEVELOPER",
    //"UI/UX",

    
]

let speed  = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

// JavaScript to Change Background Color
const bgChangeIcon = document.getElementById('bg-change-icon');

// Array of colors to cycle through
const colors = [
    { color: '#d1c4e9', name: 'Lavender' },        // Lavender
    { color: '#b3e5fc', name: 'Sky Blue' },        // Sky Blue
    { color: '#c8e6c9', name: 'Pale Green' },      // Pale Green
    { color: '#ffccbc', name: 'Peach' },           // Peach
    { color: '#ffebee', name: 'Light Red' },       // Light Red
    { color: '#e3f2fd', name: 'Light Blue' },      // Light Blue
    { color: '#f1f8e9', name: 'Light Lime' },      // Light Lime
    { color: '#fff9c4', name: 'Light Yellow' },    // Light Yellow
    { color: '#e8f5e9', name: 'Mint Green' },      // Mint Green
    { color: '#fce4ec', name: 'Baby Pink' },       // Baby Pink
    { color: '#e1bee7', name: 'Orchid' },           // Orchid
    { color: '#ffe6f2', name: 'Light Pink' },      // Light Pink
    
];
let currentColorIndex = 0;

bgChangeIcon.addEventListener('click', function () {
    // Change the background color
    document.body.style.backgroundColor = colors[currentColorIndex].color;

    // Optionally, you can log the color name to the console
    console.log(`Background color changed to: ${colors[currentColorIndex].name}`);

    // Cycle through colors
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

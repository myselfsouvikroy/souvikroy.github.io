const textElement = document.getElementById('typewriter-text');
const textToAnimate = "Research Scholar | Student | Science Enthusiast";
const typingDelay = 50; // Delay between each character typing (in milliseconds)

let charIndex = 0;

function type() {
    if (charIndex < textToAnimate.length) {
        textElement.textContent += textToAnimate.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
}

type(); // Start the typewriter effect when the page loads


// I tried to think of 3 things that the CSS could easily change, that's how I ended up with the effects I did

window.addEventListener("DOMContentLoaded", initSpans, false);

// Changed to initSpans because I was having conflict with my other js file to rotate the logo
function initSpans() {
    const opacitySpan = document.getElementById("opacitySpan");
    const backgroundSpan = document.getElementById("backgroundSpan");
    const italicSpan = document.getElementById("italicSpan");
    
    // Event listeners
    opacitySpan.addEventListener("click", () => toggleEffect(opacitySpan, "opacity"), false);
    backgroundSpan.addEventListener("click", () => toggleEffect(backgroundSpan, "alt-background"), false);
    italicSpan.addEventListener("click", () => toggleEffect(italicSpan, "italicized"), false);
}

// Toggles whether button is on or not, changes color to show if it has
function toggleEffect(span, effectClass) {
    span.classList.toggle("on");
    document.body.classList.toggle(effectClass);
}

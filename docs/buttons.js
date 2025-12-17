window.addEventListener("DOMContentLoaded", initSpans, false);

function initSpans() {
    const opacitySpan = document.getElementById("opacitySpan");
    const backgroundSpan = document.getElementById("backgroundSpan");
    const italicSpan = document.getElementById("italicSpan");
    
    opacitySpan.addEventListener("click", () => toggleEffect(opacitySpan, "opacity"), false);
    backgroundSpan.addEventListener("click", () => toggleEffect(backgroundSpan, "alt-background"), false);
    italicSpan.addEventListener("click", () => toggleEffect(italicSpan, "italicized"), false);
}

function toggleEffect(span, effectClass) {
    span.classList.toggle("on");
    document.body.classList.toggle(effectClass);
}

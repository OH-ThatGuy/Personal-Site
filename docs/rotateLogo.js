// I wanted something simple so I had the idea to rotate the logo on the page every time it gets clicked

let rotation = 0; // This keeps tracks of the number of rotations

window.addEventListener("DOMContentLoaded", init, false);

function init() {
    const logo = document.getElementById("name");
    logo.addEventListener("click", rotateLogo, false);
}

function rotateLogo() {
    const logo = document.getElementById("name");

    // Increases the rotation by 90 degrees
    rotation += 90;
    logo.style.transform = `rotate(${rotation}deg)`;

    // I found this section of code online to make the spin more smooth
    logo.style.transition = "transform 0.5s ease";
}

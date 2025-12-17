document.addEventListener("DOMContentLoaded", () => {
    const returnTop = document.getElementById("returnTop");
    if (returnTop) {
        returnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

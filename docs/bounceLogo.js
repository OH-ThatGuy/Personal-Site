const logo = document.getElementById("name");

if (logo) {
    const logoContainer = logo.parentElement;
    
    let clone = null;
    let x = 0;
    let y = 0;
    let dx = 2;
    let dy = 2;
    let animating = false;
    
    logo.addEventListener("click", () => {
        if (animating) return;
        animating = true;
        
        const rect = logo.getBoundingClientRect();
        
        clone = logo.cloneNode(true);
        clone.removeAttribute("id");
        
        clone.style.position = "fixed";
        clone.style.left = rect.left + "px";
        clone.style.top = rect.top + "px";
        clone.style.width = rect.width + "px";
        clone.style.height = "auto";
        clone.style.zIndex = "9999";
        clone.style.pointerEvents = "none";
        
        document.body.appendChild(clone);
        
        logo.style.visibility = "hidden";
        
        x = rect.left;
        y = rect.top;
        
        requestAnimationFrame(bounce);
    });
    
    function bounce() {
        const w = clone.offsetWidth;
        const h = clone.offsetHeight;
        
        x += dx;
        y += dy;
        
        if (x <= 0 || x + w >= window.innerWidth) dx *= -1;
        if (y <= 0 || y + h >= window.innerHeight) dy *= -1;
        
        clone.style.left = x + "px";
        clone.style.top = y + "px";
        
        requestAnimationFrame(bounce);
    }
}
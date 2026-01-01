// Heart burst effect
function burst(e) {
    e.preventDefault();
    document.body.style.animation = "flash 0.3s";
    setTimeout(() => {
        window.location.href = "second.html";
    }, 300);
}

// Reveal quote
function reveal() {
    document.querySelector(".big-heart").style.display = "none";
    document.getElementById("quoteBox").style.display = "block";
}

// ===== AUTOPLAY HANDLING =====
window.addEventListener("load", () => {
    const song = document.getElementById("bgMusic"); // use bgMusic for home.html
    if (song) song.play().catch(() => {});
});

const heartContainer = document.querySelector('.heart-container');
if(heartContainer){
    for(let i=0;i<50;i++){
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.position = 'absolute';
        heart.style.left = Math.random()*100 + 'vw';
        heart.style.top = '-20px';
        heart.style.opacity = 0.7 + Math.random()*0.3;
        heart.style.fontSize = '1px'; // base tiny font
        heart.style.transform = `scale(${0.5 + Math.random()*0.5})`; // 0.5–1
        heart.style.animation = `fall ${3 + Math.random()*3}s linear infinite`;
        heartContainer.appendChild(heart);
    }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(-50px) rotate(0deg) scale(1); opacity:1; }
  100% { transform: translateY(110vh) rotate(360deg) scale(1); opacity:0; }
}`;
document.head.appendChild(style);

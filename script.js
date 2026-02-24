const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}

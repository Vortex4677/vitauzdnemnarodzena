const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  if (!envelope.classList.contains("open")) {
    envelope.classList.add("open");
    createHearts();
  }
});

function createHearts() {
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 14 + 16) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

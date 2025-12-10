import gsap from "gsap";

const reactions = document.querySelectorAll(".reactions button");

reactions.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const emoji = e.target.dataset.emoji;

    // Create floating bubble
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = emoji;
    document.body.appendChild(bubble);

    // Get button position for starting point
    const rect = e.target.getBoundingClientRect();

    // Position bubble at button center
    bubble.style.left = rect.left + rect.width / 2 + "px";
    bubble.style.top = rect.top + rect.height / 2 + "px";

    // Bubble animation
    gsap.fromTo(
      bubble,
      {
        y: 0,
        scale: 0.5,
        opacity: 1,
        rotate: 0,
      },
      {
        y: -120,
        scale: 1.5,
        opacity: 0,
        rotate: gsap.utils.random(-25, 25),
        duration: 1.2,
        ease: "power2.out",
        onComplete: () => bubble.remove(),
      }
    );
  });
});

import gsap from "gsap";

const card = document.getElementById("card");
const wrapper = document.querySelector(".card-wrapper");

// Entrance animation
gsap.from(card, {
  opacity: 0,
  y: 40,
  scale: 0.9,
  duration: 0.8,
  ease: "power3.out"
});

// Flip on hover (wrapper prevents flicker)
wrapper.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotateY: 180,
    duration: 0.6,
    ease: "power2.out"
  });
});

wrapper.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotateY: 0,
    duration: 0.6,
    ease: "power2.inOut"
  });
});

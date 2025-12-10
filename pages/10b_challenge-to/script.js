import gsap from "gsap";

const toastOne = document.querySelector(".toast.one");
const toastTwo = document.querySelector(".toast.two");

const tl = gsap.timeline();

// Toast 1 animation
tl.fromTo(
  toastOne,
  { y: 40, opacity: 0, scale: 0.95 },
  { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
)
  .to(toastOne, {
    y: -40,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    ease: "power2.inOut"
  })

  // Toast 2 starts AFTER toast 1 completes
  .fromTo(
    toastTwo,
    { y: 40, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
  )
  .to(toastTwo, {
    y: -40,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    ease: "power2.inOut"
  });

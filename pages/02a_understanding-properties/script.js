import gsap from 'gsap';

gsap.to ('.box', {
  opacity: 1,
  rotation: 360,
  background: '#ffffff',
  //   borderRadius: '50%',
  scale: 1,
  duration: 2,
  ease: 'bounce',
//   repeat: -1,
//   yoyo: true,
//   repeatDelay: 2,
stagger:1
});

gsap.to ('.card', {
  opacity: 1,
  scale: 1,
  duration: 5,
  oncComplete:()=>{
    gsap.to('.card',{
        x: -20,
        repeat:-1,
        yoyo:true,
        duration:0.5
    })
  }
});

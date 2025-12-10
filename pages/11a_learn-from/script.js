import gsap from "gsap";

const repeat=document.querySelector('.repeat')

const Animation=gsap.from('.card',{
    y:60,
    opacity:0,
    scale:0.95,
    duration:0.6,
    delay:0.2,
    ease:"power4.out",
    stagger:0.2    

})

repeat.addEventListener('click',()=>{
    Animation.restart()
})
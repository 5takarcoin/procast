const burger = document.querySelector('nav svg');
burger.addEventListener('click', () => {
    if(burger.classList.contains('active')){
        gsap.to('.links', {x: '100%'});
        gsap.to('.rect', {fill: "var(--secondery-color)"});     
        gsap.set('body', {overflow: "auto"});
        gsap.set('body', {overflowX: "hidden"});
    }else{
        gsap.to('.links', {x: '0%'});
        gsap.to('.rect', {fill: "var(--main-color)"});
        gsap.set('body', {overflow: "hidden"});
    }
    burger.classList.toggle("active");
})

const videos = gsap.utils.toArray('.videos video');
gsap.set(videos, { opacity: 0});

videos.forEach(video => {
    ScrollTrigger.create({
        trigger: video,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            gsap.to(video, {opacity: 1});
            video.play();
        },
        onEnterBack: () => {
            video.play();
        },
        onLeave: () => {
            video.pause();
        },
        onLeaveBack: () => {
            video.pause();
        },
    })
});
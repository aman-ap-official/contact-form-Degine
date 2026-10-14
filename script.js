// Ensure GSAP, ScrollTrigger, and other plugins are registered
gsap.registerPlugin(ScrollTrigger);

// --- GSAP Animations ---


// 8. Contact Section Animations
gsap.from("[data-gsap-animation='contact-info']", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none reverse",
    }
});
gsap.from("[data-gsap-animation='contact-form']", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none reverse",
    }
});



const tl = gsap.timeline();

tl.from(".content-logo h1", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 1,
})
// tl.from(".login button", {
//     y: -30,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//     stagger: 0.5
// })



// sec2.
// Ensure GSAP and ScrollTrigger are properly loaded
gsap.registerPlugin(ScrollTrigger);

// Animate box1 from the left during scroll
gsap.from(".box1", {
    x: "-100%", // Start off-screen to the left
    opacity: 0, // Start fully transparent
    duration: 1, // Animation duration
    delay: 0.3,
    scrollTrigger: {
        trigger: ".sec2", // Trigger animation when .sec2 is in view
        start: "top 0%", // Start animation when the top of .sec2 is 80% from the top of the viewport
        end: "top 100%", // End animation when the top of .sec2 is 20% from the top of the viewport
        scrub: 3, // Smoothly scrub through the animation on scroll
        // markers: true, // Optional: Add markers for debugging (remove in production)
    },
});

// Animate box2 from the right during scroll
gsap.from(".box2", {
    x: "100%", // Start off-screen to the right
    opacity: 0, // Start fully transparent
    duration: 1, // Animation duration
    delay: 0.3,
    scrollTrigger: {
        trigger: ".sec2", // Trigger animation when .sec2 is in view
        start: "top 0%", // Start animation when the top of .sec2 is 80% from the top of the viewport
        end: "top 100%", // End animation when the top of .sec2 is 20% from the top of the viewport
        scrub: 3, // Smoothly scrub through the animation on scroll
        // markers: true, // Optional: Add markers for debugging (remove in production)
    },
});
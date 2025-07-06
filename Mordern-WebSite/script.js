// CURSOR FOLLOW
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: "power2.out",
  });
});

// MENU MAGNET EFFECT
const menuBtn = document.querySelector(".menu-btn");
const magnetBg = menuBtn.querySelector(".magnet-bg");
const svgPaths = menuBtn.querySelectorAll("svg path");

window.addEventListener("mousemove", (e) => {
  const btnRect = menuBtn.getBoundingClientRect();
  const x = e.clientX - btnRect.left - btnRect.width / 2;
  const y = e.clientY - btnRect.top - btnRect.height / 2;
  const distance = Math.sqrt(x * x + y * y);

  const threshold = 80;

  if (distance < threshold) {
    // Magnet pull
    gsap.to(menuBtn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power3.out",
    });

    // Show black background
    magnetBg.style.opacity = 1;

    // Make icon white
    svgPaths.forEach((p) => p.setAttribute("stroke", "#ffffff"));
  } else {
    // Reset position
    gsap.to(menuBtn, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power3.out",
    });

    // Hide background
    magnetBg.style.opacity = 0;

    // Make icon black again
    svgPaths.forEach((p) => p.setAttribute("stroke", "#141B34"));
  }
});

// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
// Shery.hoverWithMedicaCircle(".hvr", {
//   videos: ["./0.mp4", "./2.mp4", "./3.mp4"],

// });

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".fleftelm", {
//   scrollTrigger: {
//     trigger: "#fimages",
//     pin: true,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 1,
//   },
//   y: "-300%",
//   ease: "power1.out",
// });

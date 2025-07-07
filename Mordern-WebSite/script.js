const cursor = document.querySelector(".cursor");
const menuBtn = document.querySelector(".menu-btn");
const magnetBg = document.querySelector(".magnet-bg");
const menuIcon = document.querySelector(".menu-btn i");

// Cursor Movement
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: "power2.out",
  });
});

// Change cursor color to black when hovering menu
menuBtn.addEventListener("mouseenter", () => {
  cursor.style.backgroundColor = "black"; // 🟤 Black cursor
});

menuBtn.addEventListener("mouseleave", () => {
  cursor.style.backgroundColor = "white"; // ⚪ Back to white
});
// Hover In
menuBtn.addEventListener("mouseenter", () => {
  gsap.to(magnetBg, {
    scale: 1,
    opacity: 1,
    duration: 0.1,
    ease: "power2.out",
  });
  menuIcon.style.color = "#fff"; // menu icon white
});

// Mouse Move Inside Button
menuBtn.addEventListener("mousemove", (e) => {
  const rect = menuBtn.getBoundingClientRect();
  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;

  gsap.to(magnetBg, {
    x: relX - rect.width / 2,
    y: relY - rect.height / 2,
    duration: 0.1,
    ease: "power3.out",
  });

  // Move menu icon (with slight delay and scale feel)
  gsap.to(menuIcon, {
    x: (relX - rect.width / 2) * 0.2,
    y: (relY - rect.height / 2) * 0.2,
    duration: 0.1,
    ease: "power3.out",
  });
});

// Hover Out
menuBtn.addEventListener("mouseleave", () => {
  gsap.to(magnetBg, {
    scale: 0,
    opacity: 0,
    duration: 0.1,
    ease: "power2.out",
  });
  menuIcon.style.color = "#000"; // menu icon back to black
});

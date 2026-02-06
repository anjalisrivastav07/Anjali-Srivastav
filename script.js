/* Custom Cursor */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
});

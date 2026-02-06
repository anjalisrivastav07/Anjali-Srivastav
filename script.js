/* =================================================
   MASTER SCRIPT — ANJALI SRIVASTAV PORTFOLIO
================================================= */
window.addEventListener("load", () => {

  /* =========================
     LOADER INTRO
  ========================= */
  const loader = document.getElementById("loader");
  gsap.to(loader, {
    opacity: 0,
    duration: 1,
    delay: 1,
    onComplete: () => loader.style.display = "none"
  });

  /* =========================
     THEME TOGGLE
  ========================= */
  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    toggle.textContent = body.classList.contains("light") ? "🌙" : "☀️";
  });

  /* =========================
     CUSTOM CURSOR
  ========================= */
  const cursor = document.querySelector(".cursor");
  const glow = document.querySelector(".cursor-glow");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  /* =========================
     MAGNETIC BUTTONS
  ========================= */
  document.querySelectorAll(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", e => {
      const r = btn.getBoundingClientRect();
      btn.style.transform =
        `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px,
                   ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0,0)";
    });
  });

  /* =========================
     SMOOTH SCROLL INERTIA
  ========================= */
  let currentScroll = 0;
  let targetScroll = 0;

  window.addEventListener("scroll", () => {
    targetScroll = window.scrollY;
  });

  function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * 0.08;
    document.documentElement.style.scrollBehavior = "auto";
    requestAnimationFrame(smoothScroll);
  }
  smoothScroll();

  /* =========================
     GSAP SCROLL REVEAL
  ========================= */
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".reveal").forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      }
    );
  });

  /* =========================
     EMAILJS CONTACT FORM
  ========================= */
  emailjs.init("YOUR_PUBLIC_KEY"); // <-- REPLACE

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",   // <-- REPLACE
      "YOUR_TEMPLATE_ID",  // <-- REPLACE
      form
    )
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
    }, () => {
      alert("Failed to send message. Try again.");
    });
  });

  /* =========================
     THREE.JS BACKGROUND (DESKTOP ONLY)
  ========================= */
  if (window.innerWidth > 768) {
    const canvas = document.getElementById("bg");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 30;

    const geometry = new THREE.TorusKnotGeometry(10, 3, 120, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(20, 20, 20);
    scene.add(light);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.003;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

});

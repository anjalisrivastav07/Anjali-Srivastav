/* ===============================
   CUSTOM CURSOR + GLOW
================================ */
const cursor = document.querySelector(".cursor");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* ===============================
   MAGNETIC BUTTONS
================================ */
const magneticButtons = document.querySelectorAll(".magnetic");

magneticButtons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/* ===============================
   GSAP SCROLL REVEAL
================================ */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    }
  );
});

/* ===============================
   PARALLAX EFFECT
================================ */
gsap.utils.toArray(".parallax").forEach((section) => {
  gsap.to(section, {
    y: -80,
    scrollTrigger: {
      trigger: section,
      scrub: true,
    },
  });
});

/* ===============================
   THREE.JS BACKGROUND
================================ */
const canvas = document.getElementById("bg");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.z = 30;

/* Geometry */
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

/* Lights */
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

/* Animation Loop */
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.002;
  torus.rotation.y += 0.003;
  renderer.render(scene, camera);
}
animate();

/* Resize */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

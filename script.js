// Interacciones ligeras de la página del Puesto de Salud Curpahuasi
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      menuToggle.textContent = "☰";
      mainNav.querySelectorAll("a").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

// Mantiene los porcentajes de avance visibles y accesibles.
// La barra de la meta superada se limita visualmente al 100 %, mientras el texto muestra 106 %.
document.querySelectorAll(".progress-track").forEach((track) => {
  const value = Number(track.getAttribute("aria-valuenow") || 0);
  const fill = track.querySelector(".progress-fill");
  if (fill) fill.style.width = `${Math.max(0, Math.min(100, value))}%`;
});

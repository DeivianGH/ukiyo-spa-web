/* UKIYO WELLNESS HIDROSENSE — CATÁLOGO VISUAL
   Para cambiar una foto: sube el archivo a GitHub dentro de images/planes/ y edita el campo image de ese plan.
   Ejemplo: image: "images/planes/experiencia-romantica.jpg"
   También puedes usar una URL pública https://... Deja image: "" para mantener el recuadro blanco vacío.
*/
const WHATSAPP_NUMBER = "573213706726";
const PLANS = [
  { id: "romantica-2x1", name: "Experiencia Romántica 2x1", image: "" },
  { id: "romantico", name: "Plan Romántico", image: "" },
  { id: "aniversario", name: "Plan Aniversario", image: "" },
  { id: "romantica-plena", name: "Experiencia Romántica Plena", image: "" },
  { id: "romantica-vip", name: "Experiencia Romántica Plena VIP", image: "" },
  { id: "romantico-dos", name: "Plan Romántico para Dos", image: "" },
  { id: "amigas", name: "Día de Amigas", image: "" },
  { id: "enamorar", name: "Plan para Enamorar", image: "" },
  { id: "grupal", name: "Experiencia Relajante / Grupal", image: "" },
  { id: "cumpleanos", name: "Regalo Cumpleaños", image: "" }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function renderPlans() {
  const grid = document.getElementById("planGrid");
  if (!grid) return;
  grid.innerHTML = PLANS.map((plan) => {
    const message = `Hola, Ukiyo Wellness Hidrosense. Quiero información sobre el plan: ${plan.name}. ¿Me pueden compartir detalles, precio y disponibilidad?`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const image = plan.image
      ? `<img src="${escapeHtml(plan.image)}" alt="${escapeHtml(plan.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">`
      : "";
    return `<a class="plan-card" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp sobre ${escapeHtml(plan.name)}">
      <div class="plan-image">${image}<span class="plan-image-fallback" aria-hidden="true"></span></div>
    </a>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlans();
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();
});

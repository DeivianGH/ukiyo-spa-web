/* ==========================================================
   UKIYO SPA — CONFIGURACIÓN Y FUNCIONAMIENTO
   EDITA LOS PRECIOS, SERVICIOS Y WHATSAPP EN ESTA SECCIÓN.
   Los precios están expresados en pesos colombianos (COP).
   ========================================================== */

// 1) CAMBIA ESTE NÚMERO por el WhatsApp del negocio.
//    Incluye código de país, solo números. Colombia = 57.
//    Ejemplo ficticio: 573001234567
const WHATSAPP_NUMBER = "573000000000";

// 2) EDITA AQUÍ los planes, sus precios, descripciones e imágenes.
//    Puedes usar imágenes propias o enlaces públicos de imágenes.
const PLANS = [
  {
    id: "relajacion",
    name: "Relajación",
    description: "Una pausa para descansar y recargar energía.",
    duration: "1 hora",
    price: 150000,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "premium",
    name: "Premium",
    description: "Una experiencia especial para desconectarte.",
    duration: "1 hora y 30 min",
    price: 200000,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "intenso",
    name: "Intenso",
    description: "Más tiempo para disfrutar tu momento de bienestar.",
    duration: "2 horas",
    price: 300000,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "pareja",
    name: "Experiencia en pareja",
    description: "Un momento especial para compartir.",
    duration: "2 horas",
    price: 400000,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  }
];

// 3) PRECIO DE CADA DURACIÓN EXTRA.
//    El precio del plan base ya incluye la duración indicada arriba.
//    Estas opciones suman el valor que configures al precio del plan.
const DURATIONS = [
  { id: "base", label: "Duración incluida en el plan", extraPrice: 0 },
  { id: "extra30", label: "+ 30 minutos", extraPrice: 30000 },
  { id: "extra60", label: "+ 1 hora", extraPrice: 50000 }
];

// 4) EDITA AQUÍ bebidas, cócteles y otros complementos.
//    price = precio por unidad; emoji = icono que aparece en la página.
const EXTRAS = [
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { id: "agua", name: "Agua", description: "Agua embotellada", price: 5000, emoji: "💧" },
      { id: "jugo", name: "Jugo natural", description: "Jugo de fruta", price: 8000, emoji: "🍹" },
      { id: "refresco", name: "Refresco", description: "Bebida fría", price: 6000, emoji: "🥤" }
    ]
  },
  {
    id: "cocteles",
    title: "Cócteles",
    items: [
      { id: "mojito", name: "Mojito sin alcohol", description: "Refrescante", price: 12000, emoji: "🌿" },
      { id: "margarita", name: "Margarita sin alcohol", description: "Cítrica y fresca", price: 14000, emoji: "🍋" }
    ]
  },
  {
    id: "complementos",
    title: "Complementos",
    items: [
      { id: "jacuzzi", name: "Tiempo adicional de jacuzzi", description: "Sujeto a disponibilidad", price: 40000, emoji: "🫧" },
      { id: "decoracion", name: "Decoración especial", description: "Para una ocasión especial", price: 35000, emoji: "🕯️" }
    ]
  }
];

// 5) PROMOCIONES: el descuento se resta al total si se selecciona.
//    discount es el valor descontado en pesos, no un porcentaje.
const PROMOTIONS = [
  { id: "promo_pareja", name: "Promoción pareja", description: "Descuento de ejemplo", discount: 20000, emoji: "💚" },
  { id: "promo_fecha", name: "Detalle de celebración", description: "Descuento de ejemplo", discount: 10000, emoji: "🎁" }
];

// ================ FIN DE LA CONFIGURACIÓN ================

const state = {
  selectedPlanId: PLANS[0]?.id ?? null,
  durationId: DURATIONS[0]?.id ?? null,
  quantities: {},
  selectedPromotions: new Set()
};

const $ = (id) => document.getElementById(id);
const money = (amount) => new Intl.NumberFormat("es-CO", {
  style: "currency", currency: "COP", maximumFractionDigits: 0
}).format(amount);

function getSelectedPlan() {
  return PLANS.find((plan) => plan.id === state.selectedPlanId) || null;
}
function getSelectedDuration() {
  return DURATIONS.find((duration) => duration.id === state.durationId) || DURATIONS[0];
}
function getExtraItems() {
  return EXTRAS.flatMap((group) => group.items);
}
function getSelectedExtras() {
  return getExtraItems().filter((item) => (state.quantities[item.id] || 0) > 0);
}
function getSelectedPromotions() {
  return PROMOTIONS.filter((promo) => state.selectedPromotions.has(promo.id));
}
function getTotal() {
  const plan = getSelectedPlan();
  const duration = getSelectedDuration();
  const extrasTotal = getSelectedExtras().reduce((sum, item) => sum + item.price * state.quantities[item.id], 0);
  const discount = getSelectedPromotions().reduce((sum, promo) => sum + promo.discount, 0);
  return Math.max(0, (plan?.price || 0) + (duration?.extraPrice || 0) + extrasTotal - discount);
}

function renderPlans() {
  $("planGrid").innerHTML = PLANS.map((plan) => `
    <button class="plan-card ${plan.id === state.selectedPlanId ? "selected" : ""}" type="button"
      data-plan="${escapeHtml(plan.id)}" aria-pressed="${plan.id === state.selectedPlanId}">
      <div class="plan-image" style="background-image:linear-gradient(0deg,rgba(15,25,18,.08),rgba(15,25,18,.02)),url('${escapeHtml(plan.image)}')"></div>
      <div class="plan-body">
        <h4>${escapeHtml(plan.name)}</h4>
        <p>${escapeHtml(plan.description)}<br><small>${escapeHtml(plan.duration)} incluidos</small></p>
        <div class="plan-bottom"><span class="plan-price">${money(plan.price)}</span><span class="select-indicator">✓</span></div>
      </div>
    </button>`).join("");
  $("planGrid").querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPlanId = button.dataset.plan;
      renderPlans();
      renderSummary();
    });
  });
}

function renderDurations() {
  $("durationOptions").innerHTML = DURATIONS.map((duration) => `
    <button type="button" class="duration-option ${duration.id === state.durationId ? "selected" : ""}"
      data-duration="${escapeHtml(duration.id)}" aria-pressed="${duration.id === state.durationId}">
      ${escapeHtml(duration.label)}
      <strong>${duration.extraPrice ? "+ " + money(duration.extraPrice) : "Incluido"}</strong>
    </button>`).join("");
  $("durationOptions").querySelectorAll("[data-duration]").forEach((button) => {
    button.addEventListener("click", () => {
      state.durationId = button.dataset.duration;
      renderDurations();
      renderSummary();
    });
  });
}

function renderExtras() {
  const groupsHtml = EXTRAS.map((group) => `
    <div class="extra-group">
      <h4>${escapeHtml(group.title)}</h4>
      <div class="extra-grid">
        ${group.items.map((item) => {
          const qty = state.quantities[item.id] || 0;
          return `<div class="extra-card ${qty ? "selected" : ""}">
            <span class="extra-emoji" aria-hidden="true">${escapeHtml(item.emoji)}</span>
            <div class="extra-info"><strong>${escapeHtml(item.name)}</strong><span>${money(item.price)} c/u</span></div>
            <div class="quantity-controls">
              <button type="button" data-minus="${escapeHtml(item.id)}" aria-label="Quitar ${escapeHtml(item.name)}" ${qty === 0 ? "disabled" : ""}>−</button>
              <output aria-label="Cantidad">${qty}</output>
              <button type="button" data-plus="${escapeHtml(item.id)}" aria-label="Añadir ${escapeHtml(item.name)}">+</button>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>`).join("");

  const promosHtml = PROMOTIONS.length ? `
    <div class="extra-group">
      <h4>Promociones disponibles</h4>
      <div class="extra-grid">
        ${PROMOTIONS.map((promo) => {
          const selected = state.selectedPromotions.has(promo.id);
          return `<div class="extra-card ${selected ? "selected" : ""}">
            <span class="extra-emoji" aria-hidden="true">${escapeHtml(promo.emoji)}</span>
            <div class="extra-info"><strong>${escapeHtml(promo.name)}</strong><span>− ${money(promo.discount)}</span></div>
            <div class="quantity-controls"><button type="button" data-promo="${escapeHtml(promo.id)}" aria-pressed="${selected}" aria-label="${selected ? "Quitar" : "Añadir"} ${escapeHtml(promo.name)}">${selected ? "✓" : "+"}</button></div>
          </div>`;
        }).join("")}
      </div>
    </div>` : "";

  $("extrasGroups").innerHTML = groupsHtml + promosHtml;
  $("extrasGroups").querySelectorAll("[data-plus]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.plus;
    state.quantities[id] = (state.quantities[id] || 0) + 1;
    renderExtras(); renderSummary();
  }));
  $("extrasGroups").querySelectorAll("[data-minus]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.minus;
    state.quantities[id] = Math.max(0, (state.quantities[id] || 0) - 1);
    renderExtras(); renderSummary();
  }));
  $("extrasGroups").querySelectorAll("[data-promo]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.promo;
    if (state.selectedPromotions.has(id)) state.selectedPromotions.delete(id);
    else state.selectedPromotions.add(id);
    renderExtras(); renderSummary();
  }));
}

function renderSummary() {
  const plan = getSelectedPlan();
  const duration = getSelectedDuration();
  const lines = [];
  if (plan) lines.push({ label: `Plan: ${plan.name}`, price: plan.price });
  if (duration && duration.extraPrice > 0) lines.push({ label: `Duración extra: ${duration.label}`, price: duration.extraPrice });
  getSelectedExtras().forEach((item) => {
    lines.push({ label: `${item.name} × ${state.quantities[item.id]}`, price: item.price * state.quantities[item.id] });
  });
  getSelectedPromotions().forEach((promo) => lines.push({ label: promo.name, price: -promo.discount }));

  $("summaryItems").innerHTML = lines.length ? lines.map((line) => `
    <div class="summary-line"><span>${escapeHtml(line.label)}</span><strong>${line.price < 0 ? "− " + money(Math.abs(line.price)) : money(line.price)}</strong></div>`).join("")
    : `<p class="summary-empty">Selecciona un plan para comenzar a crear tu experiencia.</p>`;
  $("totalPrice").textContent = money(getTotal());
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function buildWhatsappMessage() {
  const plan = getSelectedPlan();
  const duration = getSelectedDuration();
  const lines = [
    "Hola, Ukiyo Spa. Quiero consultar disponibilidad para este plan:",
    "",
    `Plan: ${plan ? plan.name : "Sin seleccionar"}`,
    `Precio del plan: ${money(plan?.price || 0)}`,
    `Duración: ${plan?.duration || "Por confirmar"}${duration?.extraPrice ? ` + ${duration.label} (${money(duration.extraPrice)})` : ""}`
  ];
  getSelectedExtras().forEach((item) => lines.push(`${item.name} × ${state.quantities[item.id]}: ${money(item.price * state.quantities[item.id])}`));
  getSelectedPromotions().forEach((promo) => lines.push(`${promo.name}: -${money(promo.discount)}`));
  lines.push("", `TOTAL ESTIMADO: ${money(getTotal())}`, "", "Mis datos:");
  const name = $("customerName").value.trim();
  const date = $("preferredDate").value;
  const time = $("preferredTime").value;
  const notes = $("customerNotes").value.trim();
  if (name) lines.push(`Nombre: ${name}`);
  if (date) lines.push(`Fecha preferida: ${date}`);
  if (time) lines.push(`Horario preferido: ${time}`);
  if (notes) lines.push(`Notas: ${notes}`);
  lines.push("", "Entiendo que el valor es estimado y que la reserva, disponibilidad y precio final se confirman por WhatsApp. Gracias.");
  return lines.join("\n");
}

$("sendWhatsapp").addEventListener("click", () => {
  if (!getSelectedPlan()) {
    alert("Por favor, selecciona un plan antes de continuar.");
    return;
  }
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER) || WHATSAPP_NUMBER === "573000000000") {
    alert("Antes de publicar, edita WHATSAPP_NUMBER al principio de script.js y coloca el número real de WhatsApp de Ukiyo Spa, con código de país y solo números.");
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsappMessage())}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

$("clearSelection").addEventListener("click", () => {
  state.selectedPlanId = PLANS[0]?.id ?? null;
  state.durationId = DURATIONS[0]?.id ?? null;
  state.quantities = {};
  state.selectedPromotions = new Set();
  $("customerName").value = "";
  $("preferredDate").value = "";
  $("preferredTime").value = "";
  $("customerNotes").value = "";
  renderAll();
});

$("headerWhatsapp").addEventListener("click", (event) => {
  // Este enlace lleva al configurador para que primero armen su plan.
  event.preventDefault();
  $("configurador").scrollIntoView({ behavior: "smooth" });
});

function renderAll() {
  renderPlans();
  renderDurations();
  renderExtras();
  renderSummary();
}
$("currentYear").textContent = new Date().getFullYear();
renderAll();

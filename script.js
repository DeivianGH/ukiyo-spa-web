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
  { id: "romantica-2x1", name: "Experiencia Romántica 2x1", description: "Una escapada para compartir y disfrutar juntos.", duration: "3 horas", price: 480000, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80", details: ["Masaje completo de 1 hora para la experiencia 2x1", "Jacuzzi y sauna", "Platos fuertes y bebidas a la carta"] },
  { id: "romantico", name: "Plan Romántico", description: "Un ritual de bienestar en un espacio íntimo.", duration: "2 horas", price: 300000, image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80", details: ["Masaje en espalda, cuello y gemelos", "Masaje japonés capilar y facial", "Piedras calientes, reflexología en manos y pies", "Aromaterapia, chocolaterapia facial y exfoliación corporal", "Jacuzzi privado y decoración romántica: pétalos, globos, luces, velas, mensaje y música a elección"] },
  { id: "aniversario", name: "Plan Aniversario", description: "Un detalle especial para celebrar su historia.", duration: "1 hora y 30 minutos", price: 250000, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80", details: ["Masaje relajante de 30 minutos", "Jacuzzi privado y decoración romántica", "Pétalos, globos, velas, mensaje y música", "Fresas con crema y 2 limonadas (Cocó o Cereza)"] },
  { id: "romantica-plena", name: "Experiencia Romántica Plena", description: "Bienestar, privacidad y cena para dos.", duration: "3 horas", price: 500000, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80", details: ["Masajes en espalda, cuello y gemelos; japonés capilar y facial", "Piedras calientes, reflexología, aromaterapia y chocolaterapia facial", "Exfoliación corporal", "Jacuzzi y sauna privados", "Decoración romántica completa con pétalos, globos, luces, velas, mensaje y música", "Cena a elegir: Bistec al romance rojo (salsa de vino y champiñones) o Tentación de maracuyá (pechuga a la plancha en salsa de maracuyá), con puré cremoso, ensalada frutal y bebida"] },
  { id: "romantica-vip", name: "Experiencia Romántica Plena VIP", description: "Un ritual extendido con detalles exclusivos.", duration: "4 horas", price: 800000, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80", details: ["Masaje de tejido profundo en espalda", "Masaje japonés capilar y facial; masaje de cuello y gemelos", "Pindas herbales calientes y toallas herbales calientes", "Reflexología en manos y pies", "Exfoliación con sales minerales y barro cromático en todo el cuerpo", "Exfoliación corporal", "Jacuzzi y sauna privados, decoración romántica", "2 platos especiales a la carta y bebida de bienvenida"] },
  { id: "romantico-dos", name: "Plan Romántico para Dos", description: "Una pausa compartida entre semana.", duration: "2 horas · lunes a viernes", price: 150000, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80", details: ["Masaje relajante para dos", "Jacuzzi privado", "Copa de vino espumoso", "Antifaz relajante, aromaterapia y ambiente romántico", "Precio indicado por pareja; válido de lunes a viernes"] },
  { id: "amigas", name: "Día de Amigas", description: "Un momento de descanso para disfrutar juntas.", duration: "1 hora y 30 minutos", price: 250000, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80", details: ["Masaje relajante de 30 minutos", "Jacuzzi", "Fresas con crema", "2 limonadas (Cocó o Cereza)"] },
  { id: "enamorar", name: "Plan para Enamorar", description: "Calidez, cuidado y pequeños placeres.", duration: "2 horas", price: 350000, image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80", details: ["Masaje con pindas herbales calientes en todo el cuerpo", "Masaje relajante periorbitario, facial y capilar", "Masaje de pies en decúbito supino", "Exfoliación", "Fresas con crema y 2 limonadas (Cocó o Cereza)"] },
  { id: "grupal", name: "Experiencia Relajante / Grupal", description: "Un ritual de bienestar para compartir en grupo.", duration: "2 horas", price: 300000, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80", details: ["Masajes en espalda, cuello y gemelos; japonés capilar y facial", "Piedras calientes, reflexología, aromaterapia", "Chocolaterapia facial y exfoliación corporal", "Jacuzzi; decoración opcional", "Tarifas: 2 personas $300.000 · 3 personas $450.000 · 4 personas $600.000"] },
  { id: "cumpleanos", name: "Regalo Cumpleaños", description: "Celebra con relajación y un detalle inolvidable.", duration: "2 horas", price: 150000, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80", details: ["Masaje relajante y reflexología en manos y pies", "Jacuzzi y sauna", "Copa de helado con velita y canción", "Decoración cumpleañera incluida: mensaje, tarjeta, globos, banda, corona y canción"] }
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
  { id: "bebidas", title: "Bebidas y brindis", items: [
    { id: "agua", name: "Agua embotellada", description: "Agua", price: 5000, emoji: "💧" },
    { id: "jugo", name: "Jugo natural", description: "Fruta natural", price: 8000, emoji: "🍹" },
    { id: "limonada", name: "Limonada Cocó o Cereza", description: "Elige tu sabor por WhatsApp", price: 10000, emoji: "🍋" },
    { id: "vino", name: "Copa de vino espumoso", description: "Para brindar", price: 18000, emoji: "🥂" },
    { id: "coctel", name: "Cóctel especial", description: "Consulta sabores disponibles", price: 22000, emoji: "🍸" },
    { id: "mocktail", name: "Cóctel sin alcohol", description: "Refrescante y especial", price: 16000, emoji: "🍹" }
  ]},
  { id: "dulces", title: "Postres y detalles dulces", items: [
    { id: "fresas", name: "Fresas con crema", description: "Porción adicional", price: 18000, emoji: "🍓" },
    { id: "helado", name: "Copa de helado", description: "Un detalle dulce", price: 14000, emoji: "🍨" },
    { id: "postre", name: "Postre de la casa", description: "Según disponibilidad", price: 20000, emoji: "🍰" },
    { id: "chocolates", name: "Chocolates", description: "Para compartir", price: 15000, emoji: "🍫" }
  ]},
  { id: "bienestar", title: "Bienestar y ambiente", items: [
    { id: "masajeextra", name: "Masaje adicional de 30 min", description: "Sujeto a disponibilidad", price: 45000, emoji: "💆‍♀️" },
    { id: "jacuzzi", name: "Tiempo adicional de jacuzzi", description: "Sujeto a disponibilidad", price: 40000, emoji: "🫧" },
    { id: "sauna", name: "Tiempo adicional de sauna", description: "Sujeto a disponibilidad", price: 35000, emoji: "♨️" },
    { id: "decoracion", name: "Decoración romántica especial", description: "Para una ocasión especial", price: 35000, emoji: "🕯️" },
    { id: "mensaje", name: "Mensaje personalizado", description: "Tarjeta con dedicatoria", price: 10000, emoji: "💌" },
    { id: "antifaz", name: "Antifaz relajante", description: "Un detalle para descansar", price: 12000, emoji: "😌" }
  ]}
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
        <ul class="plan-details">${(plan.details || []).map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>
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

/* UKIYO WELLNESS HIDROSENSE — galería visual con modal. */
const PLANS = [
  { id: "romantica-2x1", name: "Experiencia Romántica 2x1", image: "images/planes/plan-1.jpeg" },
  { id: "romantico", name: "Plan Romántico", image: "images/planes/plan-2.jpeg" },
  { id: "aniversario", name: "Plan Aniversario", image: "images/planes/plan-3.jpeg" },
  { id: "romantica-plena", name: "Experiencia Romántica Plena", image: "images/planes/plan-4.jpeg" },
  { id: "romantica-vip", name: "Experiencia Romántica Plena VIP", image: "images/planes/plan-5.jpeg" },
  { id: "romantico-dos", name: "Plan Romántico para Dos", image: "images/planes/plan-6.jpeg" },
  { id: "amigas", name: "Día de Amigas", image: "images/planes/plan-7.jpeg" },
  { id: "enamorar", name: "Plan para Enamorar", image: "images/planes/plan-8.jpeg" }
];
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function renderPlans() {
  const grid = document.getElementById("planGrid");
  if (!grid) return;
  grid.innerHTML = PLANS.map((plan, index) => {
    const image = plan.image ? `<img src="${escapeHtml(plan.image)}" alt="${escapeHtml(plan.name)}" loading="lazy">` : "";
    return `<button class="plan-card gallery-trigger" type="button" data-index="${index}" aria-label="Ampliar imagen del ${escapeHtml(plan.name)}"><span class="plan-image">${image}<span class="plan-image-fallback" aria-hidden="true"></span></span></button>`;
  }).join("");
}
function initLightbox() {
  const modal = document.getElementById("imageLightbox");
  const modalImage = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  const closeButton = document.getElementById("lightboxClose");
  const previousButton = document.getElementById("lightboxPrev");
  const nextButton = document.getElementById("lightboxNext");
  if (!modal || !modalImage || !closeButton) return;
  let activeImages = [], activeIndex = 0, lastFocused = null;
  const getGalleryImages = name => {
    if (name === "plans") return [...document.querySelectorAll("#planGrid .plan-card")].map(card => {
      const img = card.querySelector("img");
      return {src: img?.getAttribute("src") || "", alt: img?.getAttribute("alt") || card.getAttribute("aria-label") || "Plan Ukiyo", element: img || card};
    });
    return [...document.querySelectorAll(".drinks-grid .drink-media img")].map(img => ({src: img.getAttribute("src") || "", alt: img.getAttribute("alt") || "Nuestra Carta & Gastronomía", element: img}));
  };
  function closeLightbox() {
    modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open"); modalImage.removeAttribute("src");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }
  function showImage(index) {
    if (!activeImages.length) return;
    activeIndex = (index + activeImages.length) % activeImages.length;
    const item = activeImages[activeIndex];
    if (!item.src) { closeLightbox(); return; }
    modalImage.src = item.src; modalImage.alt = item.alt; caption.textContent = item.alt;
    const showNavigation = activeImages.length > 1;
    previousButton.hidden = !showNavigation; nextButton.hidden = !showNavigation;
  }
  function openLightbox(images, index, trigger) {
    if (!images[index]?.src) return;
    activeImages = images; activeIndex = index; lastFocused = trigger || document.activeElement;
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open"); showImage(index); closeButton.focus();
  }
  document.addEventListener("click", event => {
    const planCard = event.target.closest("#planGrid .plan-card");
    if (planCard) { event.preventDefault(); openLightbox(getGalleryImages("plans"), Number(planCard.dataset.index || 0), planCard); return; }
    const drinkImage = event.target.closest(".drinks-grid .drink-media img");
    if (drinkImage) { const gallery = getGalleryImages("drinks"); openLightbox(gallery, gallery.findIndex(item => item.element === drinkImage), drinkImage); return; }
    const aboutImage = event.target.closest(".about-media img");
    if (aboutImage?.getAttribute("src")) openLightbox([{src:aboutImage.getAttribute("src"),alt:aboutImage.getAttribute("alt") || "Ukiyo Wellness Hidrosense",element:aboutImage}],0,aboutImage);
  });
  closeButton.addEventListener("click", closeLightbox);
  modal.addEventListener("click", event => { if (event.target === modal) closeLightbox(); });
  previousButton.addEventListener("click", () => showImage(activeIndex - 1));
  nextButton.addEventListener("click", () => showImage(activeIndex + 1));
  document.addEventListener("keydown", event => {
    if (!modal.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showImage(activeIndex - 1);
    if (event.key === "ArrowRight") showImage(activeIndex + 1);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderPlans(); initLightbox();
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();
});

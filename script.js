// ===================================================
// BRANZ MEGA KUNINGAN — Interactions
// ===================================================

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("navBurger");
  const mobileMenu = document.getElementById("navMobile");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });

  /* ---------- Hero load-in sequence ---------- */
  requestAnimationFrame(() => {
    document
      .querySelectorAll(".hero-eyebrow, .hero-sub, .hero-actions")
      .forEach((el, i) => {
        setTimeout(() => el.classList.add("is-visible"), 200 + i * 150);
      });
    document.querySelectorAll(".reveal-line").forEach((el, i) => {
      setTimeout(() => el.classList.add("is-visible"), 300 + i * 130);
    });
  });

  /* ---------- Hero parallax ---------- */
  const heroImg = document.getElementById("heroImg");
  const hero = document.getElementById("hero");
  window.addEventListener(
    "scroll",
    () => {
      const rect = hero.getBoundingClientRect();
      if (rect.bottom > 0) {
        const progress = Math.min(1, Math.abs(rect.top) / rect.height);
        heroImg.style.transform = `scale(1.08) translateY(${progress * 60}px)`;
      }
    },
    { passive: true },
  );

  /* ---------- Scroll-triggered reveals ---------- */
  const revealTargets = document.querySelectorAll(
    ".reveal-up, .reveal-scale, .reveal-window",
  );

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
  );

  revealTargets.forEach((el) => io.observe(el));

  /* Staggered reveal for grouped siblings (facility cards, window frames) */
  const staggerGroups = [
    document.querySelectorAll(".fac-card"),
    document.querySelectorAll(".window-frame"),
  ];
  staggerGroups.forEach((group) => {
    group.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.09}s`;
    });
  });

  /* ---------- Lead form ---------- */
  const form = document.getElementById("leadForm");
  const success = document.getElementById("leadSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fname").value.trim();
    const phone = document.getElementById("fphone").value.trim();
    const message = document.getElementById("fmsg").value.trim();

    // Send to WhatsApp as fallback (can be replaced with a backend endpoint/Formspree)
    const waNumber = "6281290246038";
    const waText = encodeURIComponent(
      `Hello, I am ${name} (${phone}) interested in Branz Mega Kuningan.${message ? "\n\nMessage: " + message : ""}`,
    );

    form.style.display = "none";
    success.classList.add("show");

    // Open WhatsApp in a new tab after a slight delay for smooth UX
    setTimeout(() => {
      window.open(`https://wa.me/${waNumber}?text=${waText}`, "_blank");
    }, 900);
  });

  /* ---------- Room type data ---------- */
  const roomData = [
    {
      id: "1-bedroom-1-c",
      name: "1 Bedroom + 1 (C)",
      folder: "1_Bedroom_+_1_(C)",
      price: "IDR 4,5 Billion",
      bedrooms: 1,
      bathrooms: 1,
      area: "80 m²",
      images: ["1.avif", "3.avif", "4.avif", "fasad.avif"],
      specs: [
        "Building quality: Japanese standards, built by Shimizu Corporation",
        "Building strength: Earthquake-resistant structure and rigid-frame structure dual system",
        "Reinforcing Ground Construction Method: Pre-Cast",
        "Living, Kitchen, Dining Floor: Marble",
        "Bedrooms Floor: Vinyl",
        "Bathroom Floor: Homogeneous tile 60 x 60",
        "Wall: Hebel Brick + Gypsum",
      ],
    },
    {
      id: "1-bedroom-1-b",
      name: "1 Bedroom + 1 (B)",
      folder: "1_Bedroom_+_1_(B)",
      price: "IDR 2 Billion",
      bedrooms: 1,
      bathrooms: 1,
      area: "61 m²",
      images: ["1.avif", "2.avif", "3.avif", "4.avif"],
      specs: [
        "Building quality: Japanese standards, built by Shimizu Corporation",
        "Building strength: Earthquake-resistant structure and rigid-frame structure dual system",
        "Reinforcing Ground Construction Method: Pre-Cast",
        "Living, Kitchen, Dining Floor: Marble",
        "Bedrooms Floor: Vinyl",
        "Bathroom Floor: Homogeneous tile 60 x 60",
        "Wall: Hebel Brick + Gypsum",
      ],
    },
    {
      id: "2-br-l",
      name: "2 BR - L",
      folder: "2_BR_-_L",
      price: "IDR 6,8 Billion",
      bedrooms: 2,
      bathrooms: 2,
      area: "136 m²",
      images: ["1.avif", "2.avif", "fasad.avif"],
      specs: [
        "Building quality: Japanese standards, built by Shimizu Corporation",
        "Building strength: Earthquake-resistant structure and rigid-frame structure dual system",
        "Reinforcing Ground Construction Method: Pre-Cast",
        "Living, Kitchen, Dining Floor: Marble",
        "Bedrooms Floor: Vinyl",
        "Bathroom Floor: Homogeneous tile 60 x 60",
        "Wall: Hebel Brick + Gypsum",
      ],
    },
    {
      id: "2-br-b",
      name: "2 BR - B",
      folder: "2_BR_-_B",
      price: "IDR 5,2 Billion",
      bedrooms: 2,
      bathrooms: 2,
      area: "80 m²",
      images: ["2.avif", "3.avif", "4.avif", "7.avif", "8.avif"],
      specs: [
        "Building quality: Japanese standards, built by Shimizu Corporation",
        "Building strength: Earthquake-resistant structure and rigid-frame structure dual system",
        "Reinforcing Ground Construction Method: Pre-Cast",
        "Living, Kitchen, Dining Floor: Marble",
        "Bedrooms Floor: Vinyl",
        "Bathroom Floor: Homogeneous tile 60 x 60",
        "Wall: Hebel Brick + Gypsum",
      ],
    },
  ];

  const baseImgPath = "assets/img/type";

  /* ---------- SVG icon helpers ---------- */
  const iconHome = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`;
  const iconShower = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 14h16M4 14l2-8h12l2 8M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4M8 18v-4M12 18v-4M16 18v-4"/></svg>`;
  const iconGrid = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`;
  const iconArrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`;

  /* ---------- Generate room cards ---------- */
  const grid = document.getElementById("roomTypeGrid");
  const modal = document.getElementById("roomModal");
  const track = document.getElementById("modalTrack");
  const counter = document.getElementById("modalCounter");
  const dots = document.getElementById("modalDots");
  const info = document.getElementById("modalInfo");

  let currentRoom = null;
  let currentSlide = 0;

  roomData.forEach((room, i) => {
    const thumb = `${baseImgPath}/${room.folder}/${room.images[0]}`;
    const card = document.createElement("div");
    card.className = "room-card reveal-up";
    card.style.transitionDelay = `${i * 0.09}s`;
    card.innerHTML = `
      <div class="room-card-thumb">
        <img src="${thumb}" alt="${room.name}" loading="lazy" />
      </div>
      <div class="room-card-body">
        <h3 class="room-card-name">${room.name}</h3>
        <div class="room-stats">
          <span class="room-stat">${iconHome} ${room.bedrooms}</span>
          <span class="room-stat">${iconShower} ${room.bathrooms}</span>
          <span class="room-stat">${iconGrid} ${room.area}</span>
        </div>
        <button class="room-btn">View Detail ${iconArrow}</button>
      </div>
    `;
    card.querySelector(".room-btn").addEventListener("click", () => openModal(i));
    grid.appendChild(card);
    io.observe(card);
  });

  /* ---------- Modal open / close ---------- */
  function openModal(index) {
    const room = roomData[index];
    currentRoom = index;
    currentSlide = 0;

    // Build track images
    track.innerHTML = room.images
      .map(
        (img, i) =>
          `<img src="${baseImgPath}/${room.folder}/${img}" alt="${room.name}" class="${i === 0 ? "active" : ""}${img === "fasad.avif" ? " is-fasad" : ""}" />`,
      )
      .join("");

    // Counter
    updateCounter();

    // Dots
    dots.innerHTML = room.images
      .map((_, i) => `<span class="modal-dot${i === 0 ? " active" : ""}"></span>`)
      .join("");

    // Info panel
    info.innerHTML = `
      <p class="modal-info-eyebrow">Unit Detail</p>
      <h3 class="modal-info-name">${room.name}</h3>
      <p class="modal-info-price-label">Price Start From</p>
      <p class="modal-info-price">${room.price}</p>
      <div class="modal-info-stats">
        <div class="modal-info-stat">
          ${iconHome}
          <p class="modal-info-stat-value">${room.bedrooms}</p>
          <p class="modal-info-stat-label">Bedroom</p>
        </div>
        <div class="modal-info-stat">
          ${iconShower}
          <p class="modal-info-stat-value">${room.bathrooms}</p>
          <p class="modal-info-stat-label">Bathroom</p>
        </div>
        <div class="modal-info-stat">
          ${iconGrid}
          <p class="modal-info-stat-value">${room.area}</p>
          <p class="modal-info-stat-label">Floor Area</p>
        </div>
      </div>
      <div class="modal-info-specs">
        <p class="modal-info-specs-title">Technical Specifications</p>
        <ul class="modal-info-specs-list">
          ${room.specs.map((s) => `<li>${s}</li>`).join("")}
        </ul>
      </div>
    `;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function updateCounter() {
    if (!currentRoom && currentRoom !== 0) return;
    const total = roomData[currentRoom].images.length;
    counter.textContent = `${currentSlide + 1} / ${total}`;
  }

  function goToSlide(index) {
    if (!currentRoom && currentRoom !== 0) return;
    const total = roomData[currentRoom].images.length;
    currentSlide = (index + total) % total;

    const imgs = track.querySelectorAll("img");
    const dotEls = dots.querySelectorAll(".modal-dot");
    imgs.forEach((img, i) => img.classList.toggle("active", i === currentSlide));
    dotEls.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
    updateCounter();
  }

  /* ---------- Modal event listeners ---------- */
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalPrev").addEventListener("click", () => goToSlide(currentSlide - 1));
  document.getElementById("modalNext").addEventListener("click", () => goToSlide(currentSlide + 1));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    if (e.key === "ArrowLeft" && modal.classList.contains("open")) goToSlide(currentSlide - 1);
    if (e.key === "ArrowRight" && modal.classList.contains("open")) goToSlide(currentSlide + 1);
  });

});

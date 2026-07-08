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
    const email = document.getElementById("femail").value.trim();
    const message = document.getElementById("fmsg").value.trim();

    const data = { name, phone, email, message };

    fetch("https://formspree.io/f/meebdynw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        form.style.display = "none";
        success.classList.add("show");
      })
      .catch(() => {
        form.style.display = "none";
        success.classList.add("show");
      });
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
      price: "IDR 3,5 Billion",
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
    card
      .querySelector(".room-btn")
      .addEventListener("click", () => openModal(i));
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
      .map(
        (_, i) => `<span class="modal-dot${i === 0 ? " active" : ""}"></span>`,
      )
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
      <a class="modal-info-wa" href="https://wa.me/6281290246038?text=${encodeURIComponent(`Hi, I would like to ask about ${room.name}`)}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Ask via WhatsApp
      </a>
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
    imgs.forEach((img, i) =>
      img.classList.toggle("active", i === currentSlide),
    );
    dotEls.forEach((dot, i) =>
      dot.classList.toggle("active", i === currentSlide),
    );
    updateCounter();
  }

  /* ---------- Modal event listeners ---------- */
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document
    .getElementById("modalPrev")
    .addEventListener("click", () => goToSlide(currentSlide - 1));
  document
    .getElementById("modalNext")
    .addEventListener("click", () => goToSlide(currentSlide + 1));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    if (e.key === "ArrowLeft" && modal.classList.contains("open"))
      goToSlide(currentSlide - 1);
    if (e.key === "ArrowRight" && modal.classList.contains("open"))
      goToSlide(currentSlide + 1);
  });

  /* ---------- Tenant data ---------- */
  const tenantData = [
    {
      category: "dining",
      name: "Burma",
      sub: "Myanmar restaurant with authentic Southeast Asian cuisine",
      image: "burma.avif",
    },
    {
      category: "dining",
      name: "Gure",
      sub: "Artisan gelato & specialty coffee shop",
      image: "gure.avif",
    },
    {
      category: "dining",
      name: "Imperial Dimsum",
      sub: "Chinese restaurant specializing in premium dimsum",
      image: "imperial-kitchen.avif",
    },
    {
      category: "dining",
      name: "Murasaki",
      sub: "Authentic Japanese izakaya dining experience",
      image: "murasaki.avif",
    },
    {
      category: "dining",
      name: "Fog by Amalfi",
      sub: "Italian restaurant with Mediterranean flavour",
      comingSoon: true,
    },
    {
      category: "dining",
      name: "Enkaku by Shikaku",
      sub: "Yakitori place by the renowned Dharmawangsa institution",
      comingSoon: true,
    },
    {
      category: "shopping",
      name: "Kem Chicks",
      sub: "Premium supermarket with imported & gourmet selection",
      image: "kemchicks.avif",
    },
    {
      category: "shopping",
      name: "Arden Grove by BRANZ Mega Kuningan",
      sub: "Luxury retail & lifestyle destination",
      image: "arden.avif",
    },
    {
      category: "wellness",
      name: "Annathaya Spa",
      sub: "Full-service spa & relaxation sanctuary",
      image: "annathaya.avif",
    },
    {
      category: "wellness",
      name: "Rogue & Beyond",
      sub: "Premium barber shop & grooming lounge",
      image: "rogue-and-beyond.avif",
    },
    {
      category: "entertainment",
      name: "Virtual Golf Simulator",
      sub: "In-door golf simulator with cutting edge VR technology",
      image: "golf-simulator.avif",
    },
    {
      category: "entertainment",
      name: "Enjyu Nojo",
      sub: "Premium Wagyu A5 Japanese barbeque experience",
      image: "enjyu-nojo.avif",
    },
  ];

  const categoryIcons = {
    dining: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3v12a4 4 0 008 0V3M14 3v12a4 4 0 008 0V3M2 21h20"/></svg>`,
    shopping: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>`,
    wellness: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    entertainment: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "dining", label: "Dining" },
    { id: "shopping", label: "Shopping" },
    { id: "wellness", label: "Wellness" },
    { id: "entertainment", label: "Entertainment" },
  ];

  const badgeContainer = document.getElementById("tenantBadges");
  const gridContainer = document.getElementById("tenantGrid");

  /* ---------- Generate badges ---------- */
  let activeBadge = "all";

  categories.forEach((cat, i) => {
    const badge = document.createElement("button");
    badge.className = `badge${cat.id === "all" ? " active" : ""} reveal-up`;
    badge.style.transitionDelay = `${i * 0.06}s`;
    badge.textContent = cat.label;
    badge.dataset.category = cat.id;
    badge.addEventListener("click", () => filterTenants(cat.id));
    badgeContainer.appendChild(badge);
    io.observe(badge);
  });

  /* ---------- Generate cards ---------- */
  tenantData.forEach((tenant, i) => {
    const card = document.createElement("div");
    card.className = "tenant-card reveal-up";
    card.style.transitionDelay = `${i * 0.06}s`;
    card.dataset.category = tenant.category;
    const bgEl = tenant.image
      ? `<img class="tenant-card-bg" src="assets/img/tenants/${tenant.image}" alt="${tenant.name}" loading="lazy" />`
      : `<div class="tenant-card-grad tenant-card-grad--${tenant.category}"></div>`;

    card.innerHTML = `
      <div class="tenant-card-inner">
        ${bgEl}
        <div class="tenant-card-content">
          <p class="tenant-category">${categoryIcons[tenant.category]} ${tenant.category}</p>
          <h3 class="tenant-name">${tenant.name}</h3>
          <p class="tenant-sub">${tenant.sub}</p>
          ${tenant.comingSoon ? '<span class="tenant-coming">Coming Soon</span>' : ""}
        </div>
      </div>
    `;
    gridContainer.appendChild(card);
    io.observe(card);
  });

  /* ---------- Filter ---------- */
  function filterTenants(category) {
    if (category === activeBadge) return;
    activeBadge = category;

    document.querySelectorAll(".badge").forEach((b) => {
      b.classList.toggle("active", b.dataset.category === category);
    });

    document.querySelectorAll(".tenant-card").forEach((card) => {
      const match = category === "all" || card.dataset.category === category;
      card.classList.toggle("hidden", !match);
    });
  }

  /* ---------- Article data ---------- */
  const articleData = [
    {
      id: 1,
      image: "assets/img/article/Artikel 1.png",
      title: {
        en: "Why Japanese Expats Choose BRANZ Mega Kuningan",
        ja: "ジャカルタで働く日本人駐在員がBRANZ Mega Kuninganを選ぶ理由",
      },
    },
    {
      id: 2,
      image: "assets/img/article/Artikel 2.png",
      title: {
        en: "Exploring the Mega Kuningan Neighborhood: A Guide for Residents and Investors",
        ja: "メガ・クニンガンエリアガイド：居住者と投資家のための完全ガイド",
      },
    },
    {
      id: 3,
      image: "assets/img/article/Artikel 3.png",
      title: {
        en: "Japanese Craftsmanship Meets Indonesian Hospitality: The Story Behind Branz",
        ja: "日本の匠の技とインドネシアのおもてなしの融合：ブランズに込められた物語",
      },
    },
    {
      id: 4,
      image: "assets/img/article/Artikel 4.png",
      title: {
        en: "A Guide to Apartment Investment in Jakarta: Why Location Matters More Than Ever",
        ja: "ジャカルタのアパートメント投資ガイド：ロケーションがこれまで以上に重要な理由",
      },
    },
    {
      id: 5,
      image: "assets/img/article/Artikel 5.png",
      title: {
        en: "Five Questions to Ask Before Choosing Your Next Apartment in Jakarta",
        ja: "ジャカルタで次のアパートメントを選ぶ前に確認すべき5つの質問",
      },
    },
  ];

  /* ---------- Generate article cards ---------- */
  const articlesGrid = document.getElementById("articlesGrid");
  if (articlesGrid) {
    articleData.forEach((article, i) => {
      const card = document.createElement("div");
      card.className = "article-card reveal-up";
      card.style.transitionDelay = `${i * 0.09}s`;

      const iconGlobe = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 10 10M12 2a10 10 0 0 0-10 10M12 2c1.7 0 3.3 4 3.3 10S13.7 22 12 22M12 2c-1.7 0-3.3 4-3.3 10S10.3 22 12 22M2 12h20"/></svg>`;

      card.innerHTML = `
        <div class="article-card-thumb">
          <img src="${article.image}" alt="${article.title.en}" loading="lazy" />
        </div>
        <div class="article-card-body">
          <h3 class="article-card-title">${article.title.en}</h3>
          <div class="article-card-actions">
            <a href="articles/article-en-${article.id}.html" class="article-btn">${iconGlobe} English</a>
            <a href="articles/article-ja-${article.id}.html" class="article-btn">${iconGlobe} 日本語</a>
          </div>
        </div>
      `;
      articlesGrid.appendChild(card);
      io.observe(card);
    });
  }
});

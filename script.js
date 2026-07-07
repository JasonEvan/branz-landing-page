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
});

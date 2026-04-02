// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const el = document.querySelector(a.getAttribute("href"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
});

// ── スクロールアニメーション ──
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  // 概要セクション：左右スライド
  document.querySelector(".overview-img-wrap")?.classList.add("js-fade", "js-fade--left");
  document.querySelector(".overview-body")?.classList.add("js-fade", "js-fade--right");

  // サービスカード：時差付きで出現
  document.querySelectorAll(".service-grid .service-card").forEach((card, i) => {
    if (i > 0) {
      card.style.transitionDelay = `${i * 0.12}s`;
      card.addEventListener("transitionend", () => {
        card.style.transitionDelay = "";
      }, { once: true });
    }
  });

  // その他：フェードアップ
  [
    ".sec-label", ".sec-title", ".sec-desc",
    ".service-card", ".support-item",
    ".scene-caption",
    ".cta-band h2", ".cta-band p", ".cta-btn",
  ].forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      if (!el.classList.contains("js-fade")) el.classList.add("js-fade");
    });
  });

  document.querySelectorAll(".js-fade").forEach((el) => observer.observe(el));

  // ── ヘッダースクロール効果 ──
  const header = document.querySelector("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

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

  // ごあいさつ：左右からスライドイン
  document.querySelector(".greeting-visual")?.classList.add("js-fade", "js-fade--left");
  document.querySelector(".greeting-body")?.classList.add("js-fade", "js-fade--right");

  // phil-card：時差（ストール）付きで出現
  document.querySelectorAll(".phil-values .phil-card").forEach((card, i) => {
    if (i > 0) {
      card.style.transitionDelay = `${i * 0.12}s`;
      // アニメーション完了後にdelayをリセット（ホバーに影響しないように）
      card.addEventListener("transitionend", () => {
        card.style.transitionDelay = "";
      }, { once: true });
    }
  });

  // その他：フェードアップ
  [
    ".sec-label", ".sec-title", ".sec-desc",
    ".phil-body", ".phil-card", ".phil-quote",
    ".work-row",
    ".cta-band h2", ".cta-band p", ".cta-btn",
    ".greeting-sign",
  ].forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      if (!el.classList.contains("js-fade")) el.classList.add("js-fade");
    });
  });

  document.querySelectorAll(".js-fade").forEach((el) => observer.observe(el));

  // ── ヘッダー：スクロールで影を追加 ──
  const header = document.querySelector("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const el = document.querySelector(a.getAttribute("href"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
});

// タブ切り替え
const tabs = document.querySelectorAll(".tab-btn");
tabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabs.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
    document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
  });
});

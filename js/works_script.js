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

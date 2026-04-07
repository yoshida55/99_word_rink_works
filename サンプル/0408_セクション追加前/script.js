// script.js
const buttons = document.querySelectorAll(".tab_btn");
const line = document.querySelector(".tab_line");
const contents = document.querySelectorAll(".tab_content");

// 最初の線の位置をセット
moveLine(document.querySelector(".tab_btn.is-active"));

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // アクティブクラスを切り替え
    buttons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    // 線を動かす
    moveLine(btn);

    // コンテンツを切り替え
    const target = btn.dataset.tab;
    contents.forEach((c) => c.classList.remove("is-show"));
    document.querySelector(`[data-content="${target}"]`).classList.add("is-show");
  });
});

function moveLine(activeBtn) {
  line.style.left = activeBtn.offsetLeft + "px";
  line.style.width = activeBtn.offsetWidth + "px";
}

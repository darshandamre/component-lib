const modalDemoBtn = document.querySelector("#modal-demo-btn");
const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#modal-close");

modalDemoBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

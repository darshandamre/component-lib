const closeAlertList = document.querySelectorAll(".alert__close");

closeAlertList.forEach(closeAlert => {
  closeAlert.addEventListener("click", () => {
    const alert = closeAlert.parentElement;
    alert.style.display = "none";
  });
});

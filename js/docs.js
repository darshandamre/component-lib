// js for highlightjs
hljs.configure({
  languages: ["html"],
  cssSelector: "pre > code"
});
hljs.highlightAll();

const copyBtnList = document.querySelectorAll(".btn--copy");

copyBtnList.forEach(copyBtn => {
  const value = copyBtn.getAttribute("value");
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(value);
  });
});

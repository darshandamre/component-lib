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

// scroll behaviour
const sideBarLinks = document.querySelectorAll(".sidebar a");

sideBarLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const offSet = document.querySelector(link.getAttribute("href")).offsetTop;
    const scrollTo = offSet - document.querySelector(".header").offsetHeight;
    window.scrollTo(0, scrollTo);
  });
});

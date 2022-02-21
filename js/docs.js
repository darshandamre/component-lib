const copyBtnList = document.querySelectorAll(".btn--copy");
const sideBarLinks = document.querySelectorAll(".sidebar a");

// highlightjs configuration
hljs.configure({
  languages: ["html"],
  cssSelector: "pre > code"
});
hljs.highlightAll();

// copy button listeners
copyBtnList.forEach(copyBtn => {
  const value = copyBtn.getAttribute("value");
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(value);
  });
});

// scroll behaviour
sideBarLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const offSet = document.querySelector(link.getAttribute("href")).offsetTop;
    const scrollTo = offSet - document.querySelector(".header").offsetHeight;
    window.scrollTo(0, scrollTo);
  });
});

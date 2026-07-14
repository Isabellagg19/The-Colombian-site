const backgrounds = [
  "url('backgroundss/background-colombian-site.png')",
  "url('backgroundss/background-2.png')"
]

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const sectionHeight = window.innerHeight;
  const index = Math.floor(scrollY / sectionHeight);

  if (backgrounds[index]) {
    document.body.style.backgroundImage = backgrounds[index];
  }
});

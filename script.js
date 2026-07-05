const colors = [
  '#000000',
  '#58e19ad0',
]

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const index = Math.floor(scrollY / sectionHeight);

      if (colors [index]) {
        document.body.style.backgroundColor = colors[index];
      }
    });
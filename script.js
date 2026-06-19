const background  =[
    'url("backgroundss/background1.png")',
    'url("backgroundss/background2.png")',
    'url("backgroundss/background3.png")',
    'url("backgroundss/background4.png")'
]

function getRandomBackground() {
  const index = Math.floor(Math.random() * background.length);
  return background[index];
}

document.body.style.backgroundImage = getRandomBackground();
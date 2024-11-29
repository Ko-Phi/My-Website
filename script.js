function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typewrite(textElementId, text, wpm) {
  let textElement = document.getElementById(textElementId);
  text = String(text).split("");
  console.log(text);
  for (let i = 0; i < text.length; i++) {
    textElement.textContent += text[i];

    await delay(12000 / wpm);
  }
}

async function typewriteHero(textElementId1A, textElementId2A, text, wpm) {
  let textElement1A = document.getElementById(textElementId1A);
  let textElement2A = document.getElementById(textElementId2A);

  text = String(text).split("");
  for (let i = 0; i < text.length; i++) {
    textElement1A.textContent += text[i];
    textElement2A.textContent += text[i];

    await delay(12000 / wpm);
  }
}

async function startTypeWrite(wpm) {
  await delay(1000);
  typewriteHero("hero1AText", "hero2AText", "Good", wpm);
  await delay((12000 / wpm) * 4);
  typewriteHero("hero1BText", "hero2BText", "Morning", wpm);
  await delay((12000 / wpm) * 7);
  typewrite(
    "hero-p",
    `You’re welcome to stay a while. It’s quite cozy here. Grab a drink, some snacks maybe—anything to dull your senses. Maybe take a look atmy work along the way.`,
    600
  );
}
startTypeWrite(90);

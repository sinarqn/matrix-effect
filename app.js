const container = document.querySelector(".container");
const characters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

drawLine();

function drawLine() {
  const line = document.createElement("div");

  for (let i = 0; i < 100; i++) {
    const span = document.createElement("span");
    span.innerText = characters[Math.floor(Math.random() * characters.length)];
    line.appendChild(span);
  }

  let randomDuration = Math.random() * 10;
  if (randomDuration < 3) randomDuration = 3;
  const randomFontSize = Math.random() * 1.2;
  const randomLeftMargin = Math.random() * 100;
  line.classList.add("line");
  line.style.left = `${randomLeftMargin}%`;
  line.style.animation = `fall ${randomDuration}s linear`;
  line.style.fontSize = `${randomFontSize}rem`;
  line.style.opacity = randomFontSize

  container.appendChild(line);
  line.addEventListener("animationend", removeLine);
  setTimeout(drawLine, 20);
}

function removeLine(e) {
  e.target.remove()
}

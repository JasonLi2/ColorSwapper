const colors = ["AliceBlue", "Chartreuse", "Aquamarine", "DarkCyan", "MediumSlateBlue", "AntiqueWhite", "NavajoWhite", "Plum", "Salmon", "SeaGreen",
"Tomato", "Thistle", "Violet", "Peru", "LightSeaGreen", "CornflowerBlue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  }
);

//function go generate random number for the color selector
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

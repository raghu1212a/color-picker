const color_change = document.getElementById("button");
const text = document.getElementById("text-container");

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

color_change.addEventListener("click", function () {
  let hexcode = "#";
  for (let i = 0; i < 6; i++) {
    let random_numbers = random_number();
    hexcode += colors[random_numbers];
  }

  document.body.style.backgroundColor = hexcode;
  text.textContent = hexcode;
});

function random_number() {
  return Math.floor(Math.random() * colors.length);
}

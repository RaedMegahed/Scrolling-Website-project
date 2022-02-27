const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains3 = document.getElementById("mountains3");
const mountains4 = document.getElementById("mountains4");
const river = document.getElementById("river");
const boat = document.getElementById("boat");
const raeed = document.querySelector(".raeed");

window.addEventListener("scroll", () => {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  raeed.style.fontSize = value + "px";
  if (value >= 67) {
    raeed.style.fontSize = 67 + "px";
    raeed.style.position = "fixed";
    if (value >= 476.6) {
      raeed.style.display = "none";
    } else {
      raeed.style.display = "block";
    }
    if (value >= 117) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281, #10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
});

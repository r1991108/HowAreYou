function changeColor() {
  let mood = document.querySelector(".mood");
  let card = document.querySelector(".card");
  let option = document.querySelector("#answer");
  let color = option.value;
  if (color === "random") {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    card.style["background-color"] = color;
  }
  if (color != "") {
    card.style["background-color"] = color;
  } else {
    mood.innerHTML = "教えて：）";
  }
}

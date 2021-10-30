// get window size
let size = document.documentElement.clientWidth;
console.log(size);

// only when mobile version
if (size <= 428) {
  let select = document.querySelector("#answer");
  let mood = document.querySelector(".mood");
  let card = document.querySelector(".card");
  select.addEventListener(
    "change",
    (e) => {
      let colorSelect = e.target.value;

      console.log("test");
      // console.log(e.target.value);
      if (colorSelect === "random") {
        let letters = "0123456789ABCDEF";
        let colorSelect = "#";
        for (var i = 0; i < 6; i++) {
          colorSelect += letters[Math.floor(Math.random() * 16)];
        }
        console.log("test2" + colorSelect);
        card.style["background-color"] = colorSelect;
        console.log("test3");
      } else if (colorSelect != "") {
        card.style["background-color"] = colorSelect;
      } else {
        mood.innerHTML = "教えて：）";
      }
    },
    false
  );
}

//for desktop
function changeColor() {
  let mood = document.querySelector(".mood");
  let card = document.querySelector(".card");
  let select = document.querySelector("#answer");

  // answer which is clicked
  let colorSubmit = select.value;
  if (colorSubmit === "random") {
    let letters = "0123456789ABCDEF";
    let colorSubmit = "#";
    for (var i = 0; i < 6; i++) {
      colorSubmit += letters[Math.floor(Math.random() * 16)];
    }
    card.style["background-color"] = colorSubmit;
  }
  if (colorSubmit != "") {
    card.style["background-color"] = colorSubmit;
  } else {
    mood.innerHTML = "教えて：）";
  }
}

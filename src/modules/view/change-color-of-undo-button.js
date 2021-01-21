export let changeColorOfDomElement = (color) => {
  if (color === "white") {
    document.getElementById("undo").classList.add(color);
  } else if (color === "gray") {
    document.getElementById("undo").classList.remove("white");
  };
}

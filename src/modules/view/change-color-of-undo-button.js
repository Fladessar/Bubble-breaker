export const setUndoButtonEnabled = (isEnabled) => {
  if (isEnabled === "white") {
    document.getElementById("undo").classList.add(isEnabled);
  } else if (isEnabled === "gray") {
    document.getElementById("undo").classList.remove("white");
  };
}

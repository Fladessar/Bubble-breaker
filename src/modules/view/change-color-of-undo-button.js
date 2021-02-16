export const setUndoButtonEnabled = (isEnabled) => {
  const unCl = document.getElementById("undo").classList;
  isEnabled ? unCl.add("white") : unCl.remove("white");
}

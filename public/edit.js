function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById("drag-window")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("drag-window").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

window.onload = function () {
  // Make the DIV element draggable:
  dragElement(document.getElementById("menu"));

  var cancelBtn = document.getElementById("cancel-btn");
  var genderValue = document
    .getElementById("genderValue")
    .getAttribute("value");
  var typeValue = document.getElementById("typeValue").getAttribute("value");

  if (genderValue == "male") {
    document.getElementById("male").checked = true;
  } else {
    document.getElementById("female").checked = true;
  }

  if (typeValue == "B") {
    document.getElementById("r2").checked = true;
  } else if (typeValue == "Sociopath") {
    document.getElementById("r3").checked = true;
  } else if (typeValue == "Psychopath") {
    document.getElementById("r4").checked = true;
  }

  cancelBtn.addEventListener("click", () => {
    console.log("s");
    location.href = "../../assignment2";
  });
};

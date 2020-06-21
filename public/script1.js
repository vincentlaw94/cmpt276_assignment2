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
function toggleForm(e) {
  var form = document.getElementById("form");
  var btn = document.getElementById("plus-btn");
  var table = document.getElementById("table");
  if (btn.className == "show-plus-btn") {
    btn.className = "hide-plus-btn";
    form.className = "show-form";
    table.className = "hide-form";
  } else {
    btn.className = "show-plus-btn";
    form.className = "hide-form";
    table.className = "container";
  }
}
state = { previous: undefined, tr: undefined };
function selectRow(e) {
  var previous = document.getElementsByClassName("selected");

  Array.from(previous).forEach((e) => (e.className = ""));
  e.target.parentElement.className = "selected";
}

personid = new Array();

function personSelect(id) {
  var current = document.getElementById(id);
  console.log(current);
  current.classList.toggle("active");
}
window.onload = function () {
  // Make the DIV element draggable:
  dragElement(document.getElementById("menu"));

  var form = document.getElementById("plus-btn");
  var cancelBtn = document.getElementById("cancel-btn");
  var editBtn = document.getElementsByClassName("edit-btn");
  var persons = document.querySelectorAll("tr");
  var board = document.getElementById("board");
  Array.from(persons).forEach((e) => {
    var innerText = e.innerText;
    var id = e.id;
    var list = innerText.split(/(\s+)/).filter(function (e) {
      return e.trim().length > 0;
    });

    for (i = 1; i < list.length; i++) {
      var newPerson = document.createElement("div");
      if (list[i] == "MALE") {
        newPerson.classList.add("fas");
        newPerson.classList.add("fa-male");
      }
      if (list[i] == "FEMALE") {
        newPerson.classList.add("fas");
        newPerson.classList.add("fa-female");
      }

      newPerson.id = "person-" + id;

      personid.push(id);
      newPerson.style.fontSize = list[2];
      newPerson.style.position = "absolute";
      newPerson.style.left = Math.random() * 1500;
      newPerson.style.top = Math.random() * 800;
      board.appendChild(newPerson);

      newPerson.addEventListener("click", (e) => {
        var tr = document.getElementById(e.target.id);
        var id = tr.id.substr(7);
        var row = document.querySelectorAll("tr");
        row.forEach((e) => {
          if (e.id == id) {
            if (this.state.tr == undefined) {
              this.state.tr = e;
              console.log(this.state.tr);
              e.classList.toggle("selected");
            } else {
              console.log(this.state.tr.classList.toggle("selected"));
              e.classList.toggle("selected");
              this.state.tr = e;
            }
          }
        });
        if (this.state.previous == undefined) {
          this.state.previous = e.target;
          e.target.classList.toggle("active");
        } else {
          this.state.previous.classList.toggle("active");
          e.target.classList.toggle("active");
          this.state.previous = e.target;
        }
      });
    }
  });
  Array.from(editBtn).forEach((e) => {
    e.addEventListener("click", (r) => {
      console.log(r.target.value);
      location.href = "/getperson/" + parseInt(r.target.value);
    });
  });

  form.addEventListener("click", this.toggleForm);
  cancelBtn.addEventListener("click", this.toggleForm);
  document
    .querySelectorAll("tr")
    .forEach((e) => e.addEventListener("click", this.selectRow));
};

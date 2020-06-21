var binarymap = [];
var defaultmap = [
  [
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
  ],
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
  ],
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ],
  [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
  ],
  [
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
  ],
  [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
  ],
  [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
  ],
  [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
  ],
  [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
  ],
  [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
  ],
  [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
  ],
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
];
var state = {
  default: { topLine: [], leftLine: [], n: 20, m: 20 },
};
var curStateMap = [];

function createBoard() {
  var board = document.getElementById("puzzle-board");
  var table = document.createElement("table");
  table.id = "puzzle";
  curStateMap = [...Array(state.n)].map((e) => Array(state.m).fill(false));

  for (var i = 0; i <= state.n; i++) {
    var tableRow = table.appendChild(document.createElement("tr"));
    for (var j = 0; j <= state.m; j++) {
      var cell = tableRow.appendChild(document.createElement("td"));
      if (i == 0 && j == 0) {
        cell.className = "cell0";
      } else if (i == 0) {
        cell.className = "topLine";
        cell.appendChild(
          document.createTextNode(state.topLine[j - 1].join(" "))
        );
      } else if (j == 0) {
        cell.className = "leftLine";
        cell.appendChild(
          document.createTextNode(state.leftLine[i - 1].join(" "))
        );
      } else {
        cell.id = `${i - 1} ${j - 1}`;
        cell.className = "node";
        cell.appendChild(document.createTextNode(" "));
      }
    }
  }
  board.appendChild(table);
}

function checkSolution() {
  if (JSON.stringify(curStateMap) == JSON.stringify(binarymap)) {
    alert("CONGRATULATIONS");
  }
}

function resetBoard() {
  curStateMap = [...Array(state.n)].map((e) => Array(state.m).fill(false));
  var nodes = document.getElementsByClassName("toggled");
  Array.from(nodes).forEach(function (element) {
    element.className = "node";
  });
}

function showSolution() {
  for (var i = 0; i < state.n; i++) {
    for (var j = 0; j < state.m; j++) {
      curStateMap[i][j] = binarymap[i][j];
      var node = document.getElementById(`${i} ${j}`);
      if (binarymap[i][j]) {
        node.className = "toggled";
      } else {
        node.className = "node";
      }
    }
  }
  setTimeout(() => {
    checkSolution();
  }, 1550);
}

function selectDefault() {
  newBoard();
  state.m = 20;
  state.n = 20;
  binarymap = defaultmap;
  findBrokenline(binarymap);
  createBoard(binarymap);
}

function findBrokenline(binarymap) {
  var lineFlag = false;
  var numOfLine = [];
  var count = 0;
  //top line
  for (var i = 0; i < state.m; i++) {
    for (var j = 0; j < state.n; j++) {
      if (binarymap[j][i] == true) {
        count++;
        lineFlag = true;
      } else if (binarymap[j][i] == false) {
        if (count != 0) {
          numOfLine.push(count);
          count = 0;
        }
        lineFlag = false;
      }
    }
    if (lineFlag == true) {
      numOfLine.push(count);
      lineFlag = false;
      count = 0;
    }
    numOfLine.filter((x) => x >= 1);
    state.topLine.push(numOfLine);
    numOfLine = [];
  }
  lineFlag = false;
  count = 0;
  // left line
  for (var i = 0; i < state.n; i++) {
    for (var j = 0; j < state.m; j++) {
      if (binarymap[i][j] == true) {
        count++;
        lineFlag = true;
      } else if (binarymap[i][j] == false) {
        if (count != 0) {
          numOfLine.push(count);
          count = 0;
        }
        lineFlag = false;
      }
    }
    if (lineFlag == true) {
      numOfLine.push(count);
      lineFlag = false;
      count = 0;
    }
    numOfLine.filter((x) => x >= 1);
    state.leftLine.push(numOfLine);
    numOfLine = [];
  }
}
function newBoard() {
  var puzzle = document.getElementById("puzzle");
  var puzzleBoard = document.getElementById("puzzle-board");
  puzzleBoard.removeChild(puzzle);
  binarymap = [];
  curStateMap = [];
  state.topLine = [];
  state.leftLine = [];
}
function parseCSV(text, lineTerminator, cellTerminator) {
  var lines = text.split(lineTerminator);
  state.m = lines.length;
  array = [];

  for (var j = 0; j < lines.length; j++) {
    if (lines[j] != "") {
      var information = lines[j].split(",");

      for (var i = 0; i < information.length; i++) {
        if (information[i] === "0") {
          array.push(false);
        } else {
          array.push(true);
        }
      }

      binarymap.push(array);
      array = [];
    }
  }
  state.n = information.length;

  findBrokenline(binarymap);
}
var toggle = function (e) {
  var nodeId = e.target.id.split(" ");
  i = nodeId[0];
  j = nodeId[1];

  curStateMap[i][j] = !curStateMap[i][j];

  document.getElementById(e.target.id).className = "toggled";
  if (curStateMap[i][j] == false) {
    document.getElementById(e.target.id).className = "node";
  }
  setTimeout(() => {
    checkSolution();
  }, 1);
};

window.onload = function () {
  var fileInput = document.getElementById("files");
  var defaultbtn = document.getElementById("default");
  var nodes = document.getElementsByClassName("node");
  var reset = document.getElementById("reset");
  var sol = document.getElementById("solution");

  reset.addEventListener("click", this.resetBoard);
  sol.addEventListener("click", this.showSolution);
  defaultbtn.addEventListener("click", this.selectDefault);
  selectDefault();
  Array.from(nodes).forEach(function (element) {
    element.addEventListener("click", toggle);
  });
  fileInput.addEventListener("change", function (e) {
    var files = e.target.files;

    newBoard();

    for (var i = 0, f; (f = files[i]); i++) {
      var reader = new FileReader();
      var name = f.name;
      reader.onload = (function (csv) {
        return function (e) {
          parseCSV(e.target.result, "\n", ",");
          createBoard(binarymap);

          Array.from(nodes).forEach(function (element) {
            element.addEventListener("click", toggle);
          });
        };
      })(f);
      reader.readAsText(f);
    }
  });
};

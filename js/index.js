const step1 = document.getElementById("step1");

const co = ["0,0", "1,1", "2,0", "3,1", "4,0", "5,1", "6,0", "7,1"];

function createSpan(r, c) {
  const span = document.createElement("span");
  span.style.width = "80px";
  span.style.height = "80px";
  span.style.borderRadius = "10000px";
  span.style.backgroundColor = "white";
  span.id = `${r},${c},step1,span1`;

  return span;
}

function genBoard() {
  for (let r = 0; r < 8; r++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    for (let c = 0; c < 8; c++) {
      const col = document.createElement("div");

      col.style.width = "100px";
      col.style.height = "100px";
      col.style.display = "flex";
      col.style.justifyContent = "center";
      col.style.alignItems = "center";
      col.addEventListener("click", moveByEvent);
      col.id = `${r},${c},step1`;

      if (r == 0 && c == 0) {
        const span = createSpan(r, c);
        col.appendChild(span);
      }

      if ((r + c) % 2 === 0) {
        col.style.backgroundColor = "black";
      } else {
        col.style.backgroundColor = "burlywood";
      }
      row.appendChild(col);
    }
    step1.appendChild(row);
  }

  //moveStep();
}

function moveStep() {
  setInterval(() => {
    const span = step1.querySelector("span");
    console.log(span);
    console.log(span.id);
    let ar = span.id.split(",");
    let current_row = parseInt(ar[0]);
    let current_col = parseInt(ar[1]);

    let next_row = current_row + 1;
    let next_col = current_col + 1;

    if (next_row > 7 || next_col > 7) {
      next_row = 0;
      next_col = 0;
    }

    console.log(ar);
    console.log(next_row, next_col);
    span.remove();

    const newSpan = createSpan(next_row, next_col);

    const col = document.getElementById(`${next_row},${next_col},step1`);
    col.appendChild(newSpan);
  }, 3000);
}

genBoard();

function moveByEvent(e) {
  const span = step1.querySelector("span");

  const el = e.target;
  const col_id = el.id;
  console.log(col_id);
  let colal = col_id.split(",");
  let next_row = parseInt(colal[0]);
  let next_col = parseInt(colal[1]);

  span.remove();

  const newSpan = createSpan(next_row, next_col);

  const col = document.getElementById(`${next_row},${next_col},step1`);
  col.appendChild(newSpan);
}

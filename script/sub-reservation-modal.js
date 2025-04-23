const [Aseat, Bseat, Cseat, Dseat] = [
  document.querySelectorAll(".stage-area .stage>div")[0],
  document.querySelectorAll(".stage-area .stage>div")[1],
  document.querySelectorAll(".stage-area .stage>div")[2],
  document.querySelectorAll(".stage-area .stage>div")[3],
];
const seatObj = {
  A: { row: 7, col: 9, Aseat },
  B: { row: 7, col: 8, Bseat },
  C: { row: 4, col: 10, Cseat },
  D: { row: 5, col: 8, Dseat },
};
let selectedArr = [];
function createSeats(obj, seat) {
  let remainSeats = {
    A: [
      [1, 5],
      [3, 2],
      [4, 6],
    ],
    B: [
      [1, 1],
      [1, 4],
      [6, 5],
    ],
    C: [
      [3, 3],
      [4, 7],
    ],
    D: [
      [1, 3],
      [1, 5],
      [3, 8],
      [5, 6],
    ],
  };
  let row = obj.row;
  let col = obj.col;
  let ul = document.createElement("ul");

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      let li = document.createElement("li");

      li.setAttribute("data-order", `${row * (i - 1) + j}`);
      if (seat === Aseat) {
        li.setAttribute("data-section", "A");
        if (i <= 2) {
          li.classList.add("vip");
        } else {
          li.classList.add("R");
        }
        remainSeats.A.forEach((a) => {
          if (a[0] === i && a[1] === j) {
            li.classList.add("remain");
          }
        });
      }
      if (seat === Bseat) {
        li.setAttribute("data-section", "B");
        if (i <= 2) {
          li.classList.add("vip");
        } else {
          li.classList.add("R");
        }
        if (j === col) {
          if (i === 1 || i === 2 || i === 4) {
            li.style.opacity = 0;
            li.style.visibility = "hidden";
          }
        }
        remainSeats.B.forEach((a) => {
          if (a[0] === i && a[1] === j) {
            li.classList.add("remain");
          }
        });
      }
      if (seat === Cseat) {
        li.setAttribute("data-section", "C");
        if (i <= 2) {
          li.classList.add("S");
        } else {
          li.classList.add("A");
        }
        remainSeats.C.forEach((a) => {
          if (a[0] === i && a[1] === j) {
            li.classList.add("remain");
          }
        });
      }
      if (seat === Dseat) {
        li.setAttribute("data-section", "D");
        if (i <= 2) {
          li.classList.add("S");
        } else {
          li.classList.add("A");
        }
        if (j === col) {
          if (i === 1 || i === 2 || i === 4) {
            li.style.opacity = 0;
            li.style.visibility = "hidden";
          }
        }
        remainSeats.D.forEach((a) => {
          if (a[0] === i && a[1] === j) {
            li.classList.add("remain");
          }
        });
      }
      ul.appendChild(li);
    }
  }
  seat.appendChild(ul);
}

function createAllSeats() {
  let getdetailObj = JSON.parse(localStorage.getItem("detailObj"));
  let modaltitle = document.querySelectorAll(".select-seat-left>h5>span");
  modaltitle[0].innerText = getdetailObj.title;
  modaltitle[1].innerText = "| " + getdetailObj.location;
  createSeats(seatObj.A, Aseat);
  createSeats(seatObj.B, Bseat);
  createSeats(seatObj.C, Cseat);
  createSeats(seatObj.D, Dseat);
  updateRating();

  document
    .querySelectorAll(".stage-area .stage>div li.remain")
    .forEach((a, i) => {
      a.addEventListener("click", function () {
        let obj = {
          id: i,
          elm: this,
          order: this.dataset.order,
          section: this.dataset.section,
        };

        if (!selectedArr.some((a) => a.id === i)) {
          selectedArr.push(obj);
        } else {
          let findIndex = selectedArr.findIndex((a) => a.id === i);
          if (findIndex !== -1) {
            selectedArr.splice(findIndex, 1);
          }
        }

        if (selectedArr.length > 5) {
          alert("5자리 이상 선택이 불가능합니다.");
          selectedArr.pop();
        }
        document
          .querySelectorAll(".stage-area .stage>div li.remain")
          .forEach((b) => {
            b.classList.remove("selected");
          });
        selectedArr.forEach((b) => {
          b.elm.classList.add("selected");
        });

        //등급선택 업데이트
        updateRating();
        //선택좌석 업데이트
        updateSelectedSeats(selectedArr);
      });
    });
}

function updateRating() {
  let ul = document.querySelector(".select-rating-area>ul");
  let count = document.querySelectorAll(".select-rating-area>ul>li>.right");
  let remain = document.querySelectorAll(".stage-area .stage>div>ul>li.remain");
  let remainObj = {
    vip: [...remain].filter(
      (a) =>
        a.classList.contains("remain") &&
        !a.classList.contains("selected") &&
        a.classList.contains("vip")
    ),
    r: [...remain].filter(
      (a) =>
        a.classList.contains("remain") &&
        !a.classList.contains("selected") &&
        a.classList.contains("R")
    ),
    s: [...remain].filter(
      (a) =>
        a.classList.contains("remain") &&
        !a.classList.contains("selected") &&
        a.classList.contains("S")
    ),
    a: [...remain].filter(
      (a) =>
        a.classList.contains("remain") &&
        !a.classList.contains("selected") &&
        a.classList.contains("A")
    ),
  };
  for (key in remainObj) {
    if (key === "vip") {
      count[0].textContent = remainObj[key].length + "석";
      if (remainObj[key].length === 0) {
        count[0].classList.add("null");
      } else {
        count[0].classList.remove("null");
      }
    } else if (key === "r") {
      count[1].textContent = remainObj[key].length + "석";
      if (remainObj[key].length === 0) {
        count[1].classList.add("null");
      } else {
        count[1].classList.remove("null");
      }
    } else if (key === "s") {
      count[2].textContent = remainObj[key].length + "석";
      if (remainObj[key].length === 0) {
        count[2].classList.add("null");
      } else {
        count[2].classList.remove("null");
      }
    } else if (key === "a") {
      count[3].textContent = remainObj[key].length + "석";
      if (remainObj[key].length === 0) {
        count[3].classList.add("null");
      } else {
        count[3].classList.remove("null");
      }
    }
  }
}

function updateSelectedSeats(arr) {
  let ul = document.querySelector(".selected-seat-box>ul");
  [...ul.children].forEach((a) => {
    a.remove();
  });
  arr.forEach((a) => {
    let li = document.createElement("li");
    let span01 = document.createElement("span");
    let span02 = document.createElement("span");

    if (a.elm.classList.contains("vip")) {
      span01.classList.add("vip-seat");
      span01.textContent = "VIP석";
    } else if (a.elm.classList.contains("R")) {
      span01.classList.add("r-seat");
      span01.textContent = "R석";
    } else if (a.elm.classList.contains("S")) {
      span01.classList.add("s-seat");
      span01.textContent = "S석";
    } else if (a.elm.classList.contains("A")) {
      span01.classList.add("a-seat");
      span01.textContent = "A석";
    }
    li.appendChild(span01);
    span02.textContent = a.elm.dataset.section + "-" + a.elm.dataset.order;
    li.appendChild(span02);
    ul.appendChild(li);
  });
}

//좌석다시선택
document
  .querySelector(".selected-seat-area>h6>button")
  .addEventListener("click", function () {
    document
      .querySelectorAll(".stage-area .stage>div>ul")
      .forEach((a) => a.remove());
    createAllSeats();
    selectedArr = [];
    updateSelectedSeats(selectedArr);
  });

//좌석선택완료 버튼
document
  .querySelector(".select-finish-btnWrap>button")
  .addEventListener("click", function () {
    let getDetailObj = JSON.parse(localStorage.getItem("detailObj"));
    if (selectedArr.length === 0) {
      let yes;

      yes = confirm("선택한 좌석이 없습니다. 이대로 종료하시겠습니까?");
      if (yes) {
        window.close();
      }
    } else {
      let recentSelectedObj = {
        selectedArr: selectedArr,
        detailObj: getDetailObj,
      };
      localStorage.setItem(
        "recentReservation",
        JSON.stringify(recentSelectedObj)
      );
      alert("좌석선택이 완료되었습니다.");
      window.close();
    }
  });

//함수실행
createAllSeats();

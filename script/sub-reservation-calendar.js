let calendarTitle = document.getElementById("calendar-title");
let calendarBody = document.getElementById("calendar-body");
let prevMonthButton = document.getElementById("prev-month");
let nextMonthButton = document.getElementById("next-month");
let selectedDateDiv = document.getElementById("selected-date");
let currentDate = new Date();

function renderCalendar(date) {
  // 현재 설정된 연도와 월
  let year = date.getFullYear();
  let month = date.getMonth();

  // 오늘 날짜
  let today = new Date();

  // 캘린더 제목
  calendarTitle.textContent = `${year}년 ${month + 1}월`;

  // 현재 달의 첫 번째 날과 마지막 날
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);

  // 첫째 날의 요일
  let firstDayWeekday = firstDay.getDay();

  // 마지막 날짜
  let lastDate = lastDay.getDate();

  // 기존 내용 초기화
  calendarBody.innerHTML = "";

  // 첫 주의 빈 칸 채우기
  let row = document.createElement("tr");
  for (let i = 0; i < firstDayWeekday; i++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }

  // 날짜 채우기
  for (let day = 1; day <= lastDate; day++) {
    // 새로운 줄 시작
    if (row.children.length === 7) {
      calendarBody.appendChild(row);
      row = document.createElement("tr");
    }

    let cell = document.createElement("td");
    let span = document.createElement("span");
    cell.appendChild(span);
    span.textContent = day;

    // 오늘 날짜 확인 및 스타일 적용
    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate()
    ) {
      span.style.backgroundColor = "var(--deepPurple)";

      span.style.color = "#fff";
    }

    row.appendChild(cell);
  }

  // 마지막 행 추가
  if (row.children.length > 0) {
    calendarBody.appendChild(row);
  }
}

// 이전/다음 버튼
prevMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// 처음 로드
renderCalendar(currentDate);

//회차 클릭
document
  .querySelector(".res-calender-time")
  .addEventListener("click", calendarTimeSelect);
document
  .querySelector(".calender-time")
  .addEventListener("click", calendarTimeSelect);
function calendarTimeSelect() {
  this.classList.toggle("selected");
}



// res-calendar
let resCalendarTitle = document.getElementById("res-calendar-title");
let resCalendarBody = document.getElementById("res-calendar-body");
let resPrevMonthButton = document.getElementById("res-prev-month");

let resNextMonthButton = document.getElementById("res-next-month");
let resSelectedDateDiv = document.getElementById("res-selected-date");
let resCurrentDate = new Date();

function resRenderCalendar(date) {
  // 현재 설정된 연도와 월
  let year = date.getFullYear();
  let month = date.getMonth();

  // 오늘 날짜
  let today = new Date();

  // 캘린더 제목
  resCalendarTitle.textContent = `${year}년 ${month + 1}월`;

  // 현재 달의 첫 번째 날과 마지막 날
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);

  // 첫째 날의 요일
  let firstDayWeekday = firstDay.getDay();

  // 마지막 날짜
  let lastDate = lastDay.getDate();

  // 기존 내용 초기화
  resCalendarBody.innerHTML = "";

  // 첫 주의 빈 칸 채우기
  let row = document.createElement("tr");
  for (let i = 0; i < firstDayWeekday; i++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }

  // 날짜 채우기
  for (let day = 1; day <= lastDate; day++) {
    // 새로운 줄 시작
    if (row.children.length === 7) {
      resCalendarBody.appendChild(row);
      row = document.createElement("tr");
    }

    let cell = document.createElement("td");
    let span = document.createElement("span");

    span.textContent = day;
    cell.appendChild(span);

    // 오늘 날짜 확인 및 스타일 적용
    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate()
    ) {
      span.style.backgroundColor = "var(--deepPurple)";
      span.style.color = "#fff";
    }

    row.appendChild(cell);
  }

  // 마지막 행 추가
  if (row.children.length > 0) {
    resCalendarBody.appendChild(row);
  }
}

// 이전/다음 버튼
resPrevMonthButton.addEventListener("click", () => {
  resCurrentDate.setMonth(resCurrentDate.getMonth() - 1);

  resRenderCalendar(resCurrentDate);
});

resNextMonthButton.addEventListener("click", () => {
  resCurrentDate.setMonth(resCurrentDate.getMonth() + 1);
  resRenderCalendar(resCurrentDate);
});

// 처음 로드
resRenderCalendar(resCurrentDate);

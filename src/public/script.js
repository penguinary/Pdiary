//입력 양식
class Board {
  constructor(ranking, user_id, img, title) {
    this.ranking = ranking;
    this.id = user_id;
    this.img = img;
    this.title = title;
  }
}
//일기 작성 버튼
function moveBoard() {
  location.href = "index.html";
}
function moveToLogin() {
  location.href = "login.html";
}
//셀렉트 변경 알림(test)
function changeSelect() {
  var value_category = document.getElementById("bd_category");
  alert(value_category.options[value_category.selectedIndex].value);
}
//페이지 작동 시켰을 때 작동하는 함수
window.onload = function () {};
// 그리기 기능 (다이어리) *************************
const canvas = document.getElementById("da-canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("da-controlColor");
const range = document.getElementById("da-penRange");
const tools = document.querySelectorAll('input[name="da-choicePen"]');
const clear = document.getElementById("da-drawDelete");

const INITIAL_COLOR = "#000000";

canvas.width = 621;
canvas.height = 305;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

// 펜 변경 함수
function handleToolClick(event) {
  const selectedTool = event.target.value;

  if (selectedTool === "da-pen") {
    filling = false;
    ctx.globalCompositeOperation = "source-over";
  } else if (selectedTool === "da-fill") {
    filling = true;
    ctx.globalCompositeOperation = "source-over";
  } else if (selectedTool === "da-eraser") {
    ctx.globalCompositeOperation = "destination-out";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}

// 펜 색상 변경
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

// 두께 조절
function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

// 도구 변경
tools.forEach((tool) => {
  tool.addEventListener("click", handleToolClick);
});

// 삭제 버튼

function handleClearClick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 채우기
if (clear) {
  clear.addEventListener("click", handleClearClick);
}

// 테마 변경 코드 (다이어리) ****************************
document.getElementById("da-Theme").addEventListener("change", function () {
  const selectedTheme = this.value;
  const daMainContainer = document.getElementById("da-mainContainer");
  const daUserWrite = document.getElementById("da-userWrite");

  switch (selectedTheme) {
    case "blackboard":
      daMainContainer.style.backgroundImage =
        "url('./image/da_blackBoard.png')";
      daUserWrite.style.backgroundColor = "transparent";
      daUserWrite.style.border = "none";
      break;
    case "oldstory":
      daMainContainer.style.backgroundImage = "url('./image/da_oldStory.png')";
      daUserWrite.style.backgroundColor = "transparent";
      daUserWrite.style.border = "none";
      break;
    case "artic":
      daMainContainer.style.backgroundImage = "url('./image/da_artic.png')";
      daUserWrite.style.backgroundColor = "transparent";
      daUserWrite.style.border = "none";
      break;
    case "park":
      daMainContainer.style.backgroundImage = "url('./image/da_park.png')";
      daUserWrite.style.backgroundColor = "transparent";
      daUserWrite.style.border = "none";
      break;
    default:
      daMainContainer.style.backgroundImage = "none";
      daUserWrite.style.backgroundColor = "white";
      daUserWrite.style.border = "1px solid black";
  }
});

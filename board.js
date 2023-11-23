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
//셀렉트 변경 알림(test)
function changeSelect() {
  var value_category = document.getElementById("bd_category");
  alert(value_category.options[value_category.selectedIndex].value);
}
//페이지 작동 시켰을 때 작동하는 함수
window.onload = function () {};

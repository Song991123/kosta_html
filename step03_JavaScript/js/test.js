// defer 예제용 파일
// defer는 HTML을 끝까지 읽은 뒤 실행되므로
// body 안의 요소를 바로 찾기 쉽다.

addMessage("defer: HTML을 거의 다 읽은 뒤 실행되었어요.");

const deferBox = document.getElementById("defer-box");

deferBox.innerText = "defer 성공! HTML을 다 읽은 뒤 실행해서 이 상자를 바로 찾았어요.";
deferBox.style.border = "2px solid #74c0fc";

addMessage("defer: #defer-box를 바로 찾고 내용을 바꿨어요.");

// async 예제용 파일
// async는 파일 준비가 끝나면 바로 실행하려고 한다.
// 그래서 HTML을 다 읽기 전일 수도 있고, 후일 수도 있다.

addMessage("async: 파일을 받자마자 실행을 시도했어요.");

const asyncBoxNow = document.getElementById("async-box");

if (asyncBoxNow) {
    addMessage("async: 운 좋게도 #async-box가 이미 만들어져 있었어요.");
} else {
    addMessage("async: 아직 #async-box가 안 만들어져서 바로는 못 찾았어요.");
}

// DOMContentLoaded는 HTML 읽기가 끝났을 때 실행된다.
// 그래서 여기서는 안전하게 요소를 찾을 수 있다.
document.addEventListener("DOMContentLoaded", function () {
    const asyncBox = document.getElementById("async-box");

    asyncBox.innerText = "async 실행 완료! 다만 실행 시점이 일정하지 않을 수 있어요.";
    asyncBox.style.border = "2px solid #ffd43b";

    addMessage("async: HTML 읽기가 끝난 뒤 #async-box 내용을 채웠어요.");
});

// 숫자 1~6에 맞는 주사위 모양 문자
const diceIcons = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// 버튼을 여러 번 빠르게 누르는 것을 막기 위한 변수
let rolling = false;

function rollDice() {
    // 이미 굴리는 중이면 다시 실행하지 않음
    if (rolling) {
        return;
    }

    rolling = true;

    const dice = document.getElementById("dice");
    const result = document.getElementById("result");

    result.innerText = "주사위를 굴리는 중...";

    // setInterval: 일정 시간마다 반복 실행
    // 0.1초마다 주사위 모양을 계속 바꿔서 굴러가는 것처럼 보이게 함
    const animation = setInterval(function() {
        const randomIndex = Math.floor(Math.random() * 6);
        dice.innerText = diceIcons[randomIndex];
    }, 100);

    // setTimeout: 정해진 시간이 지난 뒤 한 번만 실행
    // 1초 뒤 애니메이션을 멈추고 최종 값을 보여줌
    setTimeout(function() {
        clearInterval(animation);

        const finalNumber = Math.floor(Math.random() * 6) + 1;
        dice.innerText = diceIcons[finalNumber - 1];
        result.innerText = "주사위 결과: " + finalNumber;

        rolling = false;
    }, 1000);
}
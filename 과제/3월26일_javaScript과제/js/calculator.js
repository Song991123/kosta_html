function calculator() {
	let num1 = prompt("첫 번째 숫자를 입력하세요.");
	if (num1 === null || num1.trim() === "" || isNaN(num1)) {
		alert("숫자가 아니거나 입력값이 없습니다.");
		askRetry();
		return;
	}

	let operator = prompt("연산자를 입력하세요 (+, -, *, /).");
	if (operator === null || operator.trim() === "" || !["+", "-", "*", "/"].includes(operator)) {
		alert("유효하지 않은 연산자입니다.");
		askRetry();
		return;
	}

	let num2 = prompt("두 번째 숫자를 입력하세요.");
	if (num2 === null || num2.trim() === "" || isNaN(num2)) {
		alert("숫자가 아니거나 입력값이 없습니다.");
		askRetry();
		return;
	}

	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	let result;
	switch (operator) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			if (num2 === 0) {
				alert("0으로 나눌 수 없습니다.");
				askRetry();
				return;
			}
			result = num1 / num2;
			break;
	}
	document.getElementById("result").innerHTML = `<p>${num1} ${operator} ${num2} = ${result}</p>`;

	// 다시 시도할지 사용자에게 묻는 메소드
	function askRetry() {
		let retry = confirm("다시 시도하시겠습니까?");
		if (retry) {
			calculator(); // 재귀 호출로 다시 시도
		} else {
			alert("프로그램을 종료합니다.");
		}
	}
}

document.getElementById("calculate").addEventListener("click", calculator);

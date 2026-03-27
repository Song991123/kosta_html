function reportCard() {
	const name = prompt("이름을 입력하세요.");
	const kor = parseInt(prompt("국어 점수를 입력하세요."));
	const eng = parseInt(prompt("영어 점수를 입력하세요."));
	const math = parseInt(prompt("수학 점수를 입력하세요."));

	const total = kor + eng + math;
	const average = total / 3;
	const gradeActions = {
		10: "A",
		9: "A",
		8: "B",
		7: "C",
		6: "D",
		5: "F",
		4: "F",
		3: "F",
		2: "F",
		1: "F",
		0: "F",
	};

	const gradeKey = Math.floor(average / 10);
	const grade = gradeActions[gradeKey];

	document.write(`<h1 style="text-align: center;">성적표-1</h1>`);

	document.write(`
        <table border="1" class="report-card-table">
        <tr>
            <th>이름</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>총점</th>
            <th>평균</th>
            <th>등급</th>
        </tr>
            <tr>
                <td>${name}</td>
                <td>${kor}</td>
                <td>${eng}</td>
                <td>${math}</td>
                <td>${total}</td>
                <td>${average.toFixed(2)}</td>
                <td>${grade}</td>
            </tr>
        </table>
    `);
}

reportCard();

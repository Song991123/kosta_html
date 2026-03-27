function multiplication() {
	document.write("<h1 style='text-align:center;'>구구단</h1>");
	document.write("<table border='1' class='multiplication-table'>");

	// 제목
	document.write("<tr>");
	for (let i = 1; i <= 9; i++) {
		document.write(`<th>${i}단</th>`);
	}
	document.write("</tr>");

	// 내용
	for (let i = 1; i <= 9; i++) {
		document.write("<tr>");
		for (let j = 1; j <= 9; j++) {
			document.write(`<td>${j} x ${i} = ${j * i}</td>`);
		}
		document.write("</tr>");
	}

	document.write("</table>");
}

multiplication();

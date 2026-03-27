/* === 1. 화면에 보여주기 위한 공통 함수 === */

const resultArea = document.getElementById("result-area");

function formatValue(value) {
	if (Array.isArray(value)) {
		return `[${value.join(", ")}]`;
	}

	if (typeof value === "string") {
		return `"${value}"`;
	}

	if (value === null) {
		return "null";
	}

	return String(value);
}

function getTypeLabel(value) {
	if (Array.isArray(value)) {
		return "array";
	}

	return typeof value;
}

function escapeHtml(text) {
	return text
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");
}

function renderCard(example) {
	const card = document.createElement("div");
	card.className = "card";

	card.innerHTML = `
		<h2>${example.title}</h2>
		<p class="meta">${example.what}</p>
		<p class="when"><strong>언제 씀:</strong> ${example.when}</p>
		<p><span class="badge kind-badge">${example.label}</span></p>
		<pre><code>${escapeHtml(example.code)}</code></pre>
		<div class="result-box">
			<h3>실행 결과</h3>
			<div class="result-row">
				<span class="result-label">값</span>
				<span class="badge value-badge">${formatValue(example.value)}</span>
				<span class="badge type-badge">type: ${getTypeLabel(example.value)}</span>
			</div>
		</div>
	`;

	resultArea.appendChild(card);
}

/* === 2. 함수 종류별 예제 준비 === */

// 함수 선언식
function add(a, b) {
	return a + b;
}

// 함수 표현식
const multiply = function (a, b) {
	return a * b;
};

// 화살표 함수
const square = (n) => n * n;

// 생성자 함수
function User(name) {
	this.name = name;
}

const user1 = new User("민수");

// 메서드
const calculator = {
	minus(a, b) {
		return a - b;
	}
};

// 콜백 함수 - 미리 만든 함수 전달
function doubleNumber(n) {
	return n * 2;
}

const callbackNamedResult = [1, 2, 3].map(doubleNumber);

// 콜백 함수 - 익명 함수 바로 전달
const callbackAnonymousResult = [1, 2, 3].map(function (n) {
	return n * 2;
});

// 콜백 함수 - 화살표 함수 전달
const callbackArrowResult = [1, 2, 3].map((n) => n * 2);

// 즉시 실행 함수
const iifeResult = (function () {
	return "바로 실행됨";
})();

// 재귀 함수
function factorial(n) {
	if (n === 1) {
		return 1;
	}

	return n * factorial(n - 1);
}

// 제너레이터 함수
function* numberGenerator() {
	yield 1;
	yield 2;
	yield 3;
}

const generatorValues = [...numberGenerator()];

/* === 3. 설명 + 예제 화면 출력 === */

const examples = [
	{
		title: "1. 함수 선언식",
		label: "Function Declaration",
		what: "가장 기본 함수 형태임.",
		when: "같은 기능을 여러 번 쓸 때 적합함.",
		code: `function add(a, b) {
	return a + b;
}

add(2, 3);`,
		value: add(2, 3)
	},
	{
		title: "2. 함수 표현식",
		label: "Function Expression",
		what: "함수를 변수에 담는 방식임.",
		when: "함수를 값처럼 다루고 싶을 때 씀.",
		code: `const multiply = function (a, b) {
	return a * b;
};

multiply(3, 4);`,
		value: multiply(3, 4)
	},
	{
		title: "3. 화살표 함수",
		label: "Arrow Function",
		what: "짧게 쓰기 좋은 함수 형태임.",
		when: "간단한 계산이나 콜백에 자주 씀.",
		code: `const square = (n) => n * n;

square(5);`,
		value: square(5)
	},
	{
		title: "4. 생성자 함수",
		label: "Constructor Function",
		what: "비슷한 객체를 여러 개 만들 때 쓰는 함수임.",
		when: "이름표 같은 객체를 반복해서 만들 때 씀.",
		code: `function User(name) {
	this.name = name;
}

const user1 = new User("민수");`,
		value: user1.name
	},
	{
		title: "5. 메서드",
		label: "Method",
		what: "객체 안에 들어 있는 함수임.",
		when: "객체가 자기 일을 하게 만들 때 씀.",
		code: `const calculator = {
	minus(a, b) {
		return a - b;
	}
};

calculator.minus(10, 4);`,
		value: calculator.minus(10, 4)
	},
	{
		title: "6. 콜백 함수 - 미리 만든 함수 전달",
		label: "Callback Function",
		what: "콜백은 다른 함수에 전달하는 함수임.",
		when: "같은 함수를 여러 곳에서 다시 쓰고 싶을 때 씀.",
		code: `function doubleNumber(n) {
	return n * 2;
}

[1, 2, 3].map(doubleNumber);`,
		value: callbackNamedResult
	},
	{
		title: "7. 콜백 함수 - 익명 함수 바로 전달",
		label: "Callback Function",
		what: "이름 없이 그 자리에서 바로 넘기는 방식임.",
		when: "한 번만 짧게 쓸 작업일 때 편함.",
		code: `[1, 2, 3].map(function (n) {
	return n * 2;
});`,
		value: callbackAnonymousResult
	},
	{
		title: "8. 콜백 함수 - 화살표 함수 전달",
		label: "Callback Function",
		what: "익명 함수를 더 짧게 쓴 형태임.",
		when: "간단한 콜백을 짧고 빠르게 쓰고 싶을 때 씀.",
		code: `[1, 2, 3].map((n) => n * 2);`,
		value: callbackArrowResult
	},
	{
		title: "9. 즉시 실행 함수",
		label: "IIFE",
		what: "만들자마자 바로 실행되는 함수임.",
		when: "한 번만 바로 실행할 코드가 있을 때 씀.",
		code: `(function () {
	return "바로 실행됨";
})();`,
		value: iifeResult
	},
	{
		title: "10. 재귀 함수",
		label: "Recursive Function",
		what: "함수 안에서 자기 자신을 다시 부르는 함수임.",
		when: "반복을 단계적으로 줄여 갈 때 씀.",
		code: `function factorial(n) {
	if (n === 1) {
		return 1;
	}

	return n * factorial(n - 1);
}

factorial(5);`,
		value: factorial(5)
	},
	{
		title: "11. 제너레이터 함수",
		label: "Generator Function",
		what: "값을 한 번에 다 주지 않고 하나씩 꺼내는 함수임.",
		when: "값을 순서대로 천천히 꺼내고 싶을 때 씀.",
		code: `function* numberGenerator() {
	yield 1;
	yield 2;
	yield 3;
}

[...numberGenerator()];`,
		value: generatorValues
	}
];

for (const example of examples) {
	renderCard(example);
}

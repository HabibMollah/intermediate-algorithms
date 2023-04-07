function convertToRoman(num) {
	const romanNums = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	let answer = '';
	for (let key in romanNums) {
		while (num >= romanNums[key]) {
			answer += key;
			num = num - romanNums[key];
		}
	}

	return answer;
}
console.log(convertToRoman(3609));

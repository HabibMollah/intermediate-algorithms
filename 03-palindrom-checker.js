function palindrome(str) {
	let sliced = str.replace(/([^a-zA-Z0-9]|\s)/g, '');
	console.log(sliced);
	let reversed = sliced.split('').reverse().join('');
	console.log(reversed);
	if (sliced.toLowerCase() === reversed.toLowerCase()) return true;
	return false;
}

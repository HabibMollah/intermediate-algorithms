function palindrome(str) {
	let sliced = str.replace(/([^a-zA-Z0-9]|\s)/g, '');
	let reversed = sliced.split('').reverse().join('');
	if (sliced.toLowerCase() === reversed.toLowerCase()) return true;
	return false;
}
console.log(palindrome('  ?race car?'));

function diffArray(arr1, arr2) {
	let newArray = [];

	arr1.filter((item) => {
		if (!arr2.includes(item)) newArray.push(item);
	});
	arr2.filter((item) => {
		if (!arr1.includes(item)) newArray.push(item);
	});

	return newArray;
}

console.log(diffArray([1, 6, 9, 2, 3, 5], [1, 2, 3, 4, 5]));

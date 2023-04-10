'use strict';
const moneyUnitsInPennies = {
	'ONE HUNDRED': 100 * 100,
	TWENTY: 20 * 100,
	TEN: 10 * 100,
	FIVE: 5 * 100,
	ONE: 1 * 100,
	QUARTER: 0.25 * 100,
	DIME: 0.1 * 100,
	NICKEL: 0.05 * 100,
	PENNY: 0.01 * 100,
};
function checkCashRegister(price, cash, cid) {
	let penniesInDrawer = cid
		.map((x) => Math.round(x[1] * 100))
		.reduce((a, b) => a + b);

	let change = Math.round(cash * 100) - Math.round(price * 100);

	if (change > penniesInDrawer)
		return {
			status: 'INSUFFICIENT_FUNDS',
			change: [],
		};
	if (penniesInDrawer === change)
		return {
			status: 'CLOSED',
			change: cid,
		};
	if (change < penniesInDrawer) {
		cid = cid.reverse();
		let holder;
		let answer = [];
		for (let elem of cid) {
			holder = [elem[0], 0];

			elem[1] = elem[1] * 100;
			while (change >= moneyUnitsInPennies[elem[0]] && elem[1] > 0) {
				change -= moneyUnitsInPennies[elem[0]];
				elem[1] -= moneyUnitsInPennies[elem[0]];
				holder[1] += moneyUnitsInPennies[elem[0]];
			}
			if (holder[1] > 0) answer.push(holder);
		}
		if (change > 0) {
			return { status: 'INSUFFICIENT_FUNDS', change: [] };
		}
		return {
			status: 'OPEN',
			change: answer.map((x) => [x[0], x[1] / 100]),
		};
	}
}

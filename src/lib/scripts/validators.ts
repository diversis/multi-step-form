export function validateEmail(email: string) {
	const regexp =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	const matches: RegExpMatchArray | null = email.match(regexp);
	console.log(`email matches: ${matches} || email: ${email}`);
	return matches ? matches[0] === email : false;
}

export function validateUserName(userName: string) {
	const regexp = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.\s{1}]{3,29}$/i;
	const matches: RegExpMatchArray | null = userName.match(regexp);
	console.log('name matches: ', matches);
	return matches ? matches[0] === userName : false;
}

export function validatePhoneNumber(phoneNumber: number | null) {
	if (!phoneNumber) return false;
	const numLength = phoneNumber.toString().length;
	return numLength > 5 && numLength < 15;
}

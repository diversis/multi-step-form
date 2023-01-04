export function validateEmail(email: string) {
	const regexp =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	const matches: RegExpMatchArray | null = email.match(regexp);
	console.log('email matches: ', matches);
	return matches ? matches[0] === email : false;
}

export function validateUserName(userName: string) {
	const regexp = /(?!.*[.\-_]{2,})^[a-zA-Z0-9.\-_\s]{3,36}$/;
	const matches: RegExpMatchArray | null = userName.match(regexp);
	return matches ? matches[0] === userName : false;
}

export function validatePhoneNumber(phoneNumber: number) {
	const numLength = phoneNumber.toString().length;
	return numLength > 5 && numLength < 15;
}

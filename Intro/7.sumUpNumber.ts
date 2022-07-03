const solution = (inputString: string): number => {
	const nonDigits: RegExp = /[^0-9]/;
	const splitted: string[] = inputString.split(nonDigits);
	
	return +splitted.reduce((a:string, b:string) => {
		return (Number(a) + Number(b)).toString();
	});
}

console.log(solution("2 apples, 12 oranges"));


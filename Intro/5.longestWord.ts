const solution = (text:string) => {
	const pat:RegExp = /[^a-z^A-Z]/;
	const splitted:string [] = text.split(pat);
	return splitted.reduce((a:string,b:string) => { return a.length > b.length ? a: b;});
}

console.log(solution("Ready[[[, steady, go!"));

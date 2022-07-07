const solution = (s:string):string =>{
	let counter:number[] = [];
	let order:number[] = [];
	let i:number = 0;
	const n:number = s.length;
	const aCode:number = "a".charCodeAt(0);

	for(i = 0; i < 26;i++){
		counter.push(0);
		order.push(0);
	}

	for(i = 0;i< n;i++){
		const code:number = s[i].charCodeAt(0) - aCode;
		counter[code]++;
		order[i] = code;
	}

	for(let j = 0; j< i; j++){
		if(counter[order[j]] === 1){
			return String.fromCharCode(order[j] + aCode);
		}
	}
	return "_";
}

console.log(solution("abacabad"));

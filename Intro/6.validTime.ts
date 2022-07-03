const solution = (time:string):boolean=> {
	const hm:string[] = time.split(":");
	const h:number = Number(hm[0]);
	const m:number = Number(hm[1]);
	return h < 24 && m < 60;
}

console.log(solution("02:76"));

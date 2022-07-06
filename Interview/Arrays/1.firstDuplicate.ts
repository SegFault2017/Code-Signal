const solution = (a:number[]): number => {
	let seen = new Set<number>();
		
	for(let x of a){
		if(seen.has(x)){
			return x;
		}
		seen.add(x);
	}	
	return -1;
}

const a:number[] = [2, 1, 3, 5, 3, 2];
console.log(solution(a));

const solution = (n:number): number =>{
	let k:number = 1;
	if(n === 0){
		return n; 
	}

	let nums: number[] = [];
	let stack: number[] = [];
	while(n > 0){
		nums.push(n % 10);
		n = Math.floor(n/10);
	}

	nums.reverse();
	for(let n of nums){
		const len:number = stack.length;
		if(len === 0){
			stack.push(n);
			continue;
		}
		if(stack[len - 1] < n && k > 0){
			stack.pop();
			k--;
		}
		stack.push(n);
	}
	
	while(k > 0){
		stack.pop();
		k--;
	}
	const len:number = stack.length;
	let largest:number = 0;
	let digit: number= 1;
	for(let i = len -1; i >= 0; i--){
		largest += stack[i] * digit;		
		digit *=10;
	}
	return largest;	
}

console.log(solution(10));

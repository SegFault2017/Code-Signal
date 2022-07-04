const solution = (product:number):number =>{
	if(product ===0){
		return 10;
	}else if(product < 10){
		return product;
	}

	let int:string = "";
	for(let d=9; d>1;d--){
		while(product % d === 0 ){	
			int = d + int;
			product /=d;
		}
	}
	return product === 1 ? Number(int) : -1;
}

console.log(solution(49));

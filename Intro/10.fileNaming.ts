function solution(names:string[]): string[]{
	let table:{[key:string]:number} = {};
	let renamed:string[] = [];
	for(let name of names){
		if(name in table){
			const occur:number = table[name];
			renamed.push(name + "(" + (occur+1) + ")"); 
			table[name]++;
		}else{
			console.log(name);
			renamed.push(name);
			table[name] = 0;
		}
	}
	return renamed;
}

console.log(solution(["doc", "doc", "image", "doc(1)", "doc"]));

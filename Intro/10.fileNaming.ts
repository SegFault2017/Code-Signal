function solution(names:string[]): string[]{
	let table:{[key:string]:number} = {};
	let renamed:string[] = [];
	for(let name : names){
		if(name in table){
			const occur:number = table[name];
			renamed.push(	
		}else{
			table[name] = 0;
		}
	}
}

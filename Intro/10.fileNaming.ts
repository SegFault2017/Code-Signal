function solution(names:string[]): string[]{
	let seen:{[key:string]:number} = {};
	let newName:string = "";
	return names.map((name:string) => {
		newName = name;
		while(seen[newName]){
			console.log(newName);
			newName = `${name}(${seen[name]++})`;
		}
		seen[newName] =1;
		return newName;
	});
}

const names:string[] = ["a(1)", 
 "a(6)", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a"];
console.log(solution(names));

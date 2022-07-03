const solution=(address:string): string =>{
	let domain = "";
	const index:number = address.lastIndexOf("@");
	return address.substring(index+1);	
 }
console.log(solution("ray.tangent42@gmail.com"))

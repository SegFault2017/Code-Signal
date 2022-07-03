const isPalindrome = (st:string):boolean => {
	const n: number = st.length;
	let i:number =0, j:number= n-1;
	while(i < j){
		if(st.charAt(i) !== st.charAt(j)){
			return false;
		}
	}
	return true;
}

const solution=(st:string):string=>{
	let palindrome = "";
	let i:number = 0;
	while(!isPalindrome(st.substring(i))){
		i++;
	}
	
	while(--i > 0){
		palindrome += st.charAt(i);
	}
	 
	return palindrome;
}

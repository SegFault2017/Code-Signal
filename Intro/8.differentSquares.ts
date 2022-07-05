const neighs = (x:number, y:number, matrix:number[][]): number[] => {
	const valid:number[] = [matrix[x][y]];
	const dirs: number[][] = [[0,1],[1,0],[1,1]];
	for(let dir of dirs){
		const dx: number = x + dir[0];
		const dy: number = y+ dir[1];
		if(!matrix[dy][dx]){
			valid.push(matrix[dy][dx]);
		}
	}
	return valid;
}

const solution = (matrix: number[][]) : number => {
	const n:number = matrix.length;
	const m: number = matrix[0].length;
	if(n * m === 0){
		return 0;
	}

	let unique = new Set<number[]> ();
	for(let i = 0; i < n-1; i++){
		for(let j = 0; j < m-1; j++){
			unique.add(neighs(i,j, matrix));
			console.log(unique);
		}
	}
	return unique.size;
}

const  matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]];
console.log(solution(matrix));

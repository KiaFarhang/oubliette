export class Grid{
	private sites: any[][];

	constructor(rows: number, columns: number){
		let array: Array<any> = [];

		for(let i: number = 0; i < rows; i++){
			array.push([]);
			for(let j: number = 0; j < columns; j++){
				array[i][j] = null;
			}
		}

		this.sites = array;
	}

	public getGrid(): any[][]{
		return this.sites;
	}

	public getItemAt(x: number, y: number): any{
		return this.sites[x][y];
	}
}
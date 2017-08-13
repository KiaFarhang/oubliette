import { Grid } from './index';
import * as chai from 'chai';
import 'mocha';

const assert = chai.assert; 

describe('Grid', ()=>{

	it('should construct an array of x by y', ()=>{
		let grid: any[][] = new Grid(5, 3).getGrid();

		assert.strictEqual(grid.length, 5);
		grid.forEach((row: any[]) =>{
			assert.strictEqual(row.length, 3);
		});
	});

	describe('Methods', ()=>{

		describe('getGrid', ()=>{
			it('should return an array of arrays', ()=>{
				let grid: any[][] = new Grid(7, 2).getGrid();

				grid.forEach((row: any[])=>{
					assert.isArray(row);
				});
			});
		});

		describe('getItemAt', ()=>{
			it('should return null if the space is empty', ()=>{
				let emptyGrid: Grid = new Grid(6, 7);

				for (let i: number = 0; i < 6; i++){
					for(let j: number = 0; j < 7; j++){
						assert.isNull(emptyGrid.getItemAt(i, j));
					};
				};
			});
		});

	});
});
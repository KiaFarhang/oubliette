import { Coordinates } from './index';
import * as chai from 'chai';
import 'mocha';

const assert = chai.assert; 

describe('Coordinates', ()=>{
	describe('Methods', ()=>{
		describe('getX', ()=>{
			it('should return the x property',()=>{
				let coordinates = new Coordinates(1,4);
				let x = coordinates.getX();

				assert.strictEqual(x, 1);
			});
		});

		describe('getY', ()=>{
			it('should return the y property', ()=>{
				let coordinates = new Coordinates(1,4);
				let y = coordinates.getY();

				assert.strictEqual(y, 4);
			});
		});
	});
});
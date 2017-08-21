import { Coordinates } from './index';
import * as chai from 'chai';
import 'mocha';

const assert = chai.assert; 

describe('Coordinates', ()=>{
	describe('Methods', ()=>{
		describe('getX', ()=>{
			it('returns the x property',()=>{
				let coordinates = new Coordinates(1,4);
				let x = coordinates.getX();

				assert.strictEqual(x, 1);
			});
		});

		describe('getY', ()=>{
			it('returns the y property', ()=>{
				let coordinates = new Coordinates(1,4);
				let y = coordinates.getY();

				assert.strictEqual(y, 4);
			});
		});

		describe('equals', ()=>{
			it('returns true when coordinates match X and Y', ()=>{
				assert.isTrue(Coordinates.equal(new Coordinates(1,1), new Coordinates(1,1)));
			});
		});
			it('returns false when coordinates do not match X and Y',()=>{
				assert.isFalse(Coordinates.equal(new Coordinates(1,1), new Coordinates(1,0)));
			});
	});
});
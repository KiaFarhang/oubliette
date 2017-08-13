import { Space } from './index';
import * as chai from 'chai';
import 'mocha';

const assert = chai.assert; 

describe('Space', ()=>{
	describe('Methods', ()=>{
		describe('getCharCode', ()=>{
			it('should return .', ()=>{
				let space: Space = new Space();
				let charCode: string = space.getCharCode();

				assert.strictEqual(charCode, '.');
			});
		});
	});
});
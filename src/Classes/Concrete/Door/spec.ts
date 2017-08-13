import { Door } from './index';
import * as chai from 'chai';
import 'mocha';

const assert = chai.assert; 

describe('Door', ()=>{
	describe('Methods', ()=>{
		describe('getCharCode', ()=>{
			it('should return @', ()=>{
				let door: Door = new Door();
				let charCode: string = door.getCharCode();

				assert.strictEqual(charCode, '@');
			});
		});
	});
});
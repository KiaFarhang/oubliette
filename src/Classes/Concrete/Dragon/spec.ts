import { Dragon } from './index';
import { Coordinates } from '../Coordinates';
import * as chai from 'chai';
import 'mocha';

const assert = chai.assert; 

describe('Dragon', ()=>{
	describe('Methods', ()=>{
		describe('getCharCode', ()=>{
			it('should return S', ()=>{
				let dragon: Dragon = new Dragon(new Coordinates(1,1));
				let charCode: string = dragon.getCharCode();

				assert.strictEqual(charCode, 'S');

			});
		});

		describe('getLocation', ()=>{

			it('should return Coordinates', ()=>{
				let dragon: Dragon = new Dragon(new Coordinates(5,4));
				let location: Coordinates = dragon.getLocation();

				assert.instanceOf(location, Coordinates);
			});


			it('should return the location of the dragon', ()=>{
				let dragon: Dragon = new Dragon(new Coordinates(5,4));
				let location: Coordinates = dragon.getLocation();

				let currentX: number = location.getX();
				let currentY: number = location.getY();

				assert.strictEqual(currentX, 5);
				assert.strictEqual(currentY, 4);

			});
		});


		describe('move', ()=>{
			it('should return new Coordinates', ()=>{
				let dragon: Dragon = new Dragon(new Coordinates(5,0));
				let coordinates: Coordinates = dragon.move(5, 5);

				assert.instanceOf(coordinates, Coordinates);
			});

			it('should not let the new coordinates exceed the max row and column', ()=>{
				let dragon: Dragon = new Dragon(new Coordinates(4,0));
				let coordinates: Coordinates = dragon.move(4,4);

				let destinationX = coordinates.getX();
				let destinationY = coordinates.getY();

				assert.isAtMost(destinationX, 4);
				assert.isAtMost(destinationY, 4);

			});

			it('should not let the new coordinates fall below 0', ()=>{
				let dragon: Dragon = new Dragon(new Coordinates(1,0));
				let coordinates: Coordinates = dragon.move(1,1);

				let destinationX = coordinates.getX();
				let destinationY = coordinates.getY();

				assert.isAtLeast(destinationX, 0);
				assert.isAtLeast(destinationY, 0);
			});

			it('should return new coordinates within 1 of the old location', ()=>{
				let dragonA: Dragon = new Dragon(new Coordinates(1,0));
				let coordinatesA: Coordinates = dragonA.move(1,1);

				let possibleXA = [0,1];
				let possibleYA = [0,1];

				let destinationXA = coordinatesA.getX();
				let destinationYA = coordinatesA.getY();

				assert.include(possibleXA, destinationXA);
				assert.include(possibleYA, destinationYA);

				let dragonB: Dragon = new Dragon(new Coordinates(2,4));
				let coordinatesB: Coordinates = dragonB.move(4,4);

				let possibleXB = [1,2,3];
				let possibleYB = [3,4];

				let destinationXB = coordinatesB.getX();
				let destinationYB = coordinatesB.getY();

				assert.include(possibleXB, destinationXB);
				assert.include(possibleYB, destinationYB);

				let dragonC: Dragon = new Dragon(new Coordinates(6,6));
				let coordinatesC: Coordinates = dragonC.move(12,12);

				let possibleXC = [4,5,6];
				let possibleYC = [4,5,6];

				let destinationXC = coordinatesC.getX();
				let destinationYC = coordinatesC.getY();

				assert.include(possibleXC, destinationXC);
				assert.include(possibleYC, destinationYC);
			});
		});
	});
});
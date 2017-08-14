import { Player } from './index';
import { Coordinates } from '../Coordinates';
import * as chai from 'chai';
import 'mocha';

const assert = chai.assert; 

describe('Player', ()=>{
	describe('Methods', ()=>{
		describe('getCharCode', ()=>{
			it('should return L', ()=>{
				let player: Player = new Player(new Coordinates(1,1));
				let charCode: string = player.getCharCode();

				assert.strictEqual(charCode, 'L');

			});
		});

		describe('getLocation', ()=>{

			it('should return Coordinates', ()=>{
				let player: Player = new Player(new Coordinates(5,4));
				let location: Coordinates = player.getLocation();

				assert.instanceOf(location, Coordinates);
			});


			it('should return the location of the player', ()=>{
				let player: Player = new Player(new Coordinates(5,4));
				let location: Coordinates = player.getLocation();

				let currentX: number = location.getX();
				let currentY: number = location.getY();

				assert.strictEqual(currentX, 5);
				assert.strictEqual(currentY, 4);

			});
		});

		describe('move', ()=>{
			it('should return new Coordinates', ()=>{
				let player: Player = new Player(new Coordinates(5,0));
				let coordinates: Coordinates = player.move(5, 5);

				assert.instanceOf(coordinates, Coordinates);
			});

			it('should not let the new coordinates exceed the max row and column', ()=>{
				let player: Player = new Player(new Coordinates(4,0));
				let coordinates: Coordinates = player.move(4,4);

				let destinationX = coordinates.getX();
				let destinationY = coordinates.getY();

				assert.isAtMost(destinationX, 4);
				assert.isAtMost(destinationY, 4);

			});

			it('should not let the new coordinates fall below 0', ()=>{
				let player: Player = new Player(new Coordinates(1,0));
				let coordinates: Coordinates = player.move(1,1);

				let destinationX = coordinates.getX();
				let destinationY = coordinates.getY();

				assert.isAtLeast(destinationX, 0);
				assert.isAtLeast(destinationY, 0);
			});

			it('should return new coordinates within 1 of the old location', ()=>{
				let playerA: Player = new Player(new Coordinates(1,0));
				let coordinatesA: Coordinates = playerA.move(1,1);

				let possibleXA = [0,1];
				let possibleYA = [0,1];

				let destinationXA = coordinatesA.getX();
				let destinationYA = coordinatesA.getY();

				assert.include(possibleXA, destinationXA);
				assert.include(possibleYA, destinationYA);

				let playerB: Player = new Player(new Coordinates(2,4));
				let coordinatesB: Coordinates = playerB.move(4,4);

				let possibleXB = [1,2,3];
				let possibleYB = [3,4];

				let destinationXB = coordinatesB.getX();
				let destinationYB = coordinatesB.getY();

				assert.include(possibleXB, destinationXB);
				assert.include(possibleYB, destinationYB);

				let playerC: Player = new Player(new Coordinates(6,6));
				let coordinatesC: Coordinates = playerC.move(12,12);

				let possibleXC = [5,6,7];
				let possibleYC = [5,6,7];

				let destinationXC = coordinatesC.getX();
				let destinationYC = coordinatesC.getY();

				assert.include(possibleXC, destinationXC);
				assert.include(possibleYC, destinationYC);
			});
		});
	});
});
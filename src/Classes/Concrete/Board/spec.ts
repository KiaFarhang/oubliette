import { Board } from './index';
import { BoardConfig } from '../../../Interfaces/BoardConfig';
import { Coordinates } from '../Coordinates';
import * as chai from 'chai';
import 'mocha';

const assert = chai.assert; 

describe('Board', ()=>{
	describe('Methods', ()=>{
		describe('draw', ()=>{
			it('should print the board as a string', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(0,0),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				const boardAsString: string = board.draw();

				assert.typeOf(boardAsString, 'string');
			});

			it('should print a newline for each row in the grid', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(0,0),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				const boardAsString: string = board.draw();

				const numberOfNewlines: number = boardAsString.match(/\n/g).length;

				assert.strictEqual(boardConfig.rows, numberOfNewlines);
			});

			it('should properly print boards', ()=>{
				const boardConfigA: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(0,0),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const boardA: Board = new Board(boardConfigA);

				const boardAsStringA: string = boardA.draw();

				const expectedA: string = 'L...\n....\n....\n..S@\n';

				assert.strictEqual(boardAsStringA, expectedA);

				const boardConfigB: BoardConfig = {
					rows: 1,
					columns: 15,
					playerStartLocation: new Coordinates(0,14),
					dragonStartLocation: new Coordinates(0,1),
					doorLocation: new Coordinates(0,0)
				};

				const boardB: Board = new Board(boardConfigB);

				const boardBsStringB: string = boardB.draw();

				const expectedB: string = '@S............L\n';

				assert.strictEqual(boardBsStringB, expectedB);

				const boardConfigC: BoardConfig = {
					rows: 8,
					columns: 8,
					playerStartLocation: new Coordinates(0,7),
					dragonStartLocation: new Coordinates(7,6),
					doorLocation: new Coordinates(7,7)
				};

				const boardC: Board = new Board(boardConfigC);

				const boardCsStringC: string = boardC.draw();

				const expectedC: string = '.......L\n........\n........\n........\n........\n........\n........\n......S@\n';

				assert.strictEqual(boardCsStringC, expectedC);

			});
		});

		describe('moveAnimateObjects', ()=>{
			it('should not move the door', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(0,0),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				const originalDoorLocation: Coordinates = board.doorLocation;
				board.moveAnimateObjects();
				const newDoorLocation: Coordinates = board.doorLocation;

				assert.strictEqual(originalDoorLocation, newDoorLocation); 
			});

			it('can - but does not have to - move the player', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(2,1),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				board.moveAnimateObjects();

				const possibleX: number[] = [1,2,3];
				const possibleY: number[] = [0,1,2];

				const playerLocation: Coordinates = board.getPlayerLocation();

				const playerX: number = playerLocation.getX();
				const playerY: number = playerLocation.getY();

				assert.include(possibleX, playerX);
				assert.include(possibleY, playerY);
			});

			it('can - but does not have to - move the dragon', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(2,1),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				board.moveAnimateObjects();

				const possibleX: number[] = [2,3,4];
				const possibleY: number[] = [1,2,3];

				const dragonLocation: Coordinates = board.getPlayerLocation();

				const dragonX: number = dragonLocation.getX();
				const dragonY: number = dragonLocation.getY();

				assert.include(possibleX, dragonX);
				assert.include(possibleY, dragonY);
			});
		});

		describe('getPlayerLocation', ()=>{
			it('should return Coordinates', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(2,1),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				const playerLocation: Coordinates = board.getPlayerLocation();

				assert.instanceOf(playerLocation, Coordinates);
			});
		});

		describe('getDragonLocation', ()=>{
			it('should return Coordinates', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(2,1),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				const dragonLocation: Coordinates = board.getDragonLocation();

				assert.instanceOf(dragonLocation, Coordinates);
			});
		});

		describe('isPlayerAtDragon', ()=>{
			it('should return true if the dragon+player are on the same space', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(2,1),
					dragonStartLocation: new Coordinates(2,1),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				assert.isTrue(board.isPlayerAtDragon());
			});

			it('should return false if the dragon+player are in different places', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(0,1),
					dragonStartLocation: new Coordinates(2,1),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				assert.isFalse(board.isPlayerAtDragon());
			})
		});

		describe('isPlayerAtDoor', ()=>{
			it('should return true if the player is on the door space', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(0,1),
					dragonStartLocation: new Coordinates(2,1),
					doorLocation: new Coordinates(0,1)
				};

				const board: Board = new Board(boardConfig);

				assert.isTrue(board.isPlayerAtDoor());
			});

			it('should return false if the lpayer is not on the door space', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(2,1),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const board: Board = new Board(boardConfig);

				assert.isFalse(board.isPlayerAtDoor());
			});
		});
	});
});
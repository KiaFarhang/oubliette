import { Game } from './index';
import { Board } from '../Board';
import { BoardConfig } from '../../../Interfaces/BoardConfig';
import { Coordinates } from '../Coordinates';
import * as chai from 'chai';
import * as sinon from 'sinon';
import 'mocha';

// sinon.assert.expose(chai.assert, {prefix: ''});
const assert = chai.assert;

describe('Game', ()=>{
	describe('Methods', ()=>{
		describe('turn', ()=>{
			it("should call the board's moveAnimateObjects method once", ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(0,0),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const game = new Game(boardConfig);
				const board = game.getBoard();

				const moveSpy = sinon.spy(board, 'moveAnimateObjects');
				game.turn();

				sinon.assert.calledOnce(moveSpy);

			});

			// it("Should call the board's draw method once", ()=>{
			// 	const boardConfig: BoardConfig = {
			// 		rows: 4,
			// 		columns: 4,
			// 		playerStartLocation: new Coordinates(0,0),
			// 		dragonStartLocation: new Coordinates(3,2),
			// 		doorLocation: new Coordinates(3,3)
			// 	};

			// 	const game = new Game(boardConfig);
			// 	const board = game.getBoard();

			// 	const drawSpy = sinon.spy(board, 'draw');
			// 	game.turn();

			// 	sinon.assert.calledOnce(drawSpy);
			// });
		});

		describe('getBoard', ()=>{
			it('should return a Board', ()=>{
				const boardConfig: BoardConfig = {
					rows: 4,
					columns: 4,
					playerStartLocation: new Coordinates(0,0),
					dragonStartLocation: new Coordinates(3,2),
					doorLocation: new Coordinates(3,3)
				};

				const game = new Game(boardConfig);
				const board = game.getBoard();

				assert.instanceOf(board, Board);
			});
		});
	});
});
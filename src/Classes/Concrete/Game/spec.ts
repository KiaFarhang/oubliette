// import { Game } from './index';
// import { Board } from '../Board';
// import { BoardConfig } from '../../../Interfaces/BoardConfig';
// import { Coordinates } from '../Coordinates';
// import * as chai from 'chai';
// import * as sinon from 'sinon';
// import 'mocha';

// // sinon.assert.expose(chai.assert, {prefix: ''});
// const assert = chai.assert;

// describe('Game', ()=>{
// 	let boardConfig: BoardConfig = {
// 		rows: 4,
// 		columns: 4,
// 		playerStartLocation: new Coordinates(0,0),
// 		dragonStartLocation: new Coordinates(3,2),
// 		doorLocation: new Coordinates(3,3)	
// 	};

// 	it('Never has more than one player', ()=>{
// 		const game = new Game(boardConfig);

// 		for(let i: number = 0; i < 10; i++){
// 			game.turn();
// 		}

// 		const string: string = game.getBoard().draw();

// 		const count: number = (string.match(/L/g) || []).length;

// 		assert.isAtMost(count, 1);
// 	});

// 	it('Never has more than one dragon', ()=>{
// 		const game = new Game(boardConfig);
		
// 		for(let i: number = 0; i < 10; i++){
// 			game.turn();
// 		}

// 		const string: string = game.getBoard().draw();

// 		const count: number = (string.match(/S/g) || []).length;

// 		assert.isAtMost(count, 1);

// 	});

// 	describe('Methods', ()=>{
// 		describe('turn', ()=>{
// 			it("calls the board's moveAnimateObjects method once", ()=>{

// 				const game = new Game(boardConfig);
// 				const board = game.getBoard();

// 				const moveSpy = sinon.spy(board, 'moveAnimateObjects');
// 				game.turn();

// 				sinon.assert.calledOnce(moveSpy);

// 			});

// 			// it("calls the board's draw method once", ()=>{

// 			// 	const game = new Game(boardConfig);
// 			// 	const board = game.getBoard();

// 			// 	const drawSpy = sinon.spy(board, 'draw');
// 			// 	game.turn();

// 			// 	sinon.assert.calledOnce(drawSpy);
// 			// });
// 		});

// 		describe('getBoard', ()=>{
// 			it('returns a Board', ()=>{

// 				const game = new Game(boardConfig);
// 				const board = game.getBoard();

// 				assert.instanceOf(board, Board);
// 			});
// 		});
// 	});
// });
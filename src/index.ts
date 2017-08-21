import { Game } from './Classes/Concrete/Game';
import { Coordinates } from './Classes/Concrete/Coordinates';
import { BoardConfig } from './Interfaces/BoardConfig';

				const boardConfig: BoardConfig = {
					rows: 8,
					columns: 8,
					playerStartLocation: new Coordinates(0,0),
					dragonStartLocation: new Coordinates(4,4),
					doorLocation: new Coordinates(7,7)
				};

				const game = new Game(boardConfig);

// game.play();

// import * as blessed from 'blessed';

// const screen = blessed.screen({
// 	smartCSR: true
// });

// screen.title = 'What up?';

// const box = blessed.box({
// 	top: 'center',
// 	left: 'center',
// 	width: '100%',
// 	height: '100%',
// 	content: 'You are a game.',
// 	tags: true,
// 	border: {
// 		type: 'line'
// 	},
// 	style: {
// 		fg: 'white',
// 		bg: 'magenta',
// 		border: {
// 			fg: '#f0f0f0'
// 		},
// 		hover: {
// 			bg: 'green'
// 		}
// 	}
// });

// screen.append(box);

// screen.key(['escape', 'q', 'C-c'], function(ch, key) {
//   return process.exit(0);
// });

// box.focus();

// screen.render();

// box.content = 'Hi test';
// screen.render();
// box.content = 'Lulu test';
// screen.render();
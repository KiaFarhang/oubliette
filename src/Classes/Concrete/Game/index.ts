import { Board } from '../Board';
import { BoardConfig } from '../../../Interfaces/BoardConfig';
import { KeyInput } from '../../../Interfaces/KeyInput';
import * as blessed from 'blessed';

import { loseString, beatLevelString, startScreenString, winString } from './screenstrings';

export class Game {
	private levels: BoardConfig[];
	private levelIndex: number;
	private board: Board;
	private screen: any;
	private box: any;

	constructor(levels: BoardConfig[]) {
		this.levels = levels;
		this.board = new Board(this.levels[0]);
		this.levelIndex = 0;

		this.setUpScreen();
		this.setUpLevel(this.board);
	}

	public turn(): void {
		this.board.moveAnimateObjects();
	}

	public getBoard(): Board {
		return this.board;
	}

	private setUpScreen(): void {
		this.screen = blessed.screen({
			smartCSR: true
		});

		this.screen.title = 'Oubliette';

		this.box = blessed.box({
			top: 'center',
			left: 'center',
			width: '100%',
			height: '100%',
			content: startScreenString,
			tags: true
		});

		this.screen.append(this.box);

		this.screen.key(['escape', 'q', 'C-c'], this.quitGame.bind(this));

		this.screen.key(['space', 'up', 'down', 'left', 'right'], this.runTurn.bind(this));

		this.box.focus();

		this.screen.render();
	}

	private setUpLevel(board: BoardConfig): void {
		this.box.content = this.board.draw();
	}

	private runTurn(ch, key: KeyInput): void {
		this.board.moveAnimateObjects(key);
		if (this.board.isPlayerAtDragon()) {
			this.showLoseScreen();
		} else if (this.board.isPlayerAtDoor()) {
			this.showWinScreen();
		} else {
			this.box.content = this.board.draw();
		}
		this.screen.render();
	}

	private showLoseScreen(): void {
		this.box.content = loseString;
		this.screen.unkey(['space', 'up', 'down', 'left', 'right'], this.runTurn);
	}

	private showWinScreen(): void {
		this.screen.unkey(['space', 'up', 'down', 'left', 'right'], this.runTurn);

		if (this.levelIndex === this.levels.length - 1) {
			this.box.content = winString;
		} else {
			this.box.content = beatLevelString;

			this.screen.key('space', this.moveToNextLevel.bind(this));
		}

	}

	private moveToNextLevel(): void {
		this.board = new Board(this.levels[++this.levelIndex]);

		this.screen.unkey('space', this.moveToNextLevel);
		this.screen.key(['space', 'up', 'down', 'left', 'right'], this.runTurn.bind(this));

	}

	private quitGame(): ProcessingInstruction {
		return process.exit(0);
	}
}
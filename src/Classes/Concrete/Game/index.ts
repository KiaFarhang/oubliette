import { Board } from '../Board';
import { BoardConfig } from '../../../Interfaces/BoardConfig';
import * as blessed from 'blessed';

export class Game{
	private board: Board;
	private screen: any;
	private box: any;

	constructor(config: BoardConfig){
		this.board = new Board(config);
		this.screen = blessed.screen({
			smartCSR: true
		});
		
		this.screen.title = 'Oubliette';

		this.box = blessed.box({
			top: 'center',
			left: 'center',
			width: '100%',
			height: '100%',
			content: this.board.draw(),
			tags: true
		});

		this.screen.append(this.box);

		this.screen.key(['escape', 'q', 'C-c'], this.quitGame.bind(this));

		this.screen.key(['space'], this.runTurn.bind(this));

		this.box.focus();

		this.screen.render();

	}

	public turn(): void{
		this.board.moveAnimateObjects();
	}

	public getBoard(): Board{
		return this.board;
	}

	private runTurn(): void{
		this.board.moveAnimateObjects();
		if(this.board.isPlayerAtDragon()){
			this.box.content = 'A dragon ate you';
			this.screen.unkey('space', this.runTurn);
		}else if(this.board.isPlayerAtDoor()){
			this.box.content = 'You escaped!';
			this.screen.unkey('space', this.runTurn);
		}else{
			this.box.content = this.board.draw();
		}

		this.screen.render();

	}

	private quitGame(): any{
		return process.exit(0);
	}
}
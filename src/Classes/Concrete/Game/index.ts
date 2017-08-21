import { Board } from '../Board';
import { BoardConfig } from '../../../Interfaces/BoardConfig';
import * as blessed from 'blessed';

export class Game{
	private board: Board;

	constructor(config: BoardConfig){
		this.board = new Board(config);
	}

	public turn(): void{
		this.board.moveAnimateObjects();

		const boardAsString: string = this.board.draw();
	}

	public play(): void{
		const screen = blessed.screen({
			smartCSR: true
		});

		screen.title = 'Oubliette';

		const box = blessed.box({
			top: 'center',
			left: 'center',
			width: '100%',
			height: '100%',
			content: this.board.draw(),
			tags: true
		});

		screen.append(box);

		screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  			return process.exit(0);
		});

		screen.key(['space'], (ch, key) =>{
			this.turn();
			if(this.board.isPlayerAtDragon()){
				box.content = 'A dragon ate you';
			}else if(this.board.isPlayerAtDoor()){
				box.content = 'You escaped!';
			}else{
				box.content = this.board.draw();
			}

			screen.render();
		});

		box.focus();

		screen.render();
	}

	public getBoard(): Board{
		return this.board;
	}

	private runTurn(): void{
		this.turn();
		
	}


}
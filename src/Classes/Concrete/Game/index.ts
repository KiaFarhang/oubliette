import { Board } from '../Board';
import { BoardConfig } from '../../../Interfaces/BoardConfig';

export class Game{
	private board: Board;

	constructor(config: BoardConfig){
		this.board = new Board(config);
	}

	public turn(): void{
		this.board.moveAnimateObjects();
		console.log(this.board.draw());
	}

	public getBoard(): Board{
		return this.board;
	}


}
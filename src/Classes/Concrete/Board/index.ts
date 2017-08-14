import { BoardConfig } from '../../../Interfaces/BoardConfig';
import { GameObject } from '../../Abstract/GameObject';
import { Coordinates } from '../Coordinates';
import { Door } from '../Door';
import { Space } from '../Space';
import { Player } from '../Player';
import { Dragon } from '../Dragon';

export class Board implements BoardConfig{
	rows: number;
	columns: number;
	playerStartLocation: Coordinates;
	dragonStartLocation: Coordinates;
	doorLocation: Coordinates;
	private sites: GameObject[][];
	private player: Player;
	private dragon: Dragon;

	constructor(config: BoardConfig){
		this.rows = config.rows;
		this.columns = config.columns;
		this.playerStartLocation = config.playerStartLocation;
		this.dragonStartLocation = config.dragonStartLocation;
		this.doorLocation = config.doorLocation;
		this.player = new Player(this.playerStartLocation);
		this.dragon = new Dragon(this.dragonStartLocation);

		this.constructBoard();
		this.placeObjects();
	}

	public draw(): string{
		let stringToReturn: string = '';

		for(let i: number = 0; i < this.rows; i++){
			for(let j: number = 0; j < this.columns; j++){
				const inhabitant: GameObject = this.sites[i][j];
				stringToReturn += inhabitant.getCharCode();
				if (j === this.columns - 1){
					stringToReturn += '\n';
				}
			}
		}

		return stringToReturn;
	}

	public moveAnimateObjects(): void{
		const maxRow: number = this.rows - 1;
		const maxColumn: number = this.columns - 1;
		const dragonDestination: Coordinates = this.dragon.move(maxRow, maxColumn);
		const playerDestination: Coordinates = this.player.move(maxRow, maxColumn);

		const oldDragonSpace: Coordinates = this.dragon.getLocation();
		const oldPlayerSpace: Coordinates = this.player.getLocation();

		//If dragon space matches door space, we need to re-add the door after dragon moves
		const oldDragonX: number = oldDragonSpace.getX();
		const oldDragonY: number = oldDragonSpace.getY();
		const doorX: number = this.doorLocation.getX();
		const doorY: number = this.doorLocation.getY();

		if(oldDragonX === doorX && oldDragonY === doorY){
			this.updateSite(oldDragonSpace, new Door());
		}else{
			this.updateSite(oldDragonSpace, new Space());
		}
		this.updateSite(oldPlayerSpace, new Space());
		this.updateSite(dragonDestination, this.dragon);
		this.updateSite(playerDestination, this.player);

	}

	public getPlayerLocation(): Coordinates{
		return this.player.getLocation();
	}

	public getDragonLocation(): Coordinates{
		return this.dragon.getLocation();
	}

	public isPlayerAtDragon(): boolean{
		const playerX: number = this.player.getLocation().getX();
		const playerY: number = this.player.getLocation().getY();
		const dragonX: number = this.dragon.getLocation().getX();
		const dragonY: number = this.dragon.getLocation().getY();
		return playerX === dragonX && playerY === dragonY;
	}

	public isPlayerAtDoor(): boolean{
		const playerX: number = this.player.getLocation().getX();
		const playerY: number = this.player.getLocation().getY();
		const doorX: number = this.doorLocation.getX();
		const doorY: number = this.doorLocation.getY();

		return playerX === doorX && playerY === doorY;
	}

	private constructBoard(): void{
		let array: any[] = [];

		for(let i: number = 0; i < this.rows; i++){
			array.push([]);
			for(let j: number = 0; j < this.columns; j++){
				array[i][j] = new Space();
			}
		}

		this.sites = array;
	}

	private placeObjects(): void{
		this.updateSite(this.playerStartLocation, this.player);
		this.updateSite(this.dragonStartLocation, this.dragon);
		this.updateSite(this.doorLocation, new Door());
	}

	private updateSite(site: Coordinates, newResident: GameObject): void{
		const row: number = site.getX();
		const column: number = site.getY();

		this.sites[row][column] = newResident;
	}

}


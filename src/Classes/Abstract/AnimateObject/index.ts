import { GameObject } from '../GameObject';
import { Coordinates } from '../../Concrete/Coordinates';

export abstract class AnimateObject extends GameObject{
	protected charCode: string;
	protected location: Coordinates;

	constructor(location: Coordinates){
		super();
		this.location = location;
	}

	public getLocation(): Coordinates{
		return this.location;
	}

	public abstract move(maxRow: number, maxColumn: number): Coordinates;
}
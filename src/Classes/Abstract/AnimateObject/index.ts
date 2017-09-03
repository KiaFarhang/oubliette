import { GameObject } from '../GameObject';
import { Coordinates } from '../../Concrete/Coordinates';
import { KeyInput } from '../../../Interfaces/KeyInput';

export abstract class AnimateObject extends GameObject {
	protected charCode: string;
	protected location: Coordinates;

	constructor(location: Coordinates) {
		super();
		this.location = location;
	}

	public getLocation(): Coordinates {
		return this.location;
	}

	protected setLocation(newLocation: Coordinates): void {
		this.location = newLocation;
	}

	protected isMoveLegal(maxRow: number, maxColumn: number, destination: Coordinates): boolean {
		if (destination.getX() < 0 || destination.getY() < 0) {
			return false;
		}

		return destination.getX() <= maxRow && destination.getY() <= maxColumn;
	}

	public abstract move(maxRow: number, maxColumn: number, key?: KeyInput): Coordinates;
}
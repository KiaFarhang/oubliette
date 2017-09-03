import { AnimateObject } from '../../Abstract/AnimateObject';
import { Coordinates } from '../Coordinates';

import { KeyInput } from '../../../Interfaces/KeyInput';

export class Player extends AnimateObject {

	constructor(location: Coordinates) {
		super(location);
		this.charCode = 'L';
	}

	public move(maxRow: number, maxColumn: number, key?: KeyInput): Coordinates {
		if (!key) return this.location;
		const destination = this.generateDestination(key);
		if (this.isMoveLegal(maxRow, maxColumn, destination)) {
			this.setLocation(destination);
		}
		return this.location;
	}

	private generateDestination(key: KeyInput): Coordinates {
		const { name } = key;
		const currentX = this.location.getX();
		const currentY = this.location.getY();
		switch (name) {
			case 'up':
				return new Coordinates(currentX - 1, currentY);
			case 'down':
				return new Coordinates(currentX + 1, currentY);
			case 'left':
				return new Coordinates(currentX, currentY - 1);
			case 'right':
				return new Coordinates(currentX, currentY + 1);
			default:
				return this.location;
		}
	}
}
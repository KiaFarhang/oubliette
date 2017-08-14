import { AnimateObject } from '../AnimateObject';
import { Coordinates } from '../../Concrete/Coordinates';

export abstract class RandomWalkingObject extends AnimateObject{

	constructor(location: Coordinates){
		super(location);
	}
	public move(maxRow: number, maxColumn: number): Coordinates{
		if(Math.floor(Math.random() *  2) === 0){
			return this.generateNewDestination(maxRow, maxColumn);
		}else{
			return this.location;
		}
	}

	private generateNewDestination(maxRow: number, maxColumn: number): Coordinates{
		const currentX: number = this.location.getX();
		const currentY: number = this.location.getY();

		let destinationX: number = this.addOrSubtractOne(currentX);
		let destinationY: number = this.addOrSubtractOne(currentY);

		while(destinationX > maxRow || destinationX < 0){
			destinationX = this.addOrSubtractOne(currentX);
		}

		while(destinationY > maxColumn || destinationY < 0){
			destinationY = this.addOrSubtractOne(currentY);
		}

		return new Coordinates(destinationX, destinationY);

	}

	private addOrSubtractOne(number: number): number{
		if (Math.floor(Math.random() * 2) === 0){
			return ++number;
		} else{
			return --number;
		}
	}
}
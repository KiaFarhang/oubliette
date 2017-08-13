import { RandomWalkingObject } from '../../Abstract/RandomWalkingObject';
import { Coordinates } from '../Coordinates';

export class Player extends RandomWalkingObject{

	constructor(location: Coordinates){
		super(location);
		this.charCode = 'L';
	}
}
import { RandomWalkingObject } from '../../Abstract/RandomWalkingObject';
import { Coordinates } from '../Coordinates';

export class Dragon extends RandomWalkingObject{

	constructor(location: Coordinates){
		super(location);
		this.charCode = 'S';
	}
}
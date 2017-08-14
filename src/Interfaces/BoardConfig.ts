import { Coordinates } from '../Classes/Concrete/Coordinates';

export interface BoardConfig{
	rows: number;
	columns: number;
	playerStartLocation: Coordinates;
	dragonStartLocation: Coordinates;
	doorLocation: Coordinates;
}
export class Coordinates{
	private x: number;
	private y: number;

	constructor(x: number, y: number){
		this.x = x;
		this.y = y;
	}

	public getX(): number{
		return this.x;
	}

	public getY(): number{
		return this.y;
	}

	public static equal(a: Coordinates, b: Coordinates): boolean{
		return a.getX() === b.getX() && a.getY() === b.getY();
	}

}
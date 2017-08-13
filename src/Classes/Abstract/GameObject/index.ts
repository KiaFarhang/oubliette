import { GameObjectInterface } from '../../../Interfaces/GameObject';

export abstract class GameObject implements GameObjectInterface{
	protected charCode: string;

	public getCharCode(): string{
		return this.charCode;
	}
}
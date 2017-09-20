import { BoardConfig } from './Interfaces/BoardConfig';
import { Coordinates } from './Classes/Concrete/Coordinates';

export const levels: BoardConfig[] = [
    {
        rows: 8,
        columns: 8,
        playerStartLocation: new Coordinates(0, 0),
        dragonStartLocation: new Coordinates(4, 4),
        doorLocation: new Coordinates(7, 7)
    },
    {
        rows: 15,
        columns: 15,
        playerStartLocation: new Coordinates(12, 12),
        dragonStartLocation: new Coordinates(8, 8),
        doorLocation: new Coordinates(7, 7)
    }
];
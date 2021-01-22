export enum Type {
    Barycenter,
    Star,
    Planet,
    Moon,
    Asteroid
}
export default class CelestialBody {
    constructor(
        public name: string,
        public type: Type,
        public mass: number,
        public radius: number
    ) {

    }
}

interface ICelestialBody {
    getName(): string;
    getType(): Type;
    getMass(): number;
    getRadius(): number;
}
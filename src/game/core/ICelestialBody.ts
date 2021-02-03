import PhysicalState from "./PhysicalState";

export enum Type {
    Barycenter,
    Star,
    Planet,
    Moon,
    Asteroid
}

export default interface ICelestialBody {
    getName(): string;
    getType(): Type;
    getMass(): number;
    getRadius(): number;
    getGravityAtAltitude(altitude: number): number
    getPhysicalState(): PhysicalState;
}
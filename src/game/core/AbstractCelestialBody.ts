import ICelestialBody, { Type } from "./ICelestialBody";
import PhysicalState from "./PhysicalState";

export default abstract class AbstractCelestialBody implements ICelestialBody {
    constructor(
        private name: string,
        private type: Type,
        private mass: number,
        private physicalState: PhysicalState
    ) { }

    public getName(): string {
        return this.name;
    }

    public getType(): Type {
        return this.type;
    }

    public getMass(): number {
        return this.mass;
    }

    public getPhysicalState(): PhysicalState {
        return this.physicalState;
    }

    public getGravityAtAltitude(altitude: number): number {
        const G = 0.0000000000667;
        const distance = altitude + this.getRadius();
        return G * this.getMass() / (distance * distance);
    }

    public abstract getRadius(): number;
}
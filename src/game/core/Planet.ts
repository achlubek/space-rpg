import AbstractCelestialBody from "./AbstractCelestialBody";
import ICelestialBody, { Type } from "./ICelestialBody";
import PhysicalState from "./PhysicalState";

export default class Planet extends AbstractCelestialBody implements ICelestialBody {
    constructor(
        name: string,
        mass: number,
        physicalState: PhysicalState,
        private radius: number
    ) {
        super(name, Type.Planet, mass, physicalState);
    }

    public getRadius(): number {
        return this.radius;
    }
}
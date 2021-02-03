import PhysicalState from "./PhysicalState";
import Vector3d from "../math/Vector3d";

export default class CelestialBody {
    constructor(
        public name: string,
        public type: Type,
        public mass: number,
        public radius: number
    ) {

    }
}



/**
 * AbstractCelestialBody:
 *  name
 *  mass
 *  radius
 *  get gravity calculations
 *
 * Star will extend and have additional:
 *  color
 *
 * CelestialBody will also extend and have additional:
 *  parentBody
 *  orbitalRadius
 *
 */
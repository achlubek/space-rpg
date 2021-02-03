import ICelestialBody from "./ICelestialBody";

export enum LocationType {
    Landed,
    Orbit
}
export default class Location {
    /*
    Types of locations:
    Landed on celestial body
        with the body id, lat, long, elevation
    In orbit around celestial body
        with the body id, periapsis, apoapsis and inclination
     */
    constructor(
        public type: LocationType,
        public body: ICelestialBody
    ) { }
}
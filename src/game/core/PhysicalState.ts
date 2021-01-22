import Vector3d from "./Vector3d";

export default class PhysicalState {
    constructor(
        public position: Vector3d,
        public velocity: Vector3d
    ) { }

    public step(time: number) {
        const positionChange = this.velocity.copy();
        positionChange.mulf(time);
        this.position.addv3(positionChange);
    }

    public getRelativeTo(ps: PhysicalState) {
        const newPosition = this.position.copy();
        const newVelocity = this.velocity.copy();
        newPosition.subv3(ps.position);
        newVelocity.subv3(ps.velocity);
        return new PhysicalState(newPosition, newVelocity);
    }
}
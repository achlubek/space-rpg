export default class Vector3d {
    constructor(
        public x: number,
        public y: number,
        public z: number
    ) { }

    public addv3(v: Vector3d) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }

    public subv3(v: Vector3d) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }

    public mulv3(v: Vector3d) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
    }

    public divv3(v: Vector3d) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
    }

    public addf(v: number) {
        this.x += v;
        this.y += v;
        this.z += v;
    }

    public subf(v: number) {
        this.x -= v;
        this.y -= v;
        this.z -= v;
    }

    public mulf(v: number) {
        this.x *= v;
        this.y *= v;
        this.z *= v;
    }

    public divf(v: number) {
        this.x /= v;
        this.y /= v;
        this.z /= v;
    }

    public negate() {
        this.mulf(-1);
    }

    public copy(): Vector3d {
        return new Vector3d(this.x, this.y, this.z);
    }

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public distance(v: Vector3d): number {
        const copy = v.copy();
        v.subv3(this);
        return v.length();
    }

    public normalize() {
        this.divf(this.length());
    }

    public normalized() {
        const copy = this.copy();
        copy.divf(this.length());
        return copy;
    }

    public toString(): string {
        return `[x: ${this.x}, y: ${this.y}, z: ${this.z}]`;
    }
}
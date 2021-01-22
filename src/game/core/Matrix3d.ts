import Vector3d from "./Vector3d";

export default class Matrix3d {
    constructor(
        private data: number[]
    ) {
        if (data.length != 3 * 3) {
            throw "Matrix components count is not equal to 9";
        }
    }

    public transform(v: Vector3d): Vector3d {
        return new Vector3d(
            v.x * this.data[0] + v.y * this.data[3] + v.z * this.data[6],
            v.x * this.data[1] + v.y * this.data[4] + v.z * this.data[7],
            v.x * this.data[2] + v.y * this.data[5] + v.z * this.data[8]
        );
    }

    public transposed(): Matrix3d {
        return new Matrix3d([
            this.data[0], this.data[3], this.data[6],
            this.data[1], this.data[4], this.data[7],
            this.data[2], this.data[5], this.data[8]
        ]);
    }

    public static rotationMatrix(axis: Vector3d, angle: number): Matrix3d {
        axis.normalize();
        const s: number = Math.sin(angle);
        const c: number = Math.cos(angle);
        const oc: number = 1.0 - c;

        return new Matrix3d([
            oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s,
            oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s,
            oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c
        ]).transposed();
    }
}
import Matrix3d from "./game/core/Matrix3d";
import Vector3d from "./game/core/Vector3d";

const vector = new Vector3d(1, 0, 0);
const axis = new Vector3d(0, 0, 1);
const rotation = Matrix3d.rotationMatrix(axis, 1.57079633 * 2);

console.log(vector);
const newvector = rotation.transform(vector);
console.log(newvector);

console.log(new Vector3d(1, 0, 0).distance(new Vector3d(-1, 0, 0)));
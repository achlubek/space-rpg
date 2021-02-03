import { Type } from "./game/core/ICelestialBody";
import PhysicalState from "./game/core/PhysicalState";
import Planet from "./game/core/Planet";
import Matrix3d from "./game/math/Matrix3d";
import Vector3d from "./game/math/Vector3d";

const vector = new Vector3d(1, 0, 0);
const axis = new Vector3d(0, 0, 1);
const rotation = Matrix3d.rotationMatrix(axis, 1.57079633 * 2);

console.log(vector);
const newvector = rotation.transform(vector);
console.log(newvector);

console.log(new Vector3d(1, 0, 0).distance(new Vector3d(-1, 0, 0)));

const earthPS = new PhysicalState(new Vector3d(0, 0, 0), new Vector3d(0, 0, 0));
const earth = new Planet("Earth", 5970000000000000000000000, earthPS, 6371000);

const gravityAccelerationAtSurface = earth.getGravityAtAltitude(0);
console.log(gravityAccelerationAtSurface);
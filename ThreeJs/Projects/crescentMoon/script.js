import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera,renderer.domElement)
controls.enableDamping =true;
controls.dampingFactor=0.03

// Define control points
const startPoint = new THREE.Vector3(-2, 0, 0);
const endPoint = new THREE.Vector3(2, 0, 0);
const controlPoint1 = new THREE.Vector3(-1, 1, 0); // Control point 1
const controlPoint2 = new THREE.Vector3(1, 1, 0); // Control point 2
const controlPoint3 = new THREE.Vector3(-1, 1.2, 0); // Control point 1
const controlPoint4 = new THREE.Vector3(1, 1.2, 0); // 

// Create Bezier curve
const curve1 = new THREE.CubicBezierCurve3(
    startPoint,
    controlPoint1,
    controlPoint2,
    endPoint
);
const curve2 = new THREE.CubicBezierCurve3(
    startPoint,
    controlPoint3,
    controlPoint4,
    endPoint
);

const points1 = curve1.getPoints(100);
const points2 = curve2.getPoints(100);

const allPoints = [...points1, ...points2]
const bufferGeom = new THREE.BufferGeometry().setFromPoints(allPoints)
bufferGeom.computeVertexNormals()
bufferGeom.computeBoundingBox()
bufferGeom.computeBoundingSphere()

console.log(bufferGeom);

// Create tube geometry
const tubeGeometry1 = new THREE.TubeGeometry(curve1, 50, 0.075, 20, false);
console.log(tubeGeometry1);
const tubeGeometry2 = new THREE.TubeGeometry(curve2, 50, 0.075, 20, false);

// Create material
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

// Create the tube mesh
const tubeMesh1 = new THREE.Mesh(tubeGeometry1, material);
const tubeMesh2 = new THREE.Mesh(tubeGeometry2, material);

// Add tube mesh to the scene
scene.add(tubeMesh1, tubeMesh2);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update()
}
animate();
import * as THREE from "three";
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  160,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Set camera position
camera.position.z = 5;
////////////////////////////////////////////////////////////
let material = new THREE.LineBasicMaterial({ color: 0x0000ff });

// First line
const points1 = [];
points1.push(new THREE.Vector3(-10, 0, 0));
points1.push(new THREE.Vector3(0, 10, 0));
points1.push(new THREE.Vector3(10, 0, 0));

const geometry1 = new THREE.BufferGeometry().setFromPoints(points1);

const line1 = new THREE.Line(geometry1, material);
scene.add(line1);

// // Second line
// const points2 = [];
// points2.push(new THREE.Vector3(-10, 0, -10));
// points2.push(new THREE.Vector3(0, 10, -10));
// points2.push(new THREE.Vector3(10, 0, -10));

// const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);

// const line2 = new THREE.Line(geometry2, material);
// scene.add(line2);

//third line
const points3 = [];
points3.push(new THREE.Vector3(0, 10, -10));
points3.push(new THREE.Vector3(10, 0, -10));
points3.push(new THREE.Vector3(10, 10, 0));

const geometry3 = new THREE.BufferGeometry().setFromPoints(points3);

const line3 = new THREE.Line(geometry3, material);
scene.add(line3);

////////////////////////////////////////////////////////////
// Animation function
var animate = function () {
  requestAnimationFrame(animate);
  // Render the scene
  renderer.render(scene, camera);
};

// Start the animation
animate();

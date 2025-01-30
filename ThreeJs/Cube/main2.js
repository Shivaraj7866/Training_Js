import * as THREE from "three";
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  60,
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
let textureImage = new THREE.TextureLoader();
scene.background = textureImage.load("deer-8164879_1280.webp");

//create plane
let planeGeometry = new THREE.PlaneGeometry(3, 3,1,2);
let planeMaterial = new THREE.MeshBasicMaterial({
  map: textureImage.load("tree.jpg"),
  side: THREE.DoubleSide,
});
let plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 6;
plane.position.y = -2;
scene.add(plane);

//create cube

let cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    // color:0x00ffff,
    map: textureImage.load("flowers-8309995_1280.webp"),
  })
);
scene.add(cube);

////////////////////////////////////////////////////////////
// Animation function
var animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

// Start the animation
animate();

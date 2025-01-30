import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / -2,
  1,
  1000
);
camera.position.z = 100;

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create 2D object
const geometry = new THREE.BoxGeometry(10, 10, 5);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Handle mouse movement
const mouse = new THREE.Vector2();
document.addEventListener('mousemove', (event) => {
  // Normalize mouse coordinates to the range [-1, 1]
  mouse.x = (event.clientX / window.innerWidth)*2 -1
  mouse.y = -(event.clientY / window.innerHeight)*2+1
  console.log(mouse.x)

  // Move the cube based on mouse coordinates
  cube.position.x = mouse.x * (window.innerWidth / 2);
  cube.position.y = mouse.y * (window.innerHeight / 2);
});

// Create animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

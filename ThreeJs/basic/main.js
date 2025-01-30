import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
// import bubbles from 'Images\soap-bubbles-8253276_1280.webp'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.5,
  500
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-10, 30, 40);
orbit.update();
////////////////////////////////////////////

//sphere

let sphereGeometry = new THREE.SphereGeometry(15, 30, 30);
let sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
});

const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.set(-5, 0, 0);

//   renderer.setClearColor(0xffffff)
  let imgLoader=new THREE.TextureLoader()
  scene.background=imgLoader.load("deer-8164879_1280.webp")
  

let gui = new dat.GUI();

let options = {
  sphereColor: "#ff00ff",
  wireframe: false,
  speed: 0.01,
  intensity:250,
  angle:150,
  penumbra:0,
  distance:100
};

gui.addColor(options, "sphereColor").onChange((e) => {
        console.error("kumsu")
  sphere.material.color.set(e);
});

gui.add(options, "wireframe").onChange((e) => {
  sphere.material.wireframe = e;
});

//3rd argument is minimum and 4th argument is maximum
gui.add(options, "speed", 0, 0.1); 
gui.add(options, "angle", Math.PI*0.01, Math.PI*0.1); 
gui.add(options, "intensity", 150, 300); 
gui.add(options, "distance", 0, 200); 
gui.add(options, "penumbra", 0, 1); 

//////////////////////////////////////////////////////

let step = 0;

function animate() {
  requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   sphere.position.y = 15 * Math.abs(Math.sin(step));

  renderer.render(scene, camera);
}

animate();

import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import GUI from 'lil-gui';

const gui = new GUI()
let scene=new THREE.Scene()

let camera=new THREE.PerspectiveCamera(
    55,
    window.innerWidth/window.innerHeight,
    1,
    30000
    )

let renderer=new THREE.WebGLRenderer({antialias:true})
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.minDistance=50;
orbit.maxDistance=2500;
camera.position.set(0,0,140); 
// orbit.update()
const textureLoader = new THREE.TextureLoader()
const geoMetry=new THREE.BoxGeometry(10000,10000,10000)

const textures = [
  './Standard-Cube-Map/px.png',
  './Standard-Cube-Map/nx.png',
  './Standard-Cube-Map/py.png',
  './Standard-Cube-Map/ny.png',
  './Standard-Cube-Map/pz.png',
  './Standard-Cube-Map/nz.png'
];

const CubeTextureLoader = new THREE.CubeTextureLoader();

CubeTextureLoader.load(textures, (bg) => {
  // Log to check if the background is successfully loaded
  console.log('Background loaded:', bg);
  // bg.mapping = THREE.EquirectangularReflectionMapping
  // Assuming `scene` is defined elsewhere in your code
  scene.background = bg;
  // scene.background.mapping = THREE.EquirectangularReflectionMapping
  scene.environment = bg;
  // scene.environment.mapping = THREE.EquirectangularReflectionMapping
}, undefined, (error) => {
  // Log any errors that might occur during loading
  console.error('Error loading textures:', error);
});

const materials=[
    
        new THREE.MeshStandardMaterial({map:textureLoader.load('./basic/Standard-Cube-Map/px.png'),side:THREE.DoubleSide,emissive:0.8}),
        new THREE.MeshStandardMaterial({map:textureLoader.load('./basic/Standard-Cube-Map/nx.png'),side:THREE.DoubleSide,emissive:0.8}),
        new THREE.MeshStandardMaterial({map:textureLoader.load('./basic/Standard-Cube-Map/py.png'),side:THREE.DoubleSide,emissive:0.8}),
        new THREE.MeshStandardMaterial({map:textureLoader.load('./basic/Standard-Cube-Map/ny.png'),side:THREE.DoubleSide,emissive:0.8}),
        new THREE.MeshStandardMaterial({map:textureLoader.load('./basic/Standard-Cube-Map/pz.png'),side:THREE.DoubleSide,emissive:0.8}),
        new THREE.MeshStandardMaterial({map:textureLoader.load('./basic/Standard-Cube-Map/nz.png'),side:THREE.DoubleSide,emissive:0.8}),
    
]
// scene.add(new THREE.Mesh(geoMetry,materials))

const ambientLight=new THREE.AmbientLight(0xFFFFFF,6)
scene.add(ambientLight)
gui.add(ambientLight,'intensity').min(6).max(10).step(0.001).name('LightIntensity')

const DirectionalLight=new THREE.DirectionalLight(0xffffff,5)
DirectionalLight.position.set(0,40,0)
scene.add(DirectionalLight);

const DirectionalLight2=new THREE.DirectionalLight(0xffffff,6)
DirectionalLight2.position.set(0,-30,-10)
gui.add(DirectionalLight2,'intensity').min(6).max(10).step(0.001).name('LightIntensity')
scene.add(DirectionalLight2);

// let planeGeoMetry=new THREE.PlaneGeometry(100,100)
// let planeMaterial=new THREE.MeshStandardMaterial({color:0xffffff,side:THREE.DoubleSide})
// let plane=new THREE.Mesh(planeGeoMetry,planeMaterial)
// plane.rotation.x=-Math.PI/3
// // plane.position.y=-7
// plane.receiveShadow=true;
// scene.add(plane)

// Load GLTF model
const loader = new GLTFLoader();
loader.load('helmet (2).gltf', (gltf) => {
  const model = gltf.scene;
  console.log(model);
  // model.environment.mapping = THREE.EquirectangularReflectionMapping
  gui.add(scene, 'backgroundIntensity').min(5).max(10).step(0.001).name('Background Intensity')
  gui.add(model.children[0].material,'metalness').min(0).max(10).step(0.001)
  gui.add(model.children[0].material,'opacity').min(0).max(10).step(0.001)
  // model.scale.set(0.1,0.1,0.1)
  scene.add(model);
  scene.traverse((child)=>{
    if(child instanceof THREE.Mesh)
    {
      if(child.name === 'Mesh003_1')
      {
        // child.material = new THREE.MeshStandardMaterial({color:0xfff})
        child.material.opacity = 0.05
        child.material.transparent = true
      }
    }
  })
  model.castShadow=true;
});

window.addEventListener('resize',()=>{

  window.innerWidth
  window.innerHeight

  camera.aspect=window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth,window.innerHeight)
  renderer.setPixelRatio(Math.min(devicePixelRatio,2))
})

function animate(){
    requestAnimationFrame(animate)
    orbit.update()

    //  // Rotate the model (optional)
    //  if (scene.children.length > 0) {
    //     const model = scene.children[0];
    //     // model.rotation.x += 0.01;
    //     // model.rotation.y += 0.01;
    //   }

    renderer.render(scene,camera)
}

   // Handle window resize
   window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
  });

animate()


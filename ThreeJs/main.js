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

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-10, 30, 40);
orbit.update();
////////////////////////////////////////////

//create a cube

let geometry = new THREE.BoxGeometry(2, 2, 2);
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//create plane

let planeGeometry = new THREE.PlaneGeometry(40, 40,20,10);
let planeMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  side:THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane);
plane.rotation.x = 1.5 * Math.PI;

let GridHelper = new THREE.GridHelper(40, 10);
scene.add(GridHelper);

//sphere

let sphereGeometry = new THREE.SphereGeometry(3, 30, 30);
let sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
  wireframe: false,
});

// let sphereWireFrameGeometry=new THREE.WireframeGeometry(sphereGeometry);
// let wireFrameMaterial=new THREE.LineBasicMaterial({color: 0x00ff00})
// let sphereWireframe=new THREE.LineSegments(sphereWireFrameGeometry,wireFrameMaterial)
// scene.add(sphereWireframe);
// sphereWireframe.position.set(0,0,-10)

const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.castShadow = true;
scene.add(sphere);
sphere.position.set(-5, 0, 0);

//lighting

    //AmbientLightning
          // let ambient=new THREE.AmbientLight(0x666666)
          // scene.add(ambient)

    //DirectionalLightning
            // const directionalLight = new THREE.DirectionalLight(0x00ff00, 1);
            // directionalLight.position.set(-20, 20, 0);
            // directionalLight.castShadow = true;
            // directionalLight.shadow.camera.near = 0.5;
            // directionalLight.shadow.camera.far = 500;
            // directionalLight.shadow.camera.left = -50;
            // directionalLight.shadow.camera.right = 50;
            // directionalLight.shadow.camera.top = 50;
            // directionalLight.shadow.camera.bottom = -50;
            // scene.add(directionalLight);

            // let DlightHelper = new THREE.DirectionalLightHelper(
            //   directionalLight,
            //   4,
            //   0xff0000
            // );
            // scene.add(DlightHelper);

    //SpotLight()

            const spotLight=new THREE.SpotLight(0xFFFFFF,200,90,200,0,1.2);
            spotLight.castShadow=true
            scene.add(spotLight);
            spotLight.position.set(-20,60,15)

            const SlightHelper=new THREE.SpotLightHelper(spotLight,0xff0f0f);
            scene.add(SlightHelper)

            // scene.fog=new THREE.Fog(0xffffff,20,100)
            // scene.fog=new THREE.FogExp2(0xffffff,0.01)

//background and Images

  renderer.setClearColor(0xf5ffef)
  let imgLoader=new THREE.TextureLoader()
  scene.background=imgLoader.load("Images/soap-bubbles-8253276_1280.webp")
  

// let sphereGeometry2=new THREE.SphereGeometry(5,30,30);
// let sphereMaterial2=new THREE.MeshBasicMaterial({color: 0xff00ff,wireframe:true});
// let sphere2=new THREE.Mesh(sphereGeometry2,sphereMaterial2);
// scene.add(sphere2);
// sphere2.position.set(15,0,15);

// let sphereGeometry3=new THREE.SphereGeometry(5,30,30);
// let sphereMaterial3=new THREE.MeshBasicMaterial({color: 0x00f0f0,wireframe:true});
// let sphere3=new THREE.Mesh(sphereGeometry3,sphereMaterial3);
// scene.add(sphere3);
// sphere3.position.set(15,0,-15);

// let sphereGeometry4=new THREE.SphereGeometry(5,30,30);
// let sphereMaterial4=new THREE.MeshBasicMaterial({color: 0xf0f0f0,wireframe:true});
// let sphere4=new THREE.Mesh(sphereGeometry4,sphereMaterial4);
// scene.add(sphere4);
// sphere4.position.set(-15,0,-15);

// let sphereGeometry5=new THREE.SphereGeometry(5,30,30);
// let sphereMaterial5=new THREE.MeshBasicMaterial({color: 0x0000ff,wireframe:true});
// let sphere5=new THREE.Mesh(sphereGeometry5,sphereMaterial5);
// scene.add(sphere5);
// sphere5.position.set(0,0,0);

let gui = new dat.GUI();

let options = {
  sphereColor: "#ffae00",
  wireframe: false,
  speed: 0.01,
  intensity:250,
  angle:150,
  penumbra:0,
  distance:100
};

gui.addColor(options, "sphereColor").onChange((e) => {
  sphere.material.color.set(e);
  // sphere2.material.color.set(e);
  // sphere3.material.color.set(e);
  // sphere4.material.color.set(e);
});

gui.add(options, "wireframe").onChange((e) => {
  sphere.material.wireframe = e;
  // sphere2.material.wireframe=e;
  // sphere3.material.wireframe=e;
  // sphere4.material.wireframe=e;
});

gui.add(options, "speed", 0, 0.1); //3rd argument is minimum and 4th argument is maximum
gui.add(options, "angle", Math.PI*0.01, Math.PI*0.1); //3rd argument is minimum and 4th argument is maximum
gui.add(options, "intensity", 150, 300); //3rd argument is minimum and 4th argument is maximum
gui.add(options, "distance", 0, 200); //3rd argument is minimum and 4th argument is maximum
gui.add(options, "penumbra", 0, 1); //3rd argument is minimum and 4th argument is maximum

//////////////////////////////////////////////////////

let step = 0;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  step += options.speed;
  spotLight.angle=options.angle;
  spotLight.distance=options.distance;
  spotLight.intensity=options.intensity;
  spotLight.penumbra=options.penumbra
  SlightHelper.update()

  // sphere2.position.y=4*Math.abs(Math.sin(step))
  // sphere3.position.y=2*Math.abs(Math.sin(step))
  // sphere4.position.y=7*Math.abs(Math.sin(step))
  sphere.position.y = 15 * Math.abs(Math.sin(step));
  cube.position.y=15*Math.abs(Math.cos(step))

  renderer.render(scene, camera);
}

animate();

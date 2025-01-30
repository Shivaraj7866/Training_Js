import "/style.css"
import * as THREE from "three"
import GUI from "lil-gui"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const canvas = document.querySelector("canvas.webgl")
// let LeftButton = document.getElementsByClassName("btnleft")
// let RightButton = document.querySelector(".btnright")

// console.log(LeftButton)

// function sample(){
//     console.log("first")
// }

// LeftButton.onclick=sample


let gui = new GUI({ width: 300 });


let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
camera.position.set(0, 0, 2)
camera.rotation.y=Math.PI*0.25
scene.add(camera)

let controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;
controls.enableRotate = false
controls.enableZoom = false
controls.enablePan = false

let renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)

// Create textures
const textureLoader = new THREE.TextureLoader();
const textureSide1 = textureLoader.load("./Images/beach.webp");
const textureSide2 = textureLoader.load("./Images/butterfly.webp");
const textureSide3 = textureLoader.load("./Images/deer.webp");
const textureSide4 = textureLoader.load("./Images/flowers.webp");
const textureSide5 = textureLoader.load("./Images/road.webp");
const textureSide6 = textureLoader.load("./Images/beach.webp");
// Add more textures as needed

// Create sprite materials
const materialSide1 = new THREE.MeshBasicMaterial({ map: textureSide1, color: 0xffffff });
const materialSide2 = new THREE.MeshBasicMaterial({ map: textureSide2, color: 0xffffff });
const materialSide3 = new THREE.MeshBasicMaterial({ map: textureSide3, color: 0xffffff });
const materialSide4 = new THREE.MeshBasicMaterial({ map: textureSide4, color: 0xffffff });
const materialSide5 = new THREE.MeshBasicMaterial({ map: textureSide5, color: 0xffffff });
const materialSide6 = new THREE.MeshBasicMaterial({ map: textureSide6, color: 0xffffff });
// Add more sprite materials as needed

// // Create sprites
// const spriteSide1 = new THREE.Sprite(materialSide1);
// spriteSide1.position.set(0, 0, 0);
// spriteSide1.scale.set(4, );
// scene.add(spriteSide1);

// const spriteSide2 = new THREE.Sprite(materialSide2);
// spriteSide2.position.set(0, 0, 0);
// // spriteSide2.rotation.y = Math.PI / 2;
// spriteSide2.scale.set(4, 4);
// scene.add(spriteSide2);

// const spriteSide3 = new THREE.Sprite(materialSide3);
// spriteSide3.position.set(0, 0, 0);
// // spriteSide3.rotation.y = Math.PI;
// spriteSide3.scale.set(4, 4);
// scene.add(spriteSide3);

// const spriteSide4 = new THREE.Sprite(materialSide4);
// spriteSide4.position.set(0, 0, 0);
// // spriteSide4.rotation.y = -Math.PI / 2;
// spriteSide4.scale.set(4, 4);
// scene.add(spriteSide4);

// const spriteSide5 = new THREE.Sprite(materialSide5);
// spriteSide5.position.set(0, 0, 0);
// // spriteSide5.rotation.y = -Math.PI / 2;
// spriteSide5.scale.set(4, 4);
// scene.add(spriteSide5);

// const spriteSide6 = new THREE.Sprite(materialSide6);
// spriteSide6.position.set(0, 0, 0);
// // spriteSide6.rotation.y = -Math.PI / 2;
// spriteSide6.scale.set(4, 4);
// scene.add(spriteSide6);

let cylinderGeometry = new THREE.CylinderGeometry(10, 10, 10, 6, 6, true)
let cylinderMaterial = new THREE.MeshBasicMaterial({ map: textureSide1, transparent: true, alphaTest: 0.1, side: THREE.DoubleSide })
let cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
cylinder.rotation.y = Math.PI * 0.5
// scene.add(cylinder)

let mesh1=new THREE.Mesh(
    new THREE.PlaneGeometry(5,5),
    new THREE.MeshBasicMaterial({map:textureSide1,side:THREE.DoubleSide})
)
mesh1.position.set(0,0,5)

let mesh2=new THREE.Mesh(
    new THREE.PlaneGeometry(5,5),
    new THREE.MeshBasicMaterial({map:textureSide2,side:THREE.DoubleSide})
)
mesh2.position.set(0,0,-5)

let mesh3=new THREE.Mesh(
    new THREE.PlaneGeometry(5,5),
    new THREE.MeshBasicMaterial({map:textureSide3,side:THREE.DoubleSide})
)
mesh3.rotation.y=Math.PI/3
mesh3.position.set(-5,0,-2.5)

let mesh5=new THREE.Mesh(
    new THREE.PlaneGeometry(5,5),
    new THREE.MeshBasicMaterial({map:textureSide5,side:THREE.DoubleSide})
)
mesh5.rotation.y=Math.PI/3
mesh5.position.set(5,0,2.5)

let mesh4=new THREE.Mesh(
    new THREE.PlaneGeometry(5,5),
    new THREE.MeshBasicMaterial({map:textureSide4,side:THREE.DoubleSide})
)
mesh4.rotation.y=-Math.PI/3
mesh4.position.set(5,0,-2.5)


let mesh6=new THREE.Mesh(
    new THREE.PlaneGeometry(5,5),
    new THREE.MeshBasicMaterial({map:textureSide6,side:THREE.DoubleSide})
)
mesh6.rotation.y=-Math.PI/3
mesh6.position.set(-5,0,2.5)

scene.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6)

window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.render(scene, camera)
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
})

let clock = new THREE.Clock()

function animate() {

    let elapsedTime = clock.getElapsedTime()


    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(() => animate())
}
animate()



import * as THREE from "three"
import GUI from "lil-gui"
// import { gsap } from "gsap/gsap-core"
import { gsap } from "gsap"
import "./style.css"

const canvas = document.querySelector("canvas.webgl")

const scene = new THREE.Scene()

let sizes = {
    x: window.innerWidth,
    y: window.innerHeight
}

let cameraGroup = new THREE.Group()
scene.add(cameraGroup)
const camera = new THREE.PerspectiveCamera(55, sizes.x / sizes.y, 0.1, 1000)
camera.position.set(0, 0, 5)
cameraGroup.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.x, sizes.y)

/**
 * Material
 */
let material = new THREE.MeshToonMaterial(
    {
        color: 0xff6347,
        side: THREE.DoubleSide
    }
)

/**
 * meshes
 */
let meshXDistance = sizes.x;
let meshYDistance = sizes.y;

let mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material
)
let mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)
let mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.3, 100, 16),
    material
)
let mesh4 = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 0.3),
    material
)
let mesh5 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    material
)
let mesh6 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.7, 0.7, 2, 5, 10),
    material
)

mesh1.position.x = meshXDistance * 0.5
mesh2.position.x = meshXDistance * 1
mesh3.position.x = meshXDistance * 2
mesh4.position.x = meshXDistance * 3
mesh5.position.x = meshXDistance * 4
mesh6.position.x = meshXDistance * 5

// mesh1.position.y = -1
// mesh2.position.y = -1
// mesh3.position.y = -1
// mesh4.position.y = -1
// mesh5.position.y = -1
// mesh6.position.y = -1

scene.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6)

let meshes = [mesh1, mesh2, mesh3, mesh4, mesh5, mesh6]

let dLight = new THREE.DirectionalLight(0xffffff, 1.5)
dLight.position.set(-1, 1, 1)
scene.add(dLight)

// scene.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6)
// let scrollX = window.scrollX
let scrollY = window.scrollY
let currentSection = 0;

// Create a container div around the canvas with overflow: auto
const container = document.createElement("div");
console.log(container)
container.style.overflow = "auto";
// Replace canvas with container in the parent node
canvas.parentNode.replaceChild(container, canvas);
container.appendChild(canvas);
console.log(container)

// Add a scroll event listener to the container
container.addEventListener("scroll", (e) => {
    console.log(e.target)
    // Get the vertical scroll position of the container
    let scrollY = container.scrollTop;
    console.log(scrollY)

    // Calculate the horizontal offset based on the vertical scroll position
    let horizontalOffset = (scrollY / sizes.y) * meshXDistance;

    // Update the position of each mesh horizontally
    for (let i = 0; i < meshes.length; i++) {
        meshes[i].position.x = meshXDistance * (i + 0.5) - horizontalOffset;
    }
});;

container.addEventListener('mouseenter', (e) => {
    console.log("entered: ", window.scrollY, e);
})
// let section = {}
// section.x = 0
// section.y = 0

// window.addEventListener("mousemove", (e) => {
//     section.x = e.clientX / sizes.x - 0.5 * 5
//     section.y = e.clientY / sizes.y - 0.5 * 5
//     // console.log(section.x)
// })

window.addEventListener("resize", () => {

    //update sizes
    sizes.x = window.innerWidth
    sizes.y = window.innerHeight

    //update camera
    camera.aspect = sizes.x / sizes.y
    camera.updateProjectionMatrix()

    //update renderer
    renderer.setSize(sizes.x, sizes.y)
    renderer.render(scene, camera)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

let clock = new THREE.Clock()
let previousTime = 0;

function animate() {

    let elapsedTime = clock.getElapsedTime()
    let deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    // console.log(deltaTime)

    //update camera position a
    camera.position.x = scrollY / sizes.x * meshXDistance
    console.log(camera.position.x)
    // camera.position.x = mesh1.position.x

    // for (let i = 0 ; i< meshes.length ; i++) {
    //     camera.position.x=(scrollY/meshes[i].position.x) * sizes.x
    // }

    //Animate meshes
    for (let mesh of meshes) {
        mesh.rotation.x = elapsedTime * 0.2
        mesh.rotation.y = elapsedTime * 0.12
    }

    renderer.render(scene, camera)
    window.requestAnimationFrame(() => animate())
}

animate()
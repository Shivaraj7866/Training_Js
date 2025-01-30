import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'

let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(120,window.innerWidth/window.innerHeight,0.1,600)

let renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)
let orbit=new OrbitControls(camera,renderer.domElement)

camera.position.set(0,0,5);
orbit.update()

/////////////////////////////////////////////////////////

//cube

let geometry=new THREE.BoxGeometry(2,2,2);
let material=new THREE.MeshBasicMaterial({color: 0xff0000,wireframe:false});
let cube=new THREE.Mesh(geometry,material);
scene.add(cube);

//plane

let planeGeometry=new THREE.PlaneGeometry(10,10);
let planeMaterial=new THREE.MeshBasicMaterial({color: 0x00f0ff,side:THREE.DoubleSide});
let plane=new THREE.Mesh(planeGeometry,planeMaterial);
scene.add(plane)
plane.rotation.x=-0.5*Math.PI

let GridHelper=new THREE.GridHelper(10,20)
scene.add(GridHelper)

//sphere

let sphereGeometry=new THREE.SphereGeometry(3);
let sphereMaterial=new THREE.MeshBasicMaterial({color: 0x0ffff00,wireframe:true})
let sphere=new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphere);

let gui=new dat.GUI();

let options={
    sphereColor: "#ffae00",
    wireframe:true,
    speed:0.01

}

gui.addColor(options,"sphereColor").onChange(e =>{
    cube.material.color.set(e)
    sphere.material.color.set(e)
})

gui.add(options,"wireframe").onChange(e =>{
    cube.material.wireframe=e
    sphere.material.wireframe=e
})

gui.add(options,"speed",0,0.1)


/////////////////////////////////////////////////////////
let start=0
function animate(){
    requestAnimationFrame(animate)

    cube.rotation.x+=0.01;
    cube.rotation.y+=0.01;

    start+=options.speed;

    cube.position.y=5*Math.abs(Math.sin(start))
    // sphere.position.y=5*Math.abs(Math.sin(start))
    plane.position.y=5*Math.abs(Math.cos(start))



    renderer.render(scene,camera)
}
animate();
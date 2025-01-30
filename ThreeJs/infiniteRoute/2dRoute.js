import * as THREE from 'three'

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z=5;

const renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement)

//create path

const path=new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2,0,0),
    new THREE.Vector3(-1,1,0),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(1,-1,0),
    new THREE.Vector3(2,0,0),
],false,'catmullrom',0.5)

const extrudeSettings={
    steps:100,
    bevelEnabled:false,
    extrudePath:path

}

const shape=new THREE.Shape();
shape.moveTo(0,0)
shape.lineTo(0.5,0)
shape.lineTo(0.5,0.5)
shape.lineTo(0,0.5)
shape.lineTo(0,0)

const pathGeometry=new THREE.ExtrudeGeometry(shape,extrudeSettings)
const pathMaterial=new THREE.MeshBasicMaterial({color:0x00ff00,wireframe:true})
const gamePath=new THREE.Mesh(pathGeometry,pathMaterial)
scene.add(gamePath);

//create player
const playerGeometry=new THREE.BoxGeometry(0.2,0.2,0.2);
const playerMaterial=new THREE.MeshBasicMaterial({color:0xff0000})
const player=new THREE.Mesh(playerGeometry,playerMaterial)
scene.add(player)

//Handle player movement
document.addEventListener("keydown",(e)=>{
    switch(e.code){
        case 'ArrowLeft' : player.position.x-=0.1;
        break;
        case 'ArrowRight' : player.position.x += 0.1;
        break
    }
})

//HandleWindow resize
window.addEventListener('resize',()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth/innerHeight)
})

function animate(){
    requestAnimationFrame(animate)



    renderer.render(scene,camera)

}
animate()
import * as THREE from "three"

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,500);
const renderer=new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.z=5

//create geometry
const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load('soap-bubbles-8253276_1280.webp');
scene.background = textureLoader.load('deer-8164879_1280.webp')

const roadGeometry=new THREE.PlaneGeometry(window.innerWidth,6,1,1)
const roadMaterial=new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("istockphoto-1160552245-612x612.jpg"),side: THREE.DoubleSide})
const roadMesh=new THREE.Mesh(roadGeometry,roadMaterial);
roadMesh.rotation.x=-Math.PI/2
roadMesh.position.y=-2
scene.add(roadMesh);
console.log(roadMesh)

//2d character

let mouse = textureLoader.load('ai-generated-7699925_1280.webp')
const charMaterial=new THREE.SpriteMaterial({map: mouse})
const char=new THREE.Sprite(charMaterial)
char.position.y=-1.7
scene.add(char)

if(char.position.x <window.innerWidth){
    char.position.x=0
}

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  };
  
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
  
  function handleKeyDown(event) {
    keys[event.code] = true;
  }
  
  function handleKeyUp(event) {
    keys[event.code] = false;
  }

  console.log(window.innerHeight)



function animate(){
    requestAnimationFrame(animate)

    // Move the road
    roadMesh.position.x += 0.05;
  
    if (roadMesh.position.x > 5) {
      roadMesh.position.x = -5;
    }

    const speed = 0.1;

    if (keys.ArrowUp) {
      char.position.y += speed;
      if (char.position.y > window.innerHeight / 2) {
        char.position.y = window.innerHeight / 2;
      }
    }
  
    if (keys.ArrowDown) {
      char.position.y -= speed;
      if (char.position.y < -window.innerHeight / 2) {
        char.position.y = -window.innerHeight / 2;
      }
    }
  
    if (keys.ArrowLeft) {
      char.position.x -= speed;
      if (char.position.x < -6) {
        char.position.x = -6;
      }
    }
  
    if (keys.ArrowRight) {
      
      char.position.x += speed;
      if (char.position.x > 6 ) {
        char.position.x = 6;
      }
    }
    renderer.render(scene,camera)
    // console.log(renderer)
}
animate()


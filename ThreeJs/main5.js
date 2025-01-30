import * as THREE from "three";

// Set up scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

// Array to store road meshes, colors, and initial positions
const roads = [
  { color: 0x0000ff, initialPosition: -8 },
  { color: 0xff00ff, initialPosition: -6.5 },
  { color: 0x00ff00, initialPosition: -5 },
];

// Create road
function createRoad(color, xPosition) {
  const roadGeometry = new THREE.PlaneGeometry(
    window.innerWidth / 800,
    1,
    1,
    1
  );
  const roadMaterial = new THREE.MeshBasicMaterial({
    color: color,
    side: THREE.DoubleSide,
  });
  const roadMesh = new THREE.Mesh(roadGeometry, roadMaterial);
  roadMesh.position.x = xPosition;
  roadMesh.position.y = -2;
  scene.add(roadMesh);
  return roadMesh;
}

// Create road meshes using the array
const roadMeshes = roads.map(({ color, initialPosition }) =>
  createRoad(color, initialPosition)
);

// Create character
function createCharacter() {
  const characterGeometry = new THREE.PlaneGeometry(0.5, 0.5);
  const characterMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("ai-generated-7699925_1280.webp"),
  });
  const character = new THREE.Mesh(characterGeometry, characterMaterial);
  character.position.y = -1.5;
  character.position.x = -8;
  scene.add(character);
  return character;
}

const character = createCharacter();
const velocity = 0.1;

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      // Move the character
      character.position.x += velocity;
      if (character.position.x > 8) character.position.x = -8;

      // Move the roads based on character position
      roadMeshes.forEach((roadMesh) => {
        roadMesh.position.x += velocity;
        if (roadMesh.position.x > 8) {
          roadMesh.position.x = -8;
        }
      });
  }
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();

 // import * as THREE from "three";

        // // Set up scene
        // const scene = new THREE.Scene();
        // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
        // const renderer = new THREE.WebGLRenderer();
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(renderer.domElement);
        // camera.position.z = 5;

        // // Array to store road meshes, colors, and initial positions
        // const roads = [
        // { color: 0x0000ff, initialPosition: -8 },
        // { color: 0xff00ff, initialPosition: -6.5 },
        // { color: 0x00ff00, initialPosition: -5 }
        // ];

        // // Create road
        // function createRoad(color, xPosition) {
        // const roadGeometry = new THREE.PlaneGeometry(window.innerWidth / 800, 1, 1, 1);
        // const roadMaterial = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
        // const roadMesh = new THREE.Mesh(roadGeometry, roadMaterial);
        // roadMesh.position.x = xPosition;
        // roadMesh.position.y = -2;
        // scene.add(roadMesh);
        // return roadMesh;
        // }
        

        // // Create road meshes using the array
        // const roadMeshes = roads.map(({ color, initialPosition }) => createRoad(color, initialPosition));
        // console.log(roadMeshes)


        // // Create character
        // function createCharacter() {
        // const characterGeometry = new THREE.PlaneGeometry(0.5, 0.5);
        // const characterMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("ai-generated-7699925_1280.webp") });
        // const character = new THREE.Mesh(characterGeometry, characterMaterial);
        // character.position.y = -1.5;
        // character.position.x = -8;
        // scene.add(character);
        // return character;
        // }

        // const character = createCharacter();
        // const velocity = 0.1;

        // // Handle keyboard input
        // document.addEventListener("keydown", (event) => {
        // switch (event.key) {

        //     case 'ArrowRight':
        //     character.position.x += velocity;
        //     if (character.position.x > 8) character.position.x = 8;

        //     // Move the road based on character position
        //     roadMeshes.forEach((roadMesh, index) => {

        //         if (character.position.x > roads[index].initialPosition + (roads[2].initialPosition-roads[1].initialPosition)) {
        //         roadMesh.position.x = roads[index].initialPosition +(roads[2].initialPosition-roads[1].initialPosition)*3;
        //         console.log(roadMesh)
        //         // roads[2]=roads[index].initialPosition +(roads[2].initialPosition-roads[1].initialPosition)*3
        //         }
                
        //     });
              
        //     break;
        // }
        // });
        // console.log(roads[2])

        // // Animation loop
        // function animate() {
        // requestAnimationFrame(animate);

        // renderer.render(scene, camera);
        // }

        // animate();


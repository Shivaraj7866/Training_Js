// import * as THREE from "three"

// const scene=new THREE.Scene();
// const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,500);
// const renderer=new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth,window.innerHeight)
// document.body.appendChild(renderer.domElement)

// camera.position.z=5

// // //create geometry
// // const textureLoader = new THREE.TextureLoader();
// // // scene.background = textureLoader.load('soap-bubbles-8253276_1280.webp');
// // scene.background = textureLoader.load("Images/road.jpg")

// const roadGeometry2=new THREE.PlaneGeometry(window.innerWidth/400,2,1,1)
// const roadMaterial2=new THREE.MeshBasicMaterial({color:0x0000ff})
// const roadMesh2=new THREE.Mesh(roadGeometry2,roadMaterial2);
// // roadMesh2.rotation.x=-Math.PI/2
// roadMesh2.position.x=-7.3
// roadMesh2.position.y=-2
// scene.add(roadMesh2)

// const roadGeometry=new THREE.PlaneGeometry(window.innerWidth/400,2,1,1)
// const roadMaterial=new THREE.MeshBasicMaterial({color:0xff00ff,side: THREE.DoubleSide})
// const roadMesh=new THREE.Mesh(roadGeometry,roadMaterial);
// // roadMesh.rotation.x=-Math.PI/2
// roadMesh.position.y=-2
// roadMesh.position.x=-4.27
// scene.add(roadMesh);


// const roadGeometry3=new THREE.PlaneGeometry(window.innerWidth/400,2,1,1)
// const roadMaterial3=new THREE.MeshBasicMaterial({color:0x00ff00})
// const roadMesh3=new THREE.Mesh(roadGeometry3,roadMaterial3);
// // roadMesh3.rotation.x=-Math.PI/2
// roadMesh3.position.x=-1.24
// roadMesh3.position.y=-2
// scene.add(roadMesh3)

// // const roadGeometry4=new THREE.PlaneGeometry(window.innerWidth/400,2,1,1)
// // const roadMaterial4=new THREE.MeshBasicMaterial({color:0x00ffff})
// // const roadMesh4=new THREE.Mesh(roadGeometry4,roadMaterial4);
// // // roadMesh4.rotation.x=-Math.PI/2
// // roadMesh4.position.x=1.7
// // roadMesh4.position.y=-2
// // scene.add(roadMesh4)

// //2d character

// let characterGeometry=new THREE.PlaneGeometry(0.5,0.5)
// let characterMaterial=new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("ai-generated-7699925_1280.webp")})
// let character=new THREE.Mesh(characterGeometry,characterMaterial)
// character.position.y=-1.5
// character.position.x=-8
// scene.add(character)

// let velocity=0.1;

//     document.addEventListener("keydown",(event)=>{

//       switch(event.key){
    
//         case 'ArrowLeft' : 
//         character.position.x-=velocity;
//         if(character.position.x <-8) character.position.x=-8;
        
//         break;
    
//         case 'ArrowRight' : 
//         character.position.x+=velocity;
//         if(character.position.x >8) character.position.x=8;

//         if(character.position.x > -4.36){
//           roadMesh2.position.x=1.7
//         }

//         if(character.position.x > -1.33){
//           roadMesh.position.x=4.75
//         }

//         if(character.position.x > 1.77){
//           roadMesh3.position.x=7.8
//         }
//         break;
//       }
//     })


// function animate(){
//     requestAnimationFrame(animate)
    

//     // Move the road
//     // roadMesh.position.x += 0.05;
  
//     if (roadMesh.position.x > 5) {
//       roadMesh.position.x = -7.4;
//     }
 
//     renderer.render(scene,camera)
//     // console.log(renderer)
// }
// animate()

// import * as THREE from "three";

// // Set up scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// camera.position.z = 5;

// // Create road
// function createRoad(color, xPosition) {
//     const roadGeometry = new THREE.PlaneGeometry(window.innerWidth / 400, 2, 1, 1);
//     const roadMaterial = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
//     const roadMesh = new THREE.Mesh(roadGeometry, roadMaterial);
//     roadMesh.position.x = xPosition;
//     roadMesh.position.y = -2;
//     scene.add(roadMesh);
//     return roadMesh;
// }

// const roadMesh2 = createRoad(0x0000ff, -7.3);
// const roadMesh = createRoad(0xff00ff, -4.27);
// const roadMesh3 = createRoad(0x00ff00, -1.24);

// // Create character
// function createCharacter() {
//     const characterGeometry = new THREE.PlaneGeometry(0.5, 0.5);
//     const characterMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("ai-generated-7699925_1280.webp") });
//     const character = new THREE.Mesh(characterGeometry, characterMaterial);
//     character.position.y = -1.5;
//     character.position.x = -8;
//     scene.add(character);
//     return character;
// }

// const character = createCharacter();
// const velocity = 0.1;

// // Handle keyboard input
// document.addEventListener("keydown", (event) => {
//     switch (event.key) {
          
//         case 'ArrowRight':
//             character.position.x += velocity;
//             if (character.position.x > 8) character.position.x = 8;

//             // Move the road based on character position
//             if (character.position.x > -4.36) roadMesh2.position.x = 1.7;
//             if (character.position.x > -1.33) roadMesh.position.x = 4.75;
//             if (character.position.x > 1.77) roadMesh3.position.x = 7.8;

//             break;
//     }
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);

//     if (roadMesh.position.x > 5) {
//         roadMesh.position.x = -7.4;
//     }

//     renderer.render(scene, camera);
// }

// animate();


// updated code

        import * as THREE from "three";

        // Set up scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        camera.position.z = 5;

        // Array to store road meshes, colors, and initial positions
        const roads = [
        { color: 0x0000ff, initialPosition: -8 },
        { color: 0xff00ff, initialPosition: -6.5 },
        { color: 0x00ff00, initialPosition: -5 }
        ];
        
        // Create road
        function createRoad(color, xPosition) {
        const roadGeometry = new THREE.PlaneGeometry(window.innerWidth / 800, 1, 1, 1);
        const roadMaterial = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
        const roadMesh = new THREE.Mesh(roadGeometry, roadMaterial);
        roadMesh.position.x = xPosition;
        roadMesh.position.y = -2;
        scene.add(roadMesh);
        return roadMesh;
        }
        
        // Create road meshes using the array
        const roadMeshes = roads.map(({ color, initialPosition }) => createRoad(color, initialPosition));
        console.log(roadMeshes)

        // Create character
        function createCharacter() {
        const characterGeometry = new THREE.PlaneGeometry(0.5, 0.5);
        const characterMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("ai-generated-7699925_1280.webp") });
        const character = new THREE.Mesh(characterGeometry, characterMaterial);
        character.position.y = -1.5;
        character.position.x = -8;
        scene.add(character);
        return character;
        }

        const character = createCharacter();
        const velocity = 0.1;

        // Handle keyboard input
        document.addEventListener("keydown", (event) => {
        switch (event.key) {

            case 'ArrowRight':
            character.position.x += velocity;
            if (character.position.x > 8) character.position.x = -8;

            let newRoad=[];

            for (let index = 1; index < roads.length; index++) {
                const element = roads[index];
                newRoad.push(element)
                console.log(newRoad)
            }
            roads[0]
            newRoad.push(roads[0])
            // console.log(newRoad)

            // Move the road based on character position
            roadMeshes.forEach((roadMesh, index) => {

                if (character.position.x > roads[index].initialPosition + 1.5) {
                roadMesh.position.x = roads[index].initialPosition +1.5*3;
                roads[index].initialPosition = roadMesh.position.x 
                console.error(roadMesh.position.x , "kumsu")
                return;
                // roads[2]=roads[index].initialPosition +(roads[2].initialPosition-roads[1].initialPosition)*3
                }
                
            });
              
            break;
        }
        });
        console.log(roads[2])

        // Animation loop
        function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
        }

        animate();

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

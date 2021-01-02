var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var texture = new THREE.TextureLoader().load("paul.jpg");
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ map: texture });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const render = (event) => {
  const xMovePercentage = event ? event.clientX / screenWidth : 0;
  const yMovePercentage = event ? event.clientY / screenHeight : 0;

  cube.rotation.x = yMovePercentage * 10;
  cube.rotation.y = xMovePercentage * 10;

  renderer.render(scene, camera);
};

document.addEventListener("mousemove", render);

render();

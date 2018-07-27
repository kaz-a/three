import * as THREE from 'three';
import { lookupData, historicalData } from './datafeed';

const lookup = lookupData.then(data => {
  console.log('lookup:', data.data)
})

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffff0)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 0.0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true }) 

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();




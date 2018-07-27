import * as THREE from 'three';
import lookupData from './datafeed';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
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




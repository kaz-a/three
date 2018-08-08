import React, { Component } from 'react';
import * as THREE from 'three';

class Scene extends Component {
  constructor(){
    super()
    
  }
  three(){
    const {data, name} = this.props;

    // Scene, camera, camera position
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.2, 25000);
    camera.position.set(100, -400, 2000);
    scene.add(camera)

    // Render
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('space').appendChild(renderer.domElement)
    
    // Lighting
    const light = new THREE.PointLight(0xffffff, 1, 4000);
    light.position.set(50, 0, 0);
    const light_two = new THREE.PointLight(0xffffff, 1, 4000);
    light_two.position.set(-100, 800, 800);
    const lightAmbient = new THREE.AmbientLight(0x404040);
    scene.add(light, light_two, lightAmbient);
   
    // Create spheres from data
    for(let i=0; i<data.length; i++){
      const largeSphere = data[i].currentPrice >= 100;
      const geometry = new THREE.SphereGeometry(data[i].currentPrice, largeSphere ? 20 : 10, largeSphere ? 20 : 10);
      const material = new THREE.MeshPhongMaterial({ color: data[i].name == name ? 0xff0000 : 0xffff00, wireframe: true }) 
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.z = 0;     
      mesh.position.x = Math.random() * window.innerWidth * 2 - window.innerWidth;
      mesh.position.y = Math.random() * window.innerWidth * 2 - window.innerWidth;
      mesh.direction = { x: Math.random(), y: Math.random() }
      scene.add(mesh)

      // console.log(mesh)

      const animate = () => {
        requestAnimationFrame(animate);

        mesh.rotation.x += Math.random()/100;
        mesh.rotation.y += Math.random()/100;

        mesh.position.x += mesh.direction.x;
        mesh.position.y += mesh.direction.y;
        if(mesh.position.x < -window.innerWidth || mesh.position.x > window.innerWidth) {
          mesh.direction.x = -mesh.direction.x
        } 
        if(mesh.position.y < -window.innerHeight || mesh.position.y > window.innerHeight){
          mesh.direction.y = -mesh.direction.y
        }

        renderer.render(scene, camera);
      }
      
      animate()
    }
  }

  render(){
    return (
      <div id='space'>
        { this.props.data.length ? this.three() : null }
      </div>
    );
  }
}

export default Scene;
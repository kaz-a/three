import React, { Component } from 'react';
import * as THREE from 'three';

class Scene extends Component {
  constructor(){
    super();
    
  }

  three(){
    const {data} = this.props;
    console.log('data:', data)
       
    // Scene, camera, camera position
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.2, 25000);
    camera.position.set(100, -400, 2000);
    scene.add(camera)

    // Render
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('space').appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1, 4000);
    light.position.set(50, 0, 0);
    const light_two = new THREE.PointLight(0xffffff, 1, 4000);
    light_two.position.set(-100, 800, 800);
    const lightAmbient = new THREE.AmbientLight(0x404040);
    scene.add(light, light_two, lightAmbient);

    // Create spheres from data
    for(let i=0; i<data.length; i++){
      const largeSphere = data[i].currentPrice >= 1000;
      const geometry = new THREE.SphereGeometry(data[i].currentPrice, largeSphere ? 30 : 10, largeSphere ? 30 : 10);
      const material = new THREE.MeshPhongMaterial({ color: 0xffff00, wireframe: true }) 
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.z = 0;     
      if(data[i].symbol === 'GOOG'){
        mesh.position.x = data[i].currentPrice - 3000;
        mesh.position.y = data[i].currentPrice - 2000;
      } else if(data[i].symbol === 'AMZN'){
        mesh.position.x = data[i].currentPrice;
        mesh.position.y = data[i].currentPrice - 4200;
      } else {
        mesh.position.x = i * 200;
        mesh.position.y = Math.random() * -200;
      }
      // console.log(mesh)
      scene.add(mesh)

      const animate = () => {
        requestAnimationFrame(animate);
        mesh.rotation.x += Math.random()/100;
        mesh.rotation.y += Math.random()/100;

        if(mesh.position.x > window.innerWidth) {
          mesh.position.x -= Math.random()
        } else if(mesh.position.x < 0) {
          mesh.position.x += Math.random()
        } else {
          mesh.position.x += Math.random()
        }

        if(mesh.position.y > window.innerHeight) {
          mesh.position.y -= Math.random()
        } else if(mesh.position.y < 0) {
          mesh.position.y += Math.random()
        } else {
          mesh.position.y += Math.random()
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








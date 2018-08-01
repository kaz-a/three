import React, { Component } from 'react';
import * as THREE from 'three';

class SomeScene extends Component {
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

    // // Objects
    // const createSpheres = () => {
    //   //create empty 3d object — group for future spheres
    //   const spheres = new THREE.Object3D();
      
    //   // create spheres based on data
    //   for (let i = 0; i < data.length; i++) {
    //     let sphere = new THREE.SphereGeometry(data[i].currentPrice/100, 8, 8);
    //     let material = new THREE.MeshBasicMaterial({
    //         color: 0xffff00,
    //         wireframe: true
    //     })
      
    //       //creating the mesh and add primitive and material
    //       let particle = new THREE.Mesh(sphere, material);
          
    //       //randomly set position and scale
    //       const distance = 400;
    //       particle.position.x = Math.random() * distance * 10;
    //       particle.position.y = Math.random() * -distance * 6;
    //       particle.position.z = Math.random() * distance * 4;
    //       particle.rotation.y = Math.random() * 2 * Math.PI;
    //       particle.scale.x = particle.scale.y = particle.scale.z = data[i].currentPrice/100 + 5;

    //       //add particle to the spheres group
    //       spheres.add(particle);
    //     }
      
    //     //correct spheres position relative to the camera
    //     spheres.position.y = 500;
    //     spheres.position.x = -2000;
    //     spheres.position.z = -100;
    //     spheres.rotation.y = Math.PI * 600;

    //     //add spheres to the scene
    //     scene.add(spheres);
    // }

    // createSpheres();

    // renderer.render(scene, camera)

    const geometryCOF = new THREE.SphereGeometry(data[2].currentPrice, 1, 1);
    const materialCOF = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true }) 
    const meshCOF = new THREE.Mesh(geometryCOF, materialCOF);
    meshCOF.position.x = data[2].currentPrice;
    scene.add(meshCOF)

    const geometryAAPL = new THREE.SphereGeometry(data[0].currentPrice, 1, 1);
    const materialAAPL = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true }) 
    const meshAAPL = new THREE.Mesh(geometryAAPL, materialAAPL);
    meshAAPL.position.x = data[0].currentPrice;
    scene.add(meshAAPL)

    const geometryGOOG = new THREE.SphereGeometry(data[1].currentPrice, 1, 1);
    const materialGOOG = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true }) 
    const meshGOOG = new THREE.Mesh(geometryGOOG, materialGOOG);
    meshGOOG.position.x = data[1].currentPrice;
    scene.add(meshGOOG)

    // camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);

      meshCOF.rotation.x += 0.01;
      meshCOF.rotation.y += 0.01;

      meshAAPL.rotation.x += 0.02;
      meshAAPL.rotation.y += 0.02;

      meshGOOG.rotation.x += 0.02;
      meshGOOG.rotation.y += 0.02;

      renderer.render(scene, camera);
    }

    animate();
    
  }

  

  render(){
    return (
      <div id='space'>
      { this.props.data.length ? this.three() : null }
      
      </div>
    );
  }
}

export default SomeScene;








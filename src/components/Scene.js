import React, { Component } from 'react';
import * as THREE from 'three';

class Scene extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  
  three(){
    const {data, name} = this.props;
    const {scene, camera, light, renderer} = this.props.setup('space');
    console.log(name, renderer)
   
    // Create spheres from data
    for(let i=0; i<data.length; i++){
      const largeSphere = data[i].currentPrice >= 100;
      const geometry = new THREE.SphereGeometry(data[i].currentPrice, largeSphere ? 20 : 10, largeSphere ? 20 : 10);
      const material = new THREE.MeshPhongMaterial({ color: data[i].symbol.toLowerCase() === name.toLowerCase() ? 0xff0000 : 0xffff00, wireframe: true }) 
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
    const { data, name } = this.props;

    return (
      <div id='space'>
        { this.props.data.length ? this.three() : null }
      </div>
    );
  }
}

export default Scene;








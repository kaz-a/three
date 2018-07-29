import React, { Component } from 'react';
import * as THREE from 'three';
import axios from 'axios';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      lookupData: [],
      // historicalData: []
    }
  }

  fetchLookupData(){
    axios.get('/lookup')
    .then(data => {
      // console.log(data.data)
      this.setState({lookupData: data.data})
    })
  }

  // fetchHistoricalData(){
  //   axios.get('/historical')
  //   .then(data => {
  //     this.setState({historicalData: data.data})
  //   })
  // }

  componentDidMount(){
    this.fetchLookupData();
    // this.fetchHistoricalData();
  }

  three(){
    const data = this.state;
    console.log('data', data)

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true }) 
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }

  render (){
    return (
      <div>{ this.state.lookupData.length >= 1 ? this.three() : '' }</div>
    )
  }
}

export default Main;








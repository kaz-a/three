import React, { Component, Fragment } from 'react';
import * as THREE from 'three';
import axios from 'axios';
import Scene from './Scene';
import Search from './Search';

// comment out line 4 and 46 to remove search function

class Main extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      // historicalData: []
      name: '', 
      setupFunc: this.setupFunc.bind(this)
    }
    this.searchName = this.searchName.bind(this)
  }

  fetchLookupData(){
    axios.get('/lookup')
    .then(data => {
      this.setState({data: data.data})
    })
  }

  // fetchHistoricalData(){
  //   axios.get('/historical')
  //   .then(data => {
  //     this.setState({historicalData: data.data})
  //   })
  // }

  searchName(name){
    this.setState({ name })
  }

  setupFunc(id){
    // Scene, camera, camera position
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.2, 25000);
    camera.position.set(100, -400, 2000);
    scene.add(camera)

    // Render
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById(id).appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1, 4000);
    light.position.set(50, 0, 0);
    const light_two = new THREE.PointLight(0xffffff, 1, 4000);
    light_two.position.set(-100, 800, 800);
    const lightAmbient = new THREE.AmbientLight(0x404040);
    scene.add(light, light_two, lightAmbient);

    const setup = { scene, renderer, camera, light }
    return setup;
  }

  componentDidMount(){
    this.fetchLookupData();
    // this.fetchHistoricalData();
  }

  render(){
    const { data, name, setupFunc } = this.state;
    
    return (
      <Fragment>
        <Search searchName={ this.searchName } />
        <Scene data={ data } name={ name } setup={ setupFunc } /> 
      </Fragment>
    )
  }
}

export default Main;








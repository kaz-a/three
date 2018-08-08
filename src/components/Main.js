import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Scene from './Scene';
import Search from './Search';

// comment out lines 4 and 47 to remove search function

class Main extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      // historicalData: []
      name: '', 
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

  componentDidMount(){
    this.fetchLookupData();
    // this.fetchHistoricalData();
  }

  render(){
    const { data, name } = this.state;
    
    return (
      <Fragment>
        <Search data={ data } searchName={ this.searchName } />
        <Scene data={ data } name={ name } /> 
      </Fragment>
    )
  }
}

export default Main;


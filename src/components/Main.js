import React, { Component } from 'react';
import axios from 'axios';
import SomeScene from './Scene';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      // historicalData: []
    }
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

  componentDidMount(){
    this.fetchLookupData();
    // this.fetchHistoricalData();
  }

  render (){
    return (
      <SomeScene data={ this.state.data } />
    )
  }
}

export default Main;








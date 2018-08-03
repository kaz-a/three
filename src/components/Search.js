import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class Search extends Component {
  constructor(){
    super();
    this.state={
      name: '',
    }
  }

  render(){
    return (
      <div className='search'>
        <h1>Stock Prices</h1>
        <TextField
            id="search"
            label="Search a company"
            type="search"
            margin="normal"
            onChange={ (e) => this.props.searchName(e.target.value) }
          />
          <br />
          { this.props.name }
       </div>
    )
  }
  
}

export default Search;
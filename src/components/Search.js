import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Search extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
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
          onChange={ (e) => this.setState({ name: e.target.value }) }
        />
        <Button variant="fab" mini color="primary"
          onClick={ (e) => this.props.searchName(this.state.name) }
        >></Button>
      </div>
    )
  }
  
}

export default Search;

import React, { Component } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';

class Search extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.props.searchName(e.target.value)
    this.setState({ name: e.target.value })
  }

  render(){
    const { data } = this.props;
    return (
      <div className='search col-xs-12'>
        <h1>Stock Prices</h1>
        <NativeSelect
          value={this.state.name}
          onChange={this.handleChange}
        >
          <option value="">Select a company</option>
          {
            data.length && data.map(d => {
              return (
                <option key={ d.name } value={ d.name }>{ d.name }</option>
              )
            })
          }
        </NativeSelect>
      </div>
    )
  }
  
}

export default Search;

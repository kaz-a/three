import React, { Component, Fragment } from 'react';
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
    const _data = data.filter(d => d.name == this.state.name)
    
    return (
      <Fragment>
        <div className='search col-xs-12'>
          <h1>Stock Prices</h1>
          <NativeSelect
            value={this.state.name}
            onChange={this.handleChange}
          >
            <option value="Select a company">Select a company</option>
            {
              data.length && data.map(d => {
                return (
                  <option key={ d.name } value={ d.name }>{ d.name }</option>
                )
              })
            }
          </NativeSelect>
        </div>
        
        {
          _data && _data.map(d => {
            return (
              <div key={ d.name } className='text col-xm-12'>
                <h3>{ d.name }</h3>
                { d.symbol } ({ d.exchange })<br />
                Current price: { d.currentPrice }<br />
                High Price: { d.highPrice }<br />
                Low Price: { d.lowPrice }<br />
                Mean Price: { d.meanPrice }<br />
              </div>
            )
          })
        }
        
      </Fragment>
    )
  }
  
}

export default Search;

import React, { Component } from 'react'
import { css } from 'glamor'
import Dimension from './Dimension'

class PersonDimension extends Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        {"Person"}
        <div style={{position: 'relative', width: '100%', height: '200px', border: '1px solid', margin: '21px 0px', 'border-radius': '5px',
                     'background-color': 'white'}}>
          Guest
          <div style={{position: 'absolute', bottom: 5, left: 5}}>
            Cancel
          </div>
          <div style={{position: 'absolute', bottom: 5, right: 5}}>
            Apply
          </div>
        </div>
      </div>
    )
  }
}

export default Dimension(PersonDimension)
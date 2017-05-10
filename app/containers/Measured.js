import React, {Component} from 'react'
import Measure from 'react-measure'
import { View } from 'glamor/jsxstyle'
import { MENU_HEIGHT } from './Menu'

const Measured = Comp => {
  class Enhanced extends Component {
    constructor(props){
      super(props)
      this.state = {
        dimensions: {
          height: 0,
          width: 0
        }
      }
    }

    render(){
      const {width, height} = this.state.dimensions
      if (width && height) {
        return <Comp width={width} height={height-MENU_HEIGHT} {...this.props}/>
      } else {
        return (
          <Measure onMeasure={ dimensions=>this.setState({dimensions}) }>
            <div style={{height: '100%', width: '100%'}}></div>
          </Measure>
        )
      }
    }
  }
  return Enhanced
}

export default Measured
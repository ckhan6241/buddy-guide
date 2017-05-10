import React, {Component} from 'react'
import { css } from 'glamor'
import { Flex } from 'glamor/jsxstyle'
import Themed from '../../containers/Themed'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

const getStyle = (theme) => ({
  rangeContainer: css`
    width: 100%;
    max-width: 250px;
  `
})

class PriceSlider extends Component {
  constructor(props) {
    super(props)
    const { selection } = props
    this.state = {
      selection: selection
    }
  }

  handleSelection(selection) {
    this.setState({'selection': selection})
  }

  render() {
    const { min, max, theme } = this.props
    const { selection } = this.state
    const { onChange } = this.props
    const styles = getStyle(theme)
    return (
      <div{...styles.rangeContainer}>
        PriceSlider
        <div>
          <Range value={ selection } min={ min } max={ max }
                 onChange={ this.handleSelection.bind(this) } onAfterChange={ onChange }/>
        </div>
        <Flex justifyContent={ 'space-between' }>
          <div> { `Min: ${ selection[0] }` } </div>
          <div> { `Max: ${ selection[1] }` } </div>
        </Flex>
      </div>
    )
  }
}

export default Themed(PriceSlider)